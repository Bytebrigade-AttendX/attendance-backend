// mailer.js
import nodemailer from "nodemailer";
// Replace with your Mailtrap credentials
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "bcc2fa4e1aee04",
    pass: "1ac7b888caecc7",
  },
});

export const sendMail = async (mail, otp) => {
  try {
    const info = await transporter.sendMail({
      from: '"Attendx Admin" <admin@attendx.com>',
      to: mail,
      subject: "Your Attendx Login OTP",
      text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Login OTP for Attendx</h2>
          <p>Your one-time password (OTP) is:</p>
          <h3 style="color: #2e86de;">${otp}</h3>
          <p>This OTP is valid for <strong>5 minutes</strong>. Do not share it with anyone.</p>
          <p>– Attendx Team</p>
        </div>
      `,
    });
    return true;
    console.log("OTP email sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

// Call this for testing
