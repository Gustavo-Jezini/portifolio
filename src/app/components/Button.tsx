import Link from 'next/link'
import { cn } from './cn'

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  className?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<NonNullable<CommonProps['variant']>, string> = {
  primary: 'bg-primary text-background hover:bg-muted',
  secondary: 'bg-accent text-primary hover:bg-secondary',
  ghost: 'bg-transparent text-primary hover:bg-accent/30',
}

const sizes: Record<NonNullable<CommonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never
  }

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, keyof CommonProps> & {
    href: string
  }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>

  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && typeof props.href === 'string') {
    const linkProps = rest as Omit<ButtonAsLink, keyof CommonProps>
    const linkClassName = (props as ButtonAsLink).className
    return (
      <Link {...linkProps} className={cn(classes, linkClassName)}>
        {children}
      </Link>
    )
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps>
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  )
}
