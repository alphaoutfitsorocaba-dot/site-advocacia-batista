import { MapPin, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'
import { CONTACT, whatsappLink } from '@/lib/contact'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Iluminação de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <MapPin className="size-3.5 text-gold" />
          Sorocaba/SP &amp; Atendimento Digital em todo o Brasil
        </div>

        {/* Título */}
        <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-balance sm:text-6xl">
          <span className="text-gold">Tradição de +15 Anos</span> com a Agilidade da{' '}
          <span className="italic">Advocacia Moderna</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Defesa técnica, estratégica e humana. Unimos a experiência consolidada de mais de uma
          década à eficiência da advocacia digital para proteger os seus direitos com excelência.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappLink(CONTACT.david.whatsapp, CONTACT.david.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Falar com um Especialista
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#especialidades"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto"
          >
            Nossas Áreas de Atuação
          </a>
        </div>

        {/* Banner de destaque */}
        <div className="mt-14 w-full max-w-3xl rounded-2xl border border-gold/20 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center gap-3 pb-4 sm:pb-0 sm:pr-6">
              <TrendingUp className="size-7 shrink-0 text-gold" />
              <div className="text-left">
                <p className="font-serif text-2xl font-semibold text-foreground">+400</p>
                <p className="text-sm text-muted-foreground">Processos atendidos</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 pt-4 sm:pl-6 sm:pt-0">
              <ShieldCheck className="size-7 shrink-0 text-gold" />
              <div className="text-left">
                {/* 👇 AQUI REMOVEMOS A "ALTA TAXA DE SUCESSO" PARA FICAR LEGAL NA OAB */}
                <p className="font-serif text-2xl font-semibold text-foreground">Atuação</p>
                <p className="text-sm text-muted-foreground">
                  Estratégica em causas judiciais e consultivas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
