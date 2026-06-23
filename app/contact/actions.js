"use server";

import { sendContactEnquiry } from "@/lib/mail";

const ALLOWED_INTERESTS = new Set(["Buying", "Investing", "General"]);

export async function submitContactForm(_prevState, formData) {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const phone = formData.get("phone")?.trim();
  const interest = formData.get("interest");
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
