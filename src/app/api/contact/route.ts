import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactPayload = {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const { name, email, message } =
      (await req.json()) as Partial<ContactPayload>

    if (!name || !name.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Name is required.' },
        { status: 400 },
      )
    }

    if (!email || !email.trim() || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required.' },
        { status: 400 },
      )
    }

    if (!message || !message.trim() || message.trim().length < 20) {
      return NextResponse.json(
        { ok: false, error: 'Message is required (min. 20 characters).' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Server is missing RESEND_API_KEY environment variable. Add it to .env',
        },
        { status: 500 },
      )
    }

    const to = process.env.CONTACT_TO_EMAIL || 'gustavojezini@gmail.com'
    const from = process.env.CONTACT_FROM_EMAIL
    if (!from) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Server is missing CONTACT_FROM_EMAIL. Set it to something like "Portfolio <contato@contato.gustavojezini.com>" (must be a verified Resend domain).',
        },
        { status: 500 },
      )
    }

    const subject = `Contato via portfólio - ${name.trim()}`

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email.trim(),
      subject,
      text: [
        'Novo contato pelo portfólio',
        '',
        `Nome: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        'Mensagem:',
        message.trim(),
      ].join('\n'),
    })

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 },
    )
  }
}
