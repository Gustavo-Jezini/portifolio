import { ContactForm } from './ui/ContactForm'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Contato
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Me envie uma mensagem
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
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
