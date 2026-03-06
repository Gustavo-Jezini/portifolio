/* eslint-disable react/jsx-no-literals */
'use client'

import Link from 'next/link'
import { NavLink } from './NavLink'
import { useT } from '../i18n/useT'
import { type Locale } from '../i18n/i18n'

export function Navbar() {
  const { t, locale, setLocale } = useT()

  const labels: Record<Locale, string> = {
    en: t('nav.language.en', 'EN'),
    pt: t('nav.language.pt', 'PT'),
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight text-primary">
          {t('app.name', 'Gustavo Jezini')}
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink href="/">{t('nav.home', 'Home')}</NavLink>
          <NavLink href="/resume">{t('nav.resume', 'Resume')}</NavLink>
          <NavLink href="/contact">{t('nav.contact', 'Contact')}</NavLink>

          <div
            className="relative inline-flex rounded-full border border-accent/50 bg-accent/15 p-0.5 text-sm"
            role="group"
            aria-label={t('nav.language.label', 'Language')}
            title={t('nav.language.label', 'Language')}
          >
            {(Object.keys(labels) as Locale[]).map((l) => {
              const active = l === locale
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  aria-pressed={active}
                  className={
                    'inline-flex items-center justify-center rounded-full px-2.5 py-1 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ' +
                    (active
                      ? 'bg-background text-primary shadow-sm'
                      : 'text-primary/70 hover:bg-accent/30 hover:text-primary')
                  }
                >
                  {labels[l]}
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
