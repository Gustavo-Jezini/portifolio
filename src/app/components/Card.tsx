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
        'border-accent/40 bg-background/50 hover:border-primary/40 hover:bg-background/70 group flex flex-col gap-4 rounded-xl border p-5 transition',
        href && 'cursor-pointer',
      )}
    >
      <div className="space-y-1">
        <h3 className="text-primary group-hover:text-primary text-base font-semibold">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>

      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="border-accent/50 bg-accent/20 text-primary rounded-full border px-2.5 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Wrapper>
  )
}
