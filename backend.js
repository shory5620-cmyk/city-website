const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "yourapppassword"
  }
});

app.post("/send-otp", (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  const mailOptions = {
    from: "yourgmail@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: "Your OTP is: " + otp
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending OTP");
    } else {
      res.send("OTP sent");
    }
  });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email];
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
