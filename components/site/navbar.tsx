'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT, whatsappLink } from '@/lib/contact'
import { Logo } from './logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Borges Batista Advocacia - início">
          <Logo />
        </a>
        <a
          href={whatsappLink(CONTACT.david.whatsapp, CONTACT.david.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:px-5"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Consulta Rápida</span>
          <span className="sm:hidden">Consulta</span>
        </a>
      </nav>
    </header>
  )
}
