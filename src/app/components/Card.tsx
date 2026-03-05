import { cn } from './cn'

type CardProps = {
  title: string
  description: string
  tags?: string[]
  href?: string
}

export function Card({ title, description, tags = [], href }: CardProps) {
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href
        ? {
            href,
            target: '_blank',
            rel: 'noreferrer',
          }
        : {})}
      className={cn(
        'group flex flex-col gap-4 rounded-xl border border-accent/40 bg-background/50 p-5 transition hover:border-primary/40 hover:bg-background/70',
        href && 'cursor-pointer',
      )}
    >
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-primary group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>

      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/50 bg-accent/20 px-2.5 py-1 text-xs text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Wrapper>
  )
}
