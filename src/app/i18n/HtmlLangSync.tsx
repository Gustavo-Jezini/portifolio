'use client'

import { useEffect } from 'react'
import { useT } from './useT'

/**
 * Keeps <html lang> in sync with the current locale.
 * This makes the language toggle observable even when most content is SSR/static.
 */
export function HtmlLangSync() {
  const { locale } = useT()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
