'use client'

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import en from './messages/en.json'
import pt from './messages/pt.json'
import {
  type Locale,
  getInitialLocaleFromClient,
  setClientLocale,
} from './i18n'

type Messages = typeof en

const dictionaries: Record<Locale, Messages> = {
  en,
  pt,
}

type I18nContextValue = {
  locale: Locale
  messages: Messages
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

type I18nProviderProps = {
  children: React.ReactNode
  /**
   * Locale coming from SSR (cookie/header). When provided, it guarantees the
   * first client render matches the server HTML (prevents hydration errors).
   */
  initialLocale?: Locale
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return initialLocale ?? getInitialLocaleFromClient()
  })

  useEffect(() => {
    // Ensure document + storage are in sync even on first mount.
    setClientLocale(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    setClientLocale(next)

    // Also persist to a cookie so SSR can pick the same locale on refresh.
    // Keep it simple: 1 year, top-level path.
    try {
      document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`
    } catch {
      // ignore
    }
  }, [])

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      messages: dictionaries[locale],
      setLocale,
    }
  }, [locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
