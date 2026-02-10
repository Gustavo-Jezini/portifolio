import { Highlight } from '../HighlightText'

export function Banner() {
  return (
    <div className="flex flex-col gap-6 px-10 py-4 text-lg font-medium">
      <div>
        <h1>Olá!</h1>
        <p>
          Eu sou <Highlight>Gustavo Jezini</Highlight>,
        </p>
        <p>
          Desenvolvedor{' '}
          <Highlight italic font="font-semibold">
            Full-Stack.
          </Highlight>
        </p>
      </div>
      <p className="text-xs">
        Sempre <Highlight>buscando</Highlight> novos desafios !
      </p>
      <button className="rounded bg-white-100 px-4 py-2 text-xs font-bold text-dark-blue-700 shadow-md">
        Entre em contato comigo!
      </button>
    </div>
  )
}
