import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactRequest = await req.json();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['hansadhwajabiswal@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
