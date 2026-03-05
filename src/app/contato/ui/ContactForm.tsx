'use client'

import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const to = 'seuemail@exemplo.com'
    const subject = `Contato via portfólio - ${form.name || 'Anônimo'}`
    const body = `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`

    const params = new URLSearchParams({
      subject,
      body,
    })

    return `mailto:${to}?${params.toString()}`
  }, [form.email, form.message, form.name])

  return (
    <form
      className="border-accent/40 bg-background/40 space-y-4 rounded-2xl border p-6"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = mailtoHref
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-primary text-sm font-medium">Nome</span>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            placeholder="Seu nome"
            className="border-accent/50 bg-background text-primary placeholder:text-muted/60 focus:ring-primary/60 h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2"
          />
        </label>

        <label className="space-y-2">
          <span className="text-primary text-sm font-medium">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            placeholder="voce@exemplo.com"
            className="border-accent/50 bg-background text-primary placeholder:text-muted/60 focus:ring-primary/60 h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-primary text-sm font-medium">Mensagem</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          placeholder="Como posso te ajudar?"
          rows={6}
          className="border-accent/50 bg-background text-primary placeholder:text-muted/60 focus:ring-primary/60 w-full resize-none rounded-md border px-3 py-3 text-sm focus:outline-none focus:ring-2"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary">
          Enviar email
        </Button>
        <a
          href={mailtoHref}
          className="text-primary/80 hover:text-primary text-sm underline-offset-4 hover:underline"
        >
          Abrir no cliente de email
        </a>
      </div>

      <p className="text-muted text-xs">
        Dica: troque o endereço de destino em `ContactForm.tsx`.
      </p>
    </form>
  )
}
