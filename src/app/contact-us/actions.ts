// src/app/contact-us/actions.ts
'use server';

import { z } from 'zod';

// Define the schema for contact form data (can be the same as client-side)
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
});

export interface SendContactMessageResponse {
  success: boolean;
  message: string;
  errors?: { path: string, message: string }[];
}

export async function sendContactMessage(
  data: unknown // Accept unknown to validate first
): Promise<SendContactMessageResponse> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: validationResult.error.errors.map(err => ({ path: err.path.join('.'), message: err.message })),
    };
  }

  const { name, email, message } = validationResult.data;

  console.log('Received contact form submission on server:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // **IMPORTANT: Email Sending Logic (Placeholder)**
  // Here, you would integrate an email sending service like Nodemailer, SendGrid, Resend, etc.
  // Example using placeholders for environment variables:
  // const emailTo = process.env.EMAIL_TO_ADDRESS;
  // const emailFrom = process.env.EMAIL_FROM_ADDRESS;
  // const smtpUser = process.env.EMAIL_SMTP_USER;
  // const smtpPassword = process.env.EMAIL_SMTP_PASSWORD;
  // const smtpHost = process.env.EMAIL_SMTP_HOST;
  // const smtpPort = process.env.EMAIL_SMTP_PORT;

  // Example with Nodemailer (you'd need to install nodemailer: npm install nodemailer)
  /*
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort || '587'), // or 465 for SSL
    secure: parseInt(smtpPort || '587') === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${emailFrom}>`, // sender address
      to: emailTo, // list of receivers
      replyTo: email, // user's email for reply
      subject: `New Contact Message from ${name} via OPA Website`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`, // html body
    });

    console.log('Email sent successfully (simulated)');
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'There was an error sending your message. Please try again later.',
    };
  }
  */

  // For now, we'll just simulate success
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    success: true,
    message: 'Your message has been received (simulated)! We will get back to you soon.',
  };
}
