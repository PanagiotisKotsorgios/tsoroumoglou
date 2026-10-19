import { ArrowUpRight, Check, ChevronDown, LoaderCircle } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type ButtonTone = 'gold' | 'ivory' | 'outline' | 'dark'

const toneClasses: Record<ButtonTone, string> = {
  gold: 'bg-gold text-forest hover:bg-[#e2b773]',
  ivory: 'bg-ivory text-forest hover:bg-white',
  outline: 'border border-ivory/30 bg-transparent text-ivory hover:border-gold hover:text-gold',
  dark: 'bg-forest text-ivory hover:bg-[#244337]',
}

export function Button({ children, tone = 'gold', className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: ButtonTone }) {
  return (
    <button className={cn('group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest disabled:cursor-not-allowed disabled:opacity-50', toneClasses[tone], className)} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} aria-hidden="true" />
    </button>
  )
}

export function LinkButton({ children, to, tone = 'gold', className, external = false }: { children: ReactNode; to: string; tone?: ButtonTone; className?: string; external?: boolean }) {
  const content = <>{children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} aria-hidden="true" /></>
  const classes = cn('group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2', toneClasses[tone], className)
  return external ? <a className={classes} href={to} target="_blank" rel="noreferrer">{content}</a> : <Link className={classes} to={to}>{content}</Link>
}

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={cn('flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em]', light ? 'text-gold' : 'text-forest/60')}><span className={cn('h-px w-8', light ? 'bg-gold' : 'bg-gold')} />{children}</p>
}

export function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="group relative block">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full appearance-none rounded-full border border-forest/15 bg-ivory pl-5 pr-12 font-sans text-sm text-forest outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/60" aria-hidden="true" />
    </label>
  )
}

export function CheckLine({ children }: { children: ReactNode }) {
  return <div className="flex items-start gap-3 font-sans text-sm leading-6 text-forest/70"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-forest"><Check className="h-3 w-3" strokeWidth={2.5} /></span>{children}</div>
}

export function LoadingIcon() {
  return <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
}
