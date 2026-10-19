import { cn } from '../lib/utils'

type BrandMarkProps = {
  compact?: boolean
  light?: boolean
  className?: string
}

export function BrandMark({ compact = false, light = false, className }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} aria-label="ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.">
      <span className={cn('inline-flex rounded-sm bg-white px-1.5 py-1 shadow-sm', compact ? 'w-[176px] sm:w-[206px]' : 'w-[206px] sm:w-[236px]')}>
        <img src="/logo-tsouroumoglou.jpg" alt="ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ" className="block h-auto w-full" />
      </span>
      <span className={cn('hidden leading-none sm:block', compact && 'lg:hidden')}>
        <span className={cn('block font-sans text-[9px] font-semibold tracking-[0.22em]', light ? 'text-ivory/65' : 'text-forest/60')}>Ο.Ε.</span>
        <span className={cn('mt-1 block font-sans text-[9px] font-semibold tracking-[0.2em]', light ? 'text-gold' : 'text-gold')}>ΔΡΑΒΗΣΚΟΣ</span>
      </span>
    </div>
  )
}
