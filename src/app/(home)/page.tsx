'use client'

import { useMemo } from 'react'
import { useT } from '../i18n/useT'

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z"
        className="fill-current"
        opacity="0.9"
      />
      <path
        d="M5 13l.7 2.9L8.5 17l-2.8 1.1L5 21l-.7-2.9L1.5 17l2.8-1.1L5 13z"
        className="fill-current"
        opacity="0.5"
      />
      <path
        d="M19 12l.7 2.9L22.5 16l-2.8 1.1L19 20l-.7-2.9L15.5 16l2.8-1.1L19 12z"
        className="fill-current"
        opacity="0.4"
      />
    </svg>
  )
}

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6.5 7.5l5.5 4 5.5-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 mx-auto h-[520px] max-w-6xl overflow-hidden px-4"
      >
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <section className="border-b border-accent/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
                <SparkleIcon className="h-4 w-4 text-accent" />
                {t('home.hero.kicker', 'Developer')}
              </span>
              <span className="inline-flex items-center rounded-full border border-accent/40 bg-background/30 px-3 py-1 text-xs text-muted">
                {t('home.hero.available', 'Open to opportunities')}
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {t('home.hero.title', "Hi, I'm Gustavo.")}
              <span className="block text-muted">
                {t(
                  'home.hero.subtitle',
                  'I build web experiences focused on performance and UX.',
                )}
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {t(
                'home.hero.description',
                "Here you'll find a summary of my work. Feel free to reach out.",
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-background transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {t('home.hero.cta.projects', 'See projects')}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-accent/40 bg-background/40 px-4 text-sm font-semibold text-primary backdrop-blur transition hover:border-primary/40 hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <MailIcon className="h-4 w-4 text-secondary" />
                {t('home.hero.cta.contact', 'Get in touch')}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-background/40 p-6 backdrop-blur">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
            />
            <div className="relative space-y-4">
              <p className="text-sm font-medium text-primary">
                {t('home.hero.highlights.title', 'Highlights')}
              </p>
              <ul className="space-y-3 text-sm text-muted">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md border border-accent/40 bg-accent/15 text-center text-xs leading-5 text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
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
                className="group rounded-xl border border-accent/40 bg-background/40 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-primary">
                    {item.title}
                  </p>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/15 text-secondary transition group-hover:text-primary">
                    <SparkleIcon className="h-5 w-5" />
                  </span>
                </div>
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
                className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-accent/40 bg-background/50 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/70"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/15 blur-2xl transition group-hover:bg-accent/25"
                />
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

                <div className="mt-auto flex items-center justify-between gap-3">
                  <p className="text-xs text-secondary group-hover:text-primary">
                    {t('home.projects.repoCta', 'View repository →')}
                  </p>
                  <ArrowUpRightIcon className="h-4 w-4 text-secondary transition group-hover:text-primary" />
                </div>
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
                className="group rounded-xl border border-accent/40 bg-background/40 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60"
              >
                <p className="text-sm font-semibold text-primary">{c.title}</p>
                <p className="mt-1 text-sm text-muted">{c.org}</p>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs text-secondary">
                  <span className="group-hover:text-primary">
                    {t('home.certificates.cta', 'View credential →')}
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 transition group-hover:text-primary" />
                </div>
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
                className="rounded-xl border border-accent/40 bg-background/40 p-5 transition hover:border-primary/40 hover:bg-background/60"
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

          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-background/40 p-6 backdrop-blur sm:flex sm:items-center sm:justify-between">
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-secondary/15 blur-2xl"
            />
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
              className="relative mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-background transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:mt-0"
            >
              {t('home.contact.cta', 'Open contact form')}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
