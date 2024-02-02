'use client'
import { List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'

const items = [
  { name: 'CV', link: '' },
  { name: 'Projetos', link: '' },
  { name: 'Sobre mim', link: '' },
  { name: 'Contato', link: '' },
]

export function HamburguerMenu() {
  const [open, setOpen] = useState(false)
  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className="bg-white-200 md:hidden">
      <button
        className="relative right-0 top-0 px-4 py-4"
        onClick={() => handleClick()}
      >
        {open ? (
          <X className="text-dark-blue-700" weight="bold" />
        ) : (
          <List className="text-dark-blue-700" weight="fill" />
        )}
      </button>
      {open && (
        <nav className="text-dark-blue-700 bg-white-200 fixed h-screen w-screen font-medium">
          <ul className="mt-12 flex flex-col items-center justify-center gap-8">
            {items.map((item) => (
              <li
                key={item.name}
                className="bg-white-400 flex w-3/4 justify-center rounded px-2 py-4 shadow-lg"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
