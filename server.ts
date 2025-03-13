import express, { Request, Response } from "express";
import cors from "cors";
import {
  generateBadge,
  deleteBadge,
  generateBadge2,
  generateBadge3,
} from "./src/generator";
import { sendBadge } from "./src/mailer";
import brevoMailer from "./src/brevo-mailer";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("🎫 Badge Generator Server is running.");
});

app.post("/generate/:type", async (req: Request, res: Response) => {
  try {
    const { id, email, fullname } = req.body;
    const type = req.params.type;

    console.log("📥 Received data:", { id, email, fullname });

    // Generate badge
    const badgePath = await generateBadge(id, fullname, type);

    // Send badge via email
    await sendBadge(email, badgePath, type);

    // Delete badge after sending
    await deleteBadge(badgePath);

    res.status(200).send(`✅ Badge generated and sent: ${id}.png`);
  } catch (error) {
    console.error("❌ Error handling generate request:", error);
    res.status(500).send("Error generating badge");
  }
});

app.post("/generate2", async (req: Request, res: Response) => {
  try {
    const { id, email, fullname } = req.body;
    console.log("📥 Received data:", { id, email, fullname });
    const badgePath = await generateBadge2(id, fullname);
    console.log(badgePath);
    // await brevoMailer(email, badgePath)
    await brevoMailer(email, "./src/badge/test.txt")
    res.status(200).send(`✅ Badge generated and sent: ${id}.png`);
  } catch (error) {
    console.error("❌ Error handling generate request:", error);
    res.status(500).send("Error generating badge");
  }
});
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
