import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
