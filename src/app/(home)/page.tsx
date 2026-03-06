'use client'

import { useMemo } from 'react'
import { useT } from '../i18n/useT'

type AboutCard = { title: string; desc: string }
type ProjectItem = {
  title: string
  description: string
  tech?: string[]
  href?: string
  repo?: string
  deployUrl?: string
}
type CertificateItem = { title: string; org: string; href: string }
type EducationItem = { title: string; subtitle: string; period: string }

export default function Home() {
  const { t } = useT()

  const aboutCards = useMemo(() => {
    return (t('home.about.cards') as unknown as AboutCard[]) ?? []
  }, [t])

  const highlights = useMemo(() => {
    return (t('home.hero.highlights.items') as unknown as string[]) ?? []
  }, [t])

  const projects = useMemo(() => {
    return (t('home.projects.items') as unknown as ProjectItem[]) ?? []
  }, [t])

  const certificates = useMemo(() => {
    return (t('home.certificates.items') as unknown as CertificateItem[]) ?? []
  }, [t])

  const educationItems = useMemo(() => {
    return (t('home.education.items') as unknown as EducationItem[]) ?? []
  }, [t])

  const githubBaseUrl = t(
    'home.projects.githubBaseUrl',
    'https://github.com/SEU_USUARIO',
  )

  const resolveProjectHref = (p: ProjectItem) => {
    if (p.href) return p.href
    if (p.deployUrl) return p.deployUrl

    if (p.repo) {
      // allow either full URL or "owner/repo" shorthand
      if (p.repo.startsWith('http://') || p.repo.startsWith('https://')) {
        return p.repo
      }
      const base = typeof githubBaseUrl === 'string' ? githubBaseUrl : ''
      const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
      return `${normalizedBase}/${p.repo.replace(/^\//, '')}`
    }

    return typeof githubBaseUrl === 'string'
      ? githubBaseUrl
      : 'https://github.com/SEU_USUARIO'
  }

  return (
    <div>
      <section className="border-b border-accent/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('home.hero.kicker', 'Developer')}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {t('home.hero.title', "Hi, I'm Gustavo.")}
              <span className="block text-muted">
                {t(
                  'home.hero.subtitle',
                  'I build web experiences focused on performance and UX.',
                )}
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              {t(
                'home.hero.description',
                "Here you'll find a summary of my work. Feel free to reach out.",
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-background transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {t('home.hero.cta.projects', 'See projects')}
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-primary transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {t('home.hero.cta.contact', 'Get in touch')}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-background/40 p-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary">
                {t('home.hero.highlights.title', 'Highlights')}
              </p>
              <ul className="space-y-3 text-sm text-muted">
                {highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-xs text-muted">
                {t(
                  'home.hero.highlights.note',
                  '(Edit this block to match your real strengths.)',
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('home.about.kicker', 'About')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {t('home.about.title', 'A bit about me')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(
                'home.about.description',
                'Write a short bio about you and your work.',
              )}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {aboutCards.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-accent/40 bg-background/40 p-5"
              >
                <p className="text-sm font-semibold text-primary">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-b border-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('home.projects.kicker', 'Projects')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {t('home.projects.title', "Some things I've built")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(
                'home.projects.description',
                'Replace title, description, tech and links.',
              )}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <a
                key={`${p.title}-${idx}`}
                href={resolveProjectHref(p)}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-4 rounded-xl border border-accent/40 bg-background/50 p-5 transition hover:border-primary/40 hover:bg-background/70"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-primary">
                    {p.title ??
                      `${t('home.projects.itemFallbackTitle', 'Project')} ${idx + 1}`}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {p.description ??
                      t(
                        'home.projects.itemFallbackDescription',
                        'Describe the problem, solution and outcome.',
                      )}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(p.tech ?? []).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/50 bg-accent/20 px-2.5 py-1 text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-secondary group-hover:text-primary">
                  {t('home.projects.repoCta', 'View repository →')}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('home.certificates.kicker', 'Certificates')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {t('home.certificates.title', 'Certifications and credentials')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t('home.certificates.description', 'Add links to credentials.')}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-accent/40 bg-background/40 p-5 transition hover:border-primary/40"
              >
                <p className="text-sm font-semibold text-primary">{c.title}</p>
                <p className="mt-1 text-sm text-muted">{c.org}</p>
                <p className="mt-4 text-xs text-secondary">
                  {t('home.certificates.cta', 'View credential →')}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('home.education.kicker', 'Education')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {t('home.education.title', 'Education and courses')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(
                'home.education.description',
                'Show your degree and a relevant course.',
              )}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {educationItems.map((item) => (
              <div
                key={`${item.title}-${item.period}`}
                className="rounded-xl border border-accent/40 bg-background/40 p-5"
              >
                <p className="text-sm font-semibold text-primary">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                <p className="mt-2 text-xs text-secondary">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('contact.page.kicker', 'Contact')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {t('home.contact.title', "Let's talk?")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(
                'home.contact.description',
                'If you have a role or project, reach out.',
              )}
            </p>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-background/40 p-6 sm:flex sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-primary">
                {t('home.contact.emailLabel', 'Email')}
              </p>
              <p className="text-sm text-muted">
                {t(
                  'home.contact.emailValue',
                  t('contact.form.to', 'you@example.com'),
                )}
              </p>
            </div>
            <a
              href="/contact"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-background transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:mt-0"
            >
              {t('home.contact.cta', 'Open contact form')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
