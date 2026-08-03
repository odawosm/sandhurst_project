"use server";

import { sendContactEnquiry } from "@/lib/mail";

const ALLOWED_INTERESTS = new Set(["Buying", "Investing", "General"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(_prevState, formData) {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const phone = formData.get("phone")?.trim();
  const interest = formData.get("interest");
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { error: "Invalid email address." };
  }
  if (!ALLOWED_INTERESTS.has(interest)) {
    return { error: "Invalid interest value." };
  }

  try {
    await sendContactEnquiry({ name, email, phone: phone || "", interest, message });
    return { success: true };
  } catch (err) {
    console.error("[contact] mail error:", err);
    return { error: "Failed to send your message. Please try again or contact us directly." };
  }
}

// ponytail: waitlist signups reuse the enquiry mailer — they land in the same inbox,
// tagged [Waitlist]. Swap for a real list (CRM/Mailchimp) when volume justifies it.
export async function joinWaitlist(_prevState, formData) {
  const email = formData.get("email")?.trim();
  const source = formData.get("source")?.trim().slice(0, 100);

  if (!email || !EMAIL_RE.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await sendContactEnquiry({
      name: email,
      email,
      phone: "",
      interest: source ? `Waitlist · ${source}` : "Waitlist",
      message: "Requested to join the waitlist for upcoming releases.",
    });
    return { success: true };
  } catch (err) {
    console.error("[waitlist] mail error:", err);
    return { error: "Something went wrong. Please try again." };
  }
}
