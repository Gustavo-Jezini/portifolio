import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { I18nProvider } from './i18n/I18nProvider'
import { HtmlLangSync } from './i18n/HtmlLangSync'
import en from './i18n/messages/en.json'
import { cookies } from 'next/headers'
import { isLocale, type Locale } from './i18n/i18n'

// This app uses client state (localStorage) for language switching.
// Avoid prerender/export errors by opting into dynamic rendering.
export const dynamic = 'force-dynamic'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: en.app.meta.title,
  description: en.app.meta.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const cookieLocale = cookieStore.get('locale')?.value
  const initialLocale: Locale = isLocale(cookieLocale ?? '')
    ? (cookieLocale as Locale)
    : 'en'

  return (
    <html lang={initialLocale}>
      <body className={inconsolata.className}>
        <I18nProvider initialLocale={initialLocale}>
          <HtmlLangSync />
          <div className="min-h-dvh bg-background text-primary">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}
