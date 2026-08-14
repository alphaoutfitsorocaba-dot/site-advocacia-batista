import Image from 'next/image'
import { MessageCircle, BadgeCheck } from 'lucide-react'
import { CONTACT, whatsappLink } from '@/lib/contact'
import davidPhoto from '@/public/david.png'
import matheusPhoto from '@/public/matheus.png'

type Partner = {
  name: string
  oab: string
  photo: typeof davidPhoto
  role: string
  description: string
  tags: string[]
  whatsapp: string
  message: string
}

const partners: Partner[] = [
  {
    name: CONTACT.david.name,
    oab: CONTACT.david.oab,
    photo: davidPhoto,
    role: 'Sócio Sênior',
    description:
      'Com mais de 15 anos de atuação, o Dr. David construiu uma sólida reputação na defesa dos direitos de seus clientes. Especialista em Direito Cível, Trabalhista, Penal, Previdenciário e Direito Militar.',
    tags: ['Cível', 'Trabalhista', 'Penal', 'Previdenciário', 'Direito Militar (Exclusivo)'],
    whatsapp: CONTACT.david.whatsapp,
    message: CONTACT.david.whatsappMessage,
  },
  {
    name: CONTACT.matheus.name,
    oab: CONTACT.matheus.oab,
    photo: matheusPhoto,
    role: 'Advocacia Contemporânea & Digital',
    description:
      'Representando a nova geração da advocacia, o Dr. Matheus une tecnologia e estratégia para entregar agilidade e eficiência. Atuação focada nas áreas Cível e Trabalhista.',
    tags: ['Cível', 'Trabalhista', 'Atendimento Digital'],
    whatsapp: CONTACT.matheus.whatsapp,
    message: CONTACT.matheus.whatsappMessage,
  },
]

export function Partners() {
  return (
    <section id="socios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Quem defende você
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Nossos Sócios
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Advogados dedicados, éticos e comprometidos com o resultado de cada causa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {partners.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-gold/30 sm:flex-row"
            >
              <div className="relative h-72 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52">
                <Image
                  src={p.photo}
                  alt={`Retrato de ${p.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 208px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent sm:bg-gradient-to-r" />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-2 text-gold">
                  <BadgeCheck className="size-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{p.role}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="text-sm font-medium text-gold/80">{p.oab}</p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={whatsappLink(p.whatsapp, p.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  <MessageCircle className="size-4" />
                  Falar com {p.name.split(' ')[0]} {p.name.split(' ')[1]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
