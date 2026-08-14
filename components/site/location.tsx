import { MapPin, Clock, Navigation } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

export function Location() {
  return (
    <section id="localizacao" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-md sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/10 blur-[100px]" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Onde estamos
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
                Atendimento presencial em Sorocaba/SP
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Receba um atendimento personalizado e reservado em nosso escritório. Para clientes
                de outras cidades, mantemos toda a comodidade do atendimento digital.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">{CONTACT.address}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atendimento presencial com hora marcada
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Segunda a Sexta, 9h às 18h</p>
                    <p className="text-sm text-muted-foreground">
                      Casos urgentes atendidos a qualquer horário
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.02]"
              >
                <Navigation className="size-4" />
                Abrir Endereço no Google Maps
              </a>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 sm:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/[0.02]">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <MapPin className="size-7 text-gold" />
                </div>
                <p className="relative font-serif text-lg text-foreground">
                  Borges Batista Advocacia
                </p>
                <p className="relative max-w-[16rem] text-pretty px-4 text-center text-sm text-muted-foreground">
                  Jardim Montreal, Sorocaba - SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
