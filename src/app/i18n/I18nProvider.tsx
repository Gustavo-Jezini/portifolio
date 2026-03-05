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

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocaleFromClient)

  useEffect(() => {
    // Ensure document + storage are in sync even on first mount.
    setClientLocale(locale)
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      console.log('[i18n] setLocale', { from: locale, to: next })
      setLocaleState(next)
      setClientLocale(next)
    },
    [locale],
  )

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      messages: dictionaries[locale],
      setLocale,
    }
  }, [locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
