import { cn } from './cn'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/50 bg-accent/20 px-2.5 py-1 text-xs font-medium text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
