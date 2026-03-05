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
      className="space-y-4 rounded-2xl border border-accent/40 bg-background/40 p-6"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = mailtoHref
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-primary">Nome</span>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            placeholder="Seu nome"
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-primary">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            placeholder="voce@exemplo.com"
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-primary">Mensagem</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          placeholder="Como posso te ajudar?"
          rows={6}
          className="w-full resize-none rounded-md border border-accent/50 bg-background px-3 py-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary">
          Enviar email
        </Button>
        <a
          href={mailtoHref}
          className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
        >
          Abrir no cliente de email
        </a>
      </div>

      <p className="text-xs text-muted">
        Dica: troque o endereço de destino em `ContactForm.tsx`.
      </p>
    </form>
  )
}
