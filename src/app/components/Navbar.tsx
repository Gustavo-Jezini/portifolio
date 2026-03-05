/* eslint-disable react/jsx-no-literals */
'use client'

import Link from 'next/link'
import { NavLink } from './NavLink'
import { useT } from '../i18n/useT'
import { type Locale } from '../i18n/i18n'

export function Navbar() {
  const { t, locale, setLocale } = useT()

  const toggleLocale = () => {
    const next: Locale = locale === 'en' ? 'pt' : 'en'
    console.log('[i18n] toggleLocale', { from: locale, to: next })
    setLocale(next)
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
          <NavLink href="/contato">{t('nav.contact', 'Contact')}</NavLink>

          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-md px-3 py-2 text-sm font-medium text-primary/80 transition hover:bg-accent/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label={t('nav.language.label', 'Language')}
            title={t('nav.language.label', 'Language')}
          >
            {locale === 'en'
              ? t('nav.language.pt', 'PT')
              : t('nav.language.en', 'EN')}
          </button>
        </nav>
      </div>
    </header>
  )
}
