import Link from 'next/link'
import { HamburguerMenu } from './HamburguerMenu'

export function Header() {
  return (
    <header className="fixed w-full">
      <HamburguerMenu />
      <div className="hidden md:flex">
        <h1>Dev. G.J.</h1>
        <nav>
          <ul>
            <li>
              <Link href="">CV</Link>
            </li>
            <li>
              <Link href="">Sobre mim</Link>
            </li>
            <li>
              <Link href="">Projetos</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
