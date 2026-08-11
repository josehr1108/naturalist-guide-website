"use server";

import nodemailer from "nodemailer";

export async function sendMail(formData: FormData) {
  const name = formData.get("name")?.toString()?.trim();
  const email = formData.get("email")?.toString()?.trim();
  const subject = formData.get("subject")?.toString()?.trim();
  const message = formData.get("message")?.toString()?.trim();

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fromName = process.env.SMTP_FROM_NAME ?? "Raul Obregón Birdman CR";
  const fromAddress =
    process.env.SMTP_USER || "inforaulobregonbirdmancr@gmail.com";
  const toAddress = process.env.CONTACT_TO || "raulobregonbirdmancr@gmail.com";

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      replyTo: `"${name}" <${email}>`,
      to: toAddress,
      subject: subject
        ? `New contact form: ${subject}`
        : "New contact form message",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject ?? "N/A"}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject ?? "N/A"}</p>
             <p>${message}</p>`,
    });

    return { success: true };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: "Failed to send email" };
  }
}
