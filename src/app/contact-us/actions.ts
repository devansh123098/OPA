// src/app/contact-us/actions.ts
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for contact form data
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

  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: parseInt(process.env.EMAIL_SMTP_PORT || '587'),
    secure: parseInt(process.env.EMAIL_SMTP_PORT || '587') === 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SMTP_USER,
      pass: process.env.EMAIL_SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_FROM_ADDRESS}>`, // Use a generic from address you control
    to: process.env.EMAIL_TO_ADDRESS, // Your association's email address
    replyTo: email, // The user's email address for easy replies
    subject: `New Contact Message from ${name} via OPA Website`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    // Verify connection configuration (optional, but good for debugging)
    // await transporter.verify(); 
    // console.log("Nodemailer server is ready to take messages");

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Nodemailer');
    return {
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error sending email with Nodemailer:', error);
    // It's good practice to not expose detailed error messages to the client
    // For debugging, you can check the server logs for the `error` object
    return {
      success: false,
      message: 'There was an error sending your message. Please try again later or contact us directly.',
    };
  }
}
