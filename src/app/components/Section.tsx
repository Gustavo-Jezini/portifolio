import { cn } from './cn'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-14', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  )
}
