'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from './cn'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-primary/80 hover:bg-accent/30 hover:text-primary focus-visible:ring-primary/60 rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2',
        isActive && 'bg-accent/40 text-primary',
      )}
    >
      {children}
    </Link>
  )
}
