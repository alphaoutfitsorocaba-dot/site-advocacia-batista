import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-md border border-gold/40 bg-gradient-to-br from-gold/25 to-transparent',
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-serif text-lg font-semibold tracking-tight text-gold">BB</span>
    </div>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Monogram className="size-10 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-base font-semibold tracking-wide text-foreground sm:text-lg">
          BORGES BATISTA
        </span>
        {!compact && (
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold/80">
            Advocacia
          </span>
        )}
      </div>
    </div>
  )
}
