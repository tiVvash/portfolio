
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    console.log("Request body:", body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("Sending email to:", process.env.EMAIL_USER);

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
      replyTo: email,
    });
    

    console.log("Email sent successfully");
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json({ message: 'Error sending message', error: err }, { status: 500 });
  }
}
