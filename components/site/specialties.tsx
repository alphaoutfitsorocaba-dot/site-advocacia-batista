'use client'

import { useState } from 'react'
import {
  Scale,
  Briefcase,
  Landmark,
  Gavel,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT, whatsappLink } from '@/lib/contact'

type Area = {
  id: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  topics: string[]
  exclusiveDavid?: boolean
}

const areas: Area[] = [
  {
    id: 'civel',
    label: 'Cível & Família',
    icon: Scale,
    title: 'Direito Cível & Família',
    description:
      'Resolução de conflitos patrimoniais e familiares com sensibilidade e firmeza técnica, sempre buscando a melhor resolução legal para o seu caso.',
    topics: [
      'Divórcios, inventários e partilhas',
      'Ações de indenização e danos morais',
      'Contratos e cobranças',
      'Pensão alimentícia e guarda',
    ],
  },
  {
    id: 'trabalhista',
    label: 'Trabalhista',
    icon: Briefcase,
    title: 'Direito Trabalhista',
    description:
      'Defesa dos direitos de trabalhadores e orientação a empresas, com atuação estratégica para garantir verbas e acordos justos.',
    topics: [
      'Verbas rescisórias e horas extras',
      'Reconhecimento de vínculo',
      'Assédio moral e doenças ocupacionais',
      'Defesa empresarial em reclamatórias',
    ],
  },
  {
    id: 'previdenciario',
    label: 'Previdenciário (INSS)',
    icon: Landmark,
    title: 'Direito Previdenciário',
    description:
      'Acompanhamento completo junto ao INSS para garantir aposentadorias e benefícios de forma ágil e sem burocracia desnecessária.',
    topics: [
      'Aposentadorias e revisões',
      'Auxílio-doença e BPC/LOAS',
      'Pensão por morte',
      'Recursos administrativos e judiciais',
    ],
  },
  {
    id: 'penal',
    label: 'Penal / Criminal',
    icon: Gavel,
    title: 'Direito Penal / Criminal',
    description:
      'Defesa criminal técnica e disponível 24h, com atuação em todas as fases do processo garantindo o pleno direito de defesa.',
    topics: [
      'Defesa em inquéritos e ações penais',
      'Habeas corpus e liberdade provisória',
      'Audiências de custódia',
      'Acompanhamento em delegacias',
    ],
  },
  {
    id: 'militar',
    label: 'Direito Militar',
    icon: ShieldCheck,
    title: 'Direito Militar',
    description:
      'Atuação especializada na defesa de militares das Forças Armadas e Auxiliares, em processos administrativos e da Justiça Militar.',
    topics: [
      'Processos administrativos disciplinares',
      'Conselhos de justificação e disciplina',
      'Reforma e pensões militares',
      'Defesa na Justiça Militar',
    ],
    exclusiveDavid: true,
  },
]

export function Specialties() {
  const [active, setActive] = useState(areas[0].id)
  const current = areas.find((a) => a.id === active) ?? areas[0]

  return (
    <section id="especialidades" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Como podemos ajudar
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Áreas de Especialidade
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Atuação multidisciplinar com profundidade técnica em cada área do Direito.
          </p>
        </div>

        {/* Abas */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {areas.map((area) => {
            const Icon = area.icon
            const isActive = area.id === active
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setActive(area.id)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'border-gold/50 bg-gold text-primary-foreground shadow-lg shadow-gold/20'
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground',
                )}
              >
                <Icon className="size-4" />
                {area.label}
              </button>
            )
          })}
        </div>

        {/* Conteúdo */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
              <current.icon className="size-6 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">{current.title}</h3>
          </div>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {current.description}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {current.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-gold" />
                {topic}
              </li>
            ))}
          </ul>

          {current.exclusiveDavid && (
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/[0.07] p-5 sm:p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-foreground/90">
                    <span className="font-semibold text-gold">Atuação exclusiva:</span> a área de
                    Direito Militar é conduzida diretamente pelo{' '}
                    <span className="font-semibold">Dr. David Borges Batista</span> ({CONTACT.david.oab}).
                  </p>
                </div>
                <a
                  href={whatsappLink(CONTACT.david.whatsapp, CONTACT.david.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" />
                  Falar com Dr. David
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
