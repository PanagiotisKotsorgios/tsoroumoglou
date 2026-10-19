import type { ReactNode } from 'react'
import { LinkButton, SectionEyebrow } from './ui'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
  imageAlt: string
  action?: { label: string; to: string; external?: boolean }
}

export function PageHero({ eyebrow, title, description, image, imageAlt, action }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-forest pb-16 pt-36 text-ivory sm:pb-20 lg:min-h-[72vh] lg:pb-28">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-60" loading="eager" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,46,37,0.97)_0%,rgba(24,46,37,0.73)_48%,rgba(24,46,37,0.2)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[clamp(4.6rem,8vw,8.2rem)]">{title}</h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-7 text-ivory/72 sm:text-lg">{description}</p>
          {action && <LinkButton to={action.to} tone="gold" className="mt-9" external={action.external}>{action.label}</LinkButton>}
        </div>
      </div>
      <div className="absolute bottom-7 right-5 hidden items-center gap-3 font-sans text-[10px] uppercase tracking-[0.18em] text-ivory/55 sm:flex lg:right-12"><span className="h-px w-12 bg-gold" />Δραβήσκος / Σέρρες</div>
    </section>
  )
}
