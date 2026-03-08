'use client'

import { useCallback, useId, useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { useT } from '../../i18n/useT'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

export function ContactForm() {
  const { t } = useT()
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const mailtoHref = useMemo(() => {
    const to = t('contact.form.to', 'gustavojezini@gmail.com')
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

  const toEmail = useMemo(
    () => t('contact.form.to', 'gustavojezini@gmail.com'),
    [t],
  )

  const validate = useCallback(
    (next: FormState): FormErrors => {
      const nextErrors: FormErrors = {}

      if (!next.name.trim()) {
        nextErrors.name = t(
          'contact.form.validation.nameRequired',
          'Please enter your name.',
        )
      }

      if (!next.email.trim()) {
        nextErrors.email = t(
          'contact.form.validation.emailRequired',
          'Please enter your email.',
        )
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
        nextErrors.email = t(
          'contact.form.validation.emailInvalid',
          'Please enter a valid email.',
        )
      }

      if (!next.message.trim()) {
        nextErrors.message = t(
          'contact.form.validation.messageRequired',
          'Please write a short message.',
        )
      } else if (next.message.trim().length < 20) {
        nextErrors.message = t(
          'contact.form.validation.messageMinLength',
          'A bit more detail helps (min. 20 characters).',
        )
      }

      return nextErrors
    },
    [t],
  )

  const isValid = useMemo(
    () => Object.keys(validate(form)).length === 0,
    [form, validate],
  )

  const submitToApi = useCallback(async () => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form),
    })

    const payload = (await res.json().catch(() => null)) as
      | { ok: true; id?: string }
      | { ok: false; error?: string }
      | null

    if (!res.ok || !payload || payload.ok === false) {
      const errorMessage =
        payload && 'error' in payload && payload.error
          ? payload.error
          : 'Failed to send message.'
      throw new Error(errorMessage)
    }

    return payload
  }, [form])

  return (
    <form
      className="space-y-5 rounded-2xl border border-accent/40 bg-background/40 p-6"
      noValidate
      onSubmit={(e) => {
        e.preventDefault()

        setSubmitError(null)
        setSubmitSuccess(false)

        const nextErrors = validate(form)
        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return

        setIsSubmitting(true)
        ;(async () => {
          try {
            await submitToApi()
            setSubmitSuccess(true)
            setForm({ name: '', email: '', message: '' })
          } catch (err) {
            // Fallback: if server-side sending fails, still allow mailto to work.
            const message = err instanceof Error ? err.message : String(err)
            setSubmitError(message)
            window.location.href = mailtoHref
          } finally {
            window.setTimeout(() => setIsSubmitting(false), 400)
          }
        })()
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary">
            {t('contact.form.title', 'Send a message')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-xs text-primary">
            {t('contact.form.badge', 'Recruiter-friendly')}
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-sm font-medium text-primary">
            {t('contact.form.fields.name.label', 'Name')}
          </label>
          <input
            id={nameId}
            value={form.name}
            onChange={(e) => {
              const value = e.target.value
              setForm((s) => ({ ...s, name: value }))
              if (errors.name) setErrors((s) => ({ ...s, name: undefined }))
            }}
            placeholder={t('contact.form.fields.name.placeholder', 'Your name')}
            autoComplete="name"
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
          />
          {errors.name ? (
            <p id={`${nameId}-error`} className="text-xs text-secondary">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm font-medium text-primary">
            {t('contact.form.fields.email.label', 'Email')}
          </label>
          <input
            type="email"
            id={emailId}
            value={form.email}
            onChange={(e) => {
              const value = e.target.value
              setForm((s) => ({ ...s, email: value }))
              if (errors.email) setErrors((s) => ({ ...s, email: undefined }))
            }}
            placeholder={t(
              'contact.form.fields.email.placeholder',
              'you@example.com',
            )}
            autoComplete="email"
            inputMode="email"
            className="h-11 w-full rounded-md border border-accent/50 bg-background px-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className="text-xs text-secondary">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={messageId} className="text-sm font-medium text-primary">
          {t('contact.form.fields.message.label', 'Message')}
        </label>
        <textarea
          id={messageId}
          value={form.message}
          onChange={(e) => {
            const value = e.target.value
            setForm((s) => ({ ...s, message: value }))
            if (errors.message) setErrors((s) => ({ ...s, message: undefined }))
          }}
          placeholder={t(
            'contact.form.fields.message.placeholder',
            'How can I help?',
          )}
          rows={6}
          className="w-full resize-none rounded-md border border-accent/50 bg-background px-3 py-3 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
        />
        {errors.message ? (
          <p id={`${messageId}-error`} className="text-xs text-secondary">
            {errors.message}
          </p>
        ) : (
          <p className="text-xs text-muted">
            {t(
              'contact.form.messageHint',
              'Tip: include role/company, stack, and timeline.',
            )}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting
            ? t('contact.form.actions.submitting', 'Sending…')
            : t('contact.form.actions.submit', 'Send message')}
        </Button>
        <a
          href={mailtoHref}
          className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
        >
          {t('contact.form.actions.openClient', 'Preview mailto link')}
        </a>

        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(toEmail)
              setCopied(true)
              window.setTimeout(() => setCopied(false), 1200)
            } catch {
              // ignore (clipboard permissions)
            }
          }}
          className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
        >
          {copied
            ? t('contact.form.actions.copied', 'Copied!')
            : t('contact.form.actions.copyEmail', 'Copy email')}
        </button>
      </div>

      {submitSuccess ? (
        <p className="text-xs text-primary">
          {t('contact.form.success', 'Message sent! Thanks for reaching out.')}
        </p>
      ) : null}

      {submitError ? (
        <p className="text-xs text-secondary">
          {t(
            'contact.form.submitError',
            'Could not send via server. Opening your email client instead. ({error})',
          ).replace('{error}', submitError)}
        </p>
      ) : null}
    </form>
  )
}
