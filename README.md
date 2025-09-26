# 🎟 Badge Generator

## 📌 Overview
The **Badge Generator** is a Node.js application that automates the creation of personalized badges for registered users. It integrates with **Google Forms** and **Google Apps Script** to handle form submissions, then processes the data using `node-canvas` for badge rendering and `bwip-js` for barcode generation.

This tool is ideal for events, conferences, or membership-based organizations needing an automated badge creation system.

## ✨ Features
- **Automated Badge Creation**: Generates personalized badges based on form submissions.
- **Google Forms Integration**: Captures user registration data via **Google Apps Script**.
- **Dynamic Badge Rendering**: Uses `node-canvas` to overlay user details onto a badge template.
- **Barcode Support**: Generates unique barcodes for each user using `bwip-js`.
- **Email Delivery**: Automatically sends the generated badge to users via email.
- **Customizable Badge Template**: Modify the design to fit your branding.

---

## 🏗 Tech Stack
- **Backend**: Node.js, Express.js
- **Image Processing**: node-canvas
- **Barcode Generation**: bwip-js
- **Data Handling**: Google Apps Script (for receiving form submissions)
- **Email Delivery**: Nodemailer / External APIs (configurable)

---

## 🔧 Installation

### ✅ Prerequisites
Before installing, ensure you have:
- [Node.js](https://nodejs.org/) installed.
- [npm](https://www.npmjs.com/) package manager installed.

### 📥 Steps to Install
1. **Clone the repository**:
   ```
   git clone https://github.com/VictorChukwudi/badgeGenerator.git
   cd badgeGenerator
    ```
2. **Install Dependencies**:
    ```
    npm install
    ```
3. **Setup environment variables**: 
   The EMAIL is the sender's email address and the PASSWORD is the sender App Password.
   ```
    PORT=5000
    EMAIL = 
    PASSWORD = 
    
   ```
4. **Start the server**
   ```
   npm start

   ```

   ## 📌 API Endpoint: Generate Badge

### `POST /generate/:type`
Generates a badge of the specified type.

#### Path Parameters
| Parameter | Type | Allowed Values | Description |
|-----------|------|---------------|-------------|
| `type`    | `string` | `"moga"`, `"top"` | Specifies the badge type to generate. |

#### Request Body (JSON)
```json
{
  "fullname": "John Doe",
  "id": "12345",
  "email": "johndoe@example.com"
}
