import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { Highlight } from '../components/HighlightText'
import { SectionResumo } from './SectionResumo'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Banner />
      <div className="to-white-300 h-8 bg-gradient-to-b from-white" />

      <SectionResumo />

      <div className="to-white-300 h-8 bg-gradient-to-t from-white" />

      <section className="flex h-48 w-screen flex-col gap-6 bg-white px-6"></section>
    </div>
  )
}
