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

  /**
   * Generic translator that returns the raw value from the dictionary.
   * - If the path points to a string, returns a string.
   * - If it points to an array/object, returns that value.
   * - If it's missing, returns the provided fallback (if any) or the key.
   */
  const t = <T = unknown>(key: string, fallback?: T) => {
    const value = getByPath(ctx.messages, key) as T | undefined
    if (value !== undefined) return value
    return fallback ?? (key as unknown as T)
  }

  /** String-only helper (most common for UI text). */
  const ts = (key: string, fallback?: string) => {
    const value = getByPath(ctx.messages, key)
    if (typeof value === 'string') return value
    return fallback ?? key
  }

  return {
    t,
    ts,
    locale: ctx.locale,
    setLocale: ctx.setLocale,
  }
}
