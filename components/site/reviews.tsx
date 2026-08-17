import { Star, ExternalLink, Quote } from 'lucide-react'

// Link oficial da Advocacia Borges Batista no Google Maps/Avaliações
const GOOGLE_REVIEWS_LINK = 'https://www.google.com/search?sca_esv=3a75f9ad15a7c092&rlz=1CDGOYI_enBR1129BR1182&hl=pt&sxsrf=APpeQnvPuNBKdwz8BdB6FBJ99ZS6DKhGXQ:1787000414326&kgmid=/g/11nv12n7py&q=Advocacia+Borges+Batista&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/3&kgs=27e5e9d8d14c8fe3&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/3'

const testimonials = [
  {
    content:
      'Excelente atendimento e clareza nas orientações jurídicas. Profissionais extremamente éticos e comprometidos.',
    author: 'Cliente Verificado',
    area: 'Direito Cível',
  },
  {
    content:
      'Profissionalismo impecável. Fui atendido com muita agilidade e atenção aos detalhes do meu caso.',
    author: 'Cliente Verificado',
    area: 'Direito Trabalhista',
  },
]

export function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Transparência e Confiança
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            A Opinião de Quem Confia em Nosso Trabalho
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            O reconhecimento do nosso compromisso ético e da dedicação jurídica em cada causa.
          </p>
        </div>

        {/* Cards de Depoimentos Sóbrios */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-colors hover:border-gold/30"
            >
              <Quote className="absolute top-6 right-6 size-10 text-gold/10" />
              <div>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="text-xs text-gold/80">{item.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão direcionando para o Google da Advocacia Borges Batista */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
