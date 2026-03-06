'use client'

import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { useT } from '../../i18n/useT'

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const { t } = useT()
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const to = t('contact.form.to', 'youremail@example.com')
    const subjectPrefix = t(
      'contact.form.subjectPrefix',
      'Contact via portfolio',
    )
    const anonymous = t('contact.form.anonymous', 'Anonymous')
    const subject = `${subjectPrefix} - ${form.name || anonymous}`

    const bodyLines = [
      `${t('contact.form.fields.name.label', 'Name')}: ${form.name}`,
      `${t('contact.form.fields.email.label', 'Email')}: ${form.email}`,
      '',
      `${t('contact.form.fields.message.label', 'Message')}:`,
      form.message,
    ]
    const body = bodyLines.join('\n')

    const params = new URLSearchParams({
      subject,
      body,
    })

    return `mailto:${to}?${params.toString()}`
  }, [form.email, form.message, form.name, t])

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
          <span className="text-sm font-medium text-primary">
            {t('contact.form.fields.name.label', 'Name')}
          </span>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            placeholder={t('contact.form.fields.name.placeholder', 'Your name')}
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-primary">
            {t('contact.form.fields.email.label', 'Email')}
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            placeholder={t(
              'contact.form.fields.email.placeholder',
              'you@example.com',
            )}
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-primary">
          {t('contact.form.fields.message.label', 'Message')}
        </span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          placeholder={t(
            'contact.form.fields.message.placeholder',
            'How can I help?',
          )}
          rows={6}
          className="w-full resize-none rounded-md border border-accent/50 bg-background px-3 py-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary">
          {t('contact.form.actions.submit', 'Send email')}
        </Button>
        <a
          href={mailtoHref}
          className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
        >
          {t('contact.form.actions.openClient', 'Open in email client')}
        </a>
      </div>

      <p className="text-xs text-muted">
        {t(
          'contact.form.hint',
          'Tip: change the destination address in `ContactForm.tsx`.',
        )}
      </p>
    </form>
  )
}
