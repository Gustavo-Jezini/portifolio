/* eslint-disable react/jsx-no-literals */

'use client'

import Link from 'next/link'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { useT } from '../i18n/useT'

type Experience = {
  role: string
  company: string
  period: string
  summary: string
  highlights?: string[]
}

export default function ResumePage() {
  const { t } = useT()

  const experiences =
    (t('resume.experience.items') as unknown as Experience[]) ?? []

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-background/40 p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {t('resume.page.kicker', 'Resume')}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {t('resume.page.title', 'Experience')}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {t(
                'resume.page.description',
                'Timeline similar to LinkedIn. Edit entries to match your journey.',
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-background/30">
                {t('resume.badges.remote', 'Remote-friendly')}
              </Badge>
              <Badge className="bg-background/30">
                {t('resume.badges.team', 'Team player')}
              </Badge>
              <Badge className="bg-background/30">
                {t('resume.badges.ownership', 'Ownership')}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <Button
              href="/contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {t('resume.page.ctaContact', 'Get in touch')}
            </Button>
            <p className="text-sm text-muted">
              {t(
                'resume.page.ctaHint',
                'Quick reply: LinkedIn message or email works best.',
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              {t('resume.experience.title', 'Career highlights')}
            </h2>
            <p className="text-sm text-muted">
              {t('resume.experience.subtitle', 'Latest roles first')}
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}-${exp.role}`}
                className="relative pl-10"
              >
                <div className="pointer-events-none absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-primary/30 via-accent/40 to-transparent" />
                <div className="absolute left-[9px] top-7 size-3 rounded-full border border-primary/40 bg-background shadow-sm" />

                <div className="group rounded-2xl border border-accent/40 bg-background/40 p-6 transition hover:border-primary/40 hover:bg-background/60 sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-lg font-semibold leading-tight text-primary sm:text-xl">
                        {exp.role}
                      </p>
                      <p className="mt-1 text-base text-muted">{exp.company}</p>
                    </div>

                    <div className="shrink-0">
                      <Badge className="border-primary/30 bg-background/20 text-primary">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
                    {exp.summary}
                  </p>

                  {exp.highlights?.length ? (
                    <ul className="mt-5 grid gap-2 text-sm text-muted sm:text-base">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-accent/40 bg-background/40 p-6">
            <p className="text-sm font-semibold text-primary">
              {t('resume.shortcuts.title', 'Shortcuts')}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                className="text-base text-primary/80 underline-offset-4 hover:text-primary hover:underline"
                href="/#projetos"
              >
                {t('resume.shortcuts.projects', 'See projects')}
              </Link>
              <Link
                className="text-base text-primary/80 underline-offset-4 hover:text-primary hover:underline"
                href="/contact"
              >
                {t('resume.shortcuts.contact', 'Contact')}
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-background/40 p-6">
            <p className="text-sm font-semibold text-primary">
              {t('resume.tips.title', 'How I add value')}
            </p>
            <ul className="mt-4 space-y-3 text-base text-muted">
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-primary/60" />
                {t(
                  'resume.tips.item1',
                  'I communicate clearly and document decisions.',
                )}
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-primary/60" />
                {t(
                  'resume.tips.item2',
                  'I ship incrementally with strong quality gates.',
                )}
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-primary/60" />
                {t('resume.tips.item3', 'I take ownership and unblock teams.')}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
