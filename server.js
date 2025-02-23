const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");


const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve index.html at root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Email Route
app.post("/send-email", (req, res) => {
    const { eml2, nme, eml, msg } = req.body;

    if (!eml2 || !nme || !eml || !msg) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

    const mailOptions = {
        from: eml,
        to: "jkgamingzome@gmail.com",
        subject: `Message from ${nme}`,
        text: `You have received a message from ${nme} (${eml2}):\n\n${msg}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ success: false, message: "Failed to send email." });
        }

        console.log("Email sent:", info.response);
        return res.status(200).json({ success: true, message: "Email sent successfully!" });
    });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


