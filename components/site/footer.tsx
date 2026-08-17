import { MessageCircle } from 'lucide-react'
import { CONTACT, whatsappLink } from '@/lib/contact'
import { Logo } from './logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tradição de mais de 12 anos aliada à agilidade da advocacia moderna. Sorocaba/SP e
              atendimento digital em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            {[CONTACT.david, CONTACT.matheus].map((lawyer) => (
              <div key={lawyer.oab}>
                <h3 className="font-serif text-base font-semibold text-foreground">
                  {lawyer.name}
                </h3>
                <p className="mt-1 text-sm text-gold/80">{lawyer.oab}</p>
                <a
                  href={whatsappLink(lawyer.whatsapp, lawyer.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <MessageCircle className="size-4" />
                  Contato via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground/80">
            Em observância ao Código de Ética e Disciplina da OAB, este site tem caráter meramente
            informativo, não constituindo captação de clientela ou mercantilização da advocacia. As
            informações aqui contidas não representam promessa de resultado. Cada caso é analisado
            de forma individual.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            © {year} Borges Batista Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
