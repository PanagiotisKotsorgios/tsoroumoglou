import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company, navigation } from '../data/site'
import { cn, formatPhone } from '../lib/utils'
import { BrandMark } from './BrandMark'
import { LinkButton } from './ui'

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-forest">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="relative z-50 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
          <Link to="/" aria-label="Αρχική σελίδα"><BrandMark compact light /></Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Κύρια πλοήγηση">
            {navigation.map((item) => <NavItem key={item.to} to={item.to} label={item.label} />)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.1em] text-ivory/75 transition hover:text-gold"><Phone className="h-3.5 w-3.5" aria-hidden="true" />{formatPhone(company.phone)}</a>
            <LinkButton to="/epikoinonia" tone="gold" className="min-h-11 px-5">Επικοινωνία</LinkButton>
          </div>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition hover:border-gold hover:text-gold lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div className={cn('fixed inset-0 z-40 bg-forest/98 px-6 pt-28 transition duration-300 lg:hidden', menuOpen ? 'visible opacity-100' : 'invisible opacity-0')} id="mobile-navigation">
          <nav className="flex flex-col gap-5" aria-label="Κινητή πλοήγηση">
            {navigation.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => cn('border-b border-ivory/10 pb-5 font-display text-3xl text-ivory transition hover:text-gold', isActive && 'text-gold')}>{item.label}</NavLink>)}
            <LinkButton to="/epikoinonia" tone="gold" className="mt-5 self-start">Επικοινωνία</LinkButton>
          </nav>
          <a href={`tel:${company.phone}`} className="mt-16 inline-flex items-center gap-3 font-sans text-sm text-ivory/70"><Phone className="h-4 w-4 text-gold" aria-hidden="true" />{formatPhone(company.phone)}</a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-forest text-ivory">
        <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.8fr] lg:gap-20">
            <div>
              <BrandMark light />
              <p className="mt-8 max-w-md font-display text-3xl leading-tight text-ivory/90 sm:text-4xl">Από τον τράκτορα έως το μηχάνημα έργων, η σωστή επιλογή ξεκινά από καθαρή ενημέρωση.</p>
              <LinkButton to="/epikoinonia" tone="gold" className="mt-8">Μιλήστε μαζί μας</LinkButton>
            </div>
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Περιήγηση</p>
              <nav className="mt-6 flex flex-col gap-3" aria-label="Υποσέλιδο πλοήγησης">
                {navigation.map((item) => <Link key={item.to} to={item.to} className="font-sans text-sm text-ivory/65 transition hover:text-gold">{item.label}</Link>)}
                <Link to="/epikoinonia" className="font-sans text-sm text-ivory/65 transition hover:text-gold">Επικοινωνία</Link>
              </nav>
            </div>
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Στοιχεία</p>
              <div className="mt-6 flex flex-col gap-3 font-sans text-sm text-ivory/65">
                <a href={`tel:${company.phone}`} className="transition hover:text-gold">{formatPhone(company.phone)}</a>
                <a href={`mailto:${company.email}`} className="break-all transition hover:text-gold">{company.email}</a>
                <a href={company.mapUrl} target="_blank" rel="noreferrer" className="transition hover:text-gold">{company.location}</a>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-4 border-t border-ivory/10 pt-6 font-sans text-[11px] leading-5 text-ivory/45 sm:flex-row sm:items-start sm:justify-between">
            <p>© {new Date().getFullYear()} {company.name}. Όλα τα δικαιώματα διατηρούνται.</p>
            <p className="max-w-xl sm:text-right">Το εικαστικό σήμα της ιστοσελίδας είναι custom σχεδιασμένο για τη συγκεκριμένη ψηφιακή παρουσία. Τα δημόσια στοιχεία υπόκεινται σε επιβεβαίωση από την εταιρεία.</p>
          </div>
        </div>
      </footer>
      <a href={`tel:${company.mobile}`} className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-forest shadow-2xl shadow-forest/25 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory lg:hidden" aria-label="Κλήση στο κινητό"><Phone className="h-5 w-5" aria-hidden="true" /></a>
    </div>
  )
}

function NavItem({ to, label }: { to: string; label: string }) {
  return <NavLink to={to} className={({ isActive }) => cn('relative font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-ivory/70 transition hover:text-ivory', isActive && 'text-ivory after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:bg-gold')}>{label}</NavLink>
}
