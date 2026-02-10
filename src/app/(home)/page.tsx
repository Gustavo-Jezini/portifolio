import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { Highlight } from '../components/HighlightText'
import { SectionResumo } from './SectionResumo'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Banner />
      <div className="h-8 bg-gradient-to-b from-white to-white-300" />

      <SectionResumo />

      <div className="h-8 bg-gradient-to-t from-white to-white-300" />

      <section className="flex h-48 w-screen flex-col gap-6 bg-white px-6"></section>
    </div>
  )
}
