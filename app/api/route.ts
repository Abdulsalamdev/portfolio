import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br />${message}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 }) // ✅ success response
  } catch (error) {
    console.error("Send mail error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    )
  }
}
