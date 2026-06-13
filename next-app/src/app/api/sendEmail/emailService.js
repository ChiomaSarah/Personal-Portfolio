import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function emailService(to, subject, text, html, replyTo) {
  try {
    const { data, error } = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: html,
      reply_to: replyTo,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email not sent.");
  }
}