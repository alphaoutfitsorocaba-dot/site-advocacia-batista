import { MessageCircle, ShieldCheck, Scale, ArrowRight, Award, Compass } from 'lucide-react'
import { CONTACT, whatsappLink } from '@/lib/contact'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8">
          <ShieldCheck className="size-4 text-gold" />
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            Tradição de 12 Anos com a Agilidade da Advocacia Moderna
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
          Defesa Estratégica <br className="hidden sm:inline" />
          <span className="text-gold italic font-normal">e Compromisso Absoluto</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Atuação especializada em causas cíveis, trabalhistas, penais, previdenciárias e direito militar, unindo experiência jurídica e atendimento digital ágil.
        </p>

        {/* Pilares Éticos (Substituição ideal para o antigo contador de processos) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-left">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Award className="size-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Valores Inegociáveis</h3>
              <p className="text-xs text-muted-foreground">Ética, sigilo e transparência total.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-left">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Compass className="size-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Atuação Consultiva & Contenciosa</h3>
              <p className="text-xs text-muted-foreground">Prevenção de riscos e defesa firme em juízo.</p>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink(CONTACT.david.whatsapp, CONTACT.david.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-lg shadow-gold/20"
          >
            <MessageCircle className="size-5" />
            Falar com Advogado
          </a>

          <a
            href="#especialidades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10"
          >
            <Scale className="size-5 text-gold" />
            Nossas Áreas
            <ArrowRight className="size-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
