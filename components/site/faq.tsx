'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'O atendimento pode ser feito totalmente online?',
    a: 'Sim. Atendemos clientes em todo o Brasil de forma 100% digital, com reuniões por vídeo, assinatura eletrônica de documentos e acompanhamento pelo WhatsApp. Você não precisa sair de casa para contar com a nossa defesa.',
  },
  {
    q: 'Quais documentos preciso ter para iniciar meu caso?',
    a: 'Isso varia conforme a área. Na primeira conversa, analisamos detalhadamente a sua situação e enviamos uma lista personalizada dos documentos necessários. Orientamos você em cada etapa da organização.',
  },
  {
    q: 'Vocês atuam em processos fora de Sorocaba?',
    a: 'Sim. Além do atendimento presencial em Sorocaba/SP, atuamos em processos em outras comarcas e estados, presencialmente quando necessário e por meio da estrutura da advocacia digital.',
  },
  {
    q: 'Como faço para acompanhar o andamento do meu processo?',
    a: 'Mantemos você informado de forma proativa. Enviamos atualizações a cada movimentação relevante e você pode falar diretamente com o advogado responsável pelo seu caso sempre que precisar.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-white/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={cn(
            'size-5 shrink-0 text-gold transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Tire suas dúvidas
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
