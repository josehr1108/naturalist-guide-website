"use server";

import nodemailer from "nodemailer";

export async function sendMail(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "josehr1108@gmail.com", // TODO: replace this with Raul Obregon's email
      subject: "New contact form message",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p>${message}</p>`,
    });

    return { success: true };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: "Failed to send email" };
  }
}
