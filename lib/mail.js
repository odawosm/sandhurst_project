import nodemailer from "nodemailer";

function env(name) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required environment variable: ${name}`);
  return val;
}

function createTransport() {
  const port = Number(env("SMTP_PORT"));
  return nodemailer.createTransport({
    host: env("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: env("SMTP_USER"),
      pass: env("SMTP_PASSWORD"),
    },
  });
}

export async function sendContactEnquiry({ name, email, phone, interest, message }) {
  const transporter = createTransport();
  const fromAddress = env("SMTP_FROM_EMAIL");
  const toAddress = process.env.SMTP_TO_EMAIL || fromAddress;

  await transporter.sendMail({
    from: `"Sandhurst Website" <${fromAddress}>`,
    to: toAddress,
    replyTo: `"${name}" <${email}>`,
    subject: `[${interest}] Enquiry from ${name}`,
    text: [
      `Name:     ${name}`,
      `Email:    ${email}`,
      `Phone:    ${phone || "—"}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n"),
    html: `
      <table style="font-family:sans-serif;font-size:14px;color:#222;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#888">Name</td><td>${escHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888">Email</td><td>${escHtml(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888">Phone</td><td>${escHtml(phone || "—")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888">Interest</td><td>${escHtml(interest)}</td></tr>
      </table>
      <hr style="margin:16px 0;border:none;border-top:1px solid #ddd"/>
      <p style="font-family:sans-serif;font-size:14px;color:#222;white-space:pre-wrap">${escHtml(message)}</p>
    `,
  });
}

function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
