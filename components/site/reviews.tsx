import { Star, Quote, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

function GoogleWordmark() {
  return (
    <span className="font-sans text-lg font-medium tracking-tight" aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  )
}

function Stars({ className = 'size-4' }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-gold text-gold`} />
      ))}
    </div>
  )
}

const testimonials = [
  {
    name: 'Ricardo Almeida',
    text: 'Atendimento impecável e extremamente ágil. Resolveram meu processo trabalhista com uma rapidez que eu não esperava. Transparência do início ao fim.',
  },
  {
    name: 'Juliana Ferreira',
    text: 'Profissionais sérios e humanos. Fui orientada em cada etapa do meu processo previdenciário e consegui minha aposentadoria. Recomendo de olhos fechados.',
  },
  {
    name: 'Marcos Vinícius',
    text: 'Excelente escritório. O Dr. David é um profissional preparadíssimo, especialmente em Direito Militar. Segurança e confiança em todos os momentos.',
  },
  {
    name: 'Camila Souza',
    text: 'A advocacia digital deles facilitou tudo para mim, que moro em outra cidade. Comunicação clara pelo WhatsApp e resultado excelente na minha causa.',
  },
]

export function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Prova Social
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        {/* Selo de média */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <GoogleWordmark />
            <span className="text-sm text-muted-foreground">Reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl font-semibold text-gold">5.0</span>
            <div className="flex flex-col">
              <Stars className="size-5" />
              <span className="mt-1 text-xs text-muted-foreground">
                Baseado em avaliações de clientes
              </span>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-gold/25"
            >
              <Quote className="size-7 text-gold/40" />
              <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-medium text-foreground">{t.name}</span>
                <Stars />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={CONTACT.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Ver Avaliações no Google Maps
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
