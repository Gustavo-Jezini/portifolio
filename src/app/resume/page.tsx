import Link from 'next/link'
import { Button } from '../components/Button'

type Experience = {
  role: string
  company: string
  period: string
  summary: string
  highlights?: string[]
}

const experiences: Experience[] = [
  {
    role: 'Cargo / Função',
    company: 'Empresa',
    period: '2024 — Atual',
    summary:
      'Descreva aqui o que você faz, o contexto do produto e o impacto do seu trabalho.',
    highlights: [
      'Resultados mensuráveis (ex: -20% tempo de carregamento, +15% conversão)',
      'Tecnologias, responsabilidades, colaboração',
    ],
  },
  {
    role: 'Cargo anterior',
    company: 'Empresa',
    period: '2022 — 2024',
    summary:
      'Descreva o escopo: time, projeto, problemas resolvidos e o que você aprendeu.',
  },
]

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Currículo
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Experiências
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Timeline em formato parecido com o LinkedIn. Edite os itens para
            refletir sua trajetória.
          </p>
        </div>

        <Button href="/contato" variant="primary">
          Entrar em contato
        </Button>
      </div>

      <div className="mt-10 space-y-4">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}-${exp.role}`}
            className="rounded-xl border border-accent/40 bg-background/40 p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="text-base font-semibold text-primary">
                  {exp.role}
                </p>
                <p className="text-sm text-muted">{exp.company}</p>
              </div>
              <p className="text-xs font-medium text-secondary">{exp.period}</p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {exp.summary}
            </p>

            {exp.highlights?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-background/40 p-6">
        <p className="text-sm font-semibold text-primary">Atalhos</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
            href="/#projetos"
          >
            Ver projetos
          </Link>
          <Link
            className="text-sm text-primary/80 underline-offset-4 hover:text-primary hover:underline"
            href="/contato"
          >
            Contato
          </Link>
        </div>
      </div>
    </div>
  )
}
