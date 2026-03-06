/* eslint-disable react/jsx-no-literals */
'use client'

import { ContactForm } from './ui/ContactForm'
import { useT } from '../i18n/useT'

export default function ContactPage() {
  const { t } = useT()

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t('contact.page.kicker', 'Contact')}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {t('contact.page.title', 'Send me a message')}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t(
            'contact.page.description',
            'This form opens your email client (no backend).',
          )}
        </p>
      </div>

      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  )
}
