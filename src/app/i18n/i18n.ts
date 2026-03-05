export const supportedLocales = ['en', 'pt'] as const

export type Locale = (typeof supportedLocales)[number]

const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value)
}

export function normalizeLocale(value: string | null | undefined): Locale {
  if (!value) return defaultLocale

  const lower = value.toLowerCase()

  // Accept common browser forms like "en-US" or "pt-BR"
  const base = lower.split('-')[0]
  if (isLocale(base)) return base

  return defaultLocale
}

export function getInitialLocaleFromClient(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const stored = window.localStorage.getItem('locale')
  if (stored && isLocale(stored)) return stored

  const navLang = window.navigator.language
  return normalizeLocale(navLang)
}

export function setClientLocale(locale: Locale) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}
