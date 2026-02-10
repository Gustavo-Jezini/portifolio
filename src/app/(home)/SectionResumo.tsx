import { Card } from '../components/Card'
import { Highlight } from '../components/HighlightText'

export function SectionResumo() {
  return (
    <section className="flex w-screen flex-col gap-6 bg-white-300 px-6">
      <h2>
        <Highlight italic font="font-semibold">
          {'<Dev.Resumo>'}
        </Highlight>
      </h2>
      <Card>
        <p className="text-xs font-medium antialiased ">
          Tenho <Highlight>experiencia de 2 anos</Highlight> em uma FinTech como{' '}
          <Highlight>Desenvolvedor Full Stack</Highlight>. <br />
          <br /> Nesse projeto programei utilizando a linguagem{' '}
          <Highlight>JavaScript</Highlight>. Utilizei o{' '}
          <Highlight>React</Highlight> para criar uma interface de usuário e o{' '}
          <Highlight>Node.js</Highlight> para criar uma API REST. Além disso,
          utilizei o banco de dados <Highlight>MongoDB</Highlight> para
          armazenar os dados.
        </p>
      </Card>
      <h2>
        <Highlight italic font="font-semibold">
          {'</Dev.Resumo>'}
        </Highlight>
      </h2>
    </section>
  )
}
