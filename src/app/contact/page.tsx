/* eslint-disable react/jsx-no-literals */
'use client'

import { ContactForm } from './ui/ContactForm'
import { useT } from '../i18n/useT'

export default function ContactPage() {
  const { t } = useT()

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border border-accent/40 bg-background/30 p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('contact.page.kicker', 'Contact')}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {t('contact.page.title', "Let's talk")}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(
                'contact.page.description',
                'Want to discuss a role, a freelance project, or just say hi? Send a message and I’ll reply as soon as possible.',
              )}
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl border border-accent/40 bg-background/40 p-4">
                <p className="text-sm font-medium text-primary">
                  {t(
                    'contact.page.cards.fastTitle',
                    'Fast context for recruiters',
                  )}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t(
                    'contact.page.cards.fastDescription',
                    'Share the position, stack, and location/remote details. I’ll respond with availability and next steps.',
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
