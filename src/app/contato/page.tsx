import { ContactForm } from './ui/ContactForm'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
          Contato
        </p>
        <h1 className="text-primary mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Me envie uma mensagem
        </h1>
        <p className="text-muted mt-3 text-sm leading-relaxed">
          Este formulário abre seu cliente de email com os dados preenchidos
          (sem backend). Se quiser, eu posso adicionar envio real via API Route
          (Next.js) + Nodemailer depois.
        </p>
      </div>

      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  )
}
