import nodemailer from "nodemailer";
import { company } from "@/lib/site";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, email, phone, interest, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Enquiry notification to the company
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: company.email,
      replyTo: email,
      subject: `[${interest}] Enquiry from ${name}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: "We've received your enquiry — Sandhurst Projects",
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${name},</p>
        <p>We've received your enquiry and will get back to you as soon as possible.</p>
        <hr />
        <h3>Your message details:</h3>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Best regards,<br />Sandhurst Projects</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
