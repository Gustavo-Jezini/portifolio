'use client'

import { useContext } from 'react'
import { I18nContext } from './I18nProvider'

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (
      acc &&
      typeof acc === 'object' &&
      key in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function useT() {
  const ctx = useContext(I18nContext)

  if (!ctx) {
    throw new Error('useT must be used inside <I18nProvider>')
  }

  const t = (key: string, fallback?: string) => {
    const value = getByPath(ctx.messages, key)
    if (typeof value === 'string') return value
    return fallback ?? key
  }

  return {
    t,
    locale: ctx.locale,
    setLocale: ctx.setLocale,
  }
}
