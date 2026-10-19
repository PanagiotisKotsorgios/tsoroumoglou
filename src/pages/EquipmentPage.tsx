import { ArrowUpRight, ExternalLink, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { LinkButton, SectionEyebrow, SelectField } from '../components/ui'
import { company, equipmentCategories, listings, type Listing } from '../data/site'

const filters = ['Όλες οι κατηγορίες', 'Φορτηγά', 'Τράκτορες', 'Επικαθήμενα', 'Μηχανήματα', 'Γεωργικά']

export function EquipmentPage() {
  const [filter, setFilter] = useState(filters[0])
  const filtered = useMemo(() => listings.filter((listing) => {
    if (filter === filters[0]) return true
    if (filter === 'Φορτηγά') return listing.category === 'Ανατροπή'
    if (filter === 'Τράκτορες') return listing.category === 'Τράκτορας'
    if (filter === 'Επικαθήμενα') return ['Επικαθήμενο', 'Μεταφορά μηχανημάτων'].includes(listing.category)
    if (filter === 'Μηχανήματα') return listing.category === 'Εκσκαφέας με λάστιχα'
    return false
  }), [filter])

  return (
    <>
      <PageHero eyebrow="Αγγελίες / 03" title={<>Όχι απλώς <em className="text-sage not-italic">κατάλογος.</em></>} description="Επιλεγμένα οχήματα και μηχανήματα από τις δημόσιες καταχωρίσεις του dealer profile. Για την πιο πρόσφατη εικόνα, ανοίξτε το car.gr." image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2200&q=88" imageAlt="Μηχάνημα έργων σε εργοτάξιο" action={{ label: 'Άνοιγμα dealer profile', to: company.listingsUrl, external: true }} />

      <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><Reveal><SectionEyebrow>Επιλεγμένες καταχωρίσεις</SectionEyebrow><h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Το όχημα που ψάχνετε, <span className="text-sage">πιο κοντά.</span></h2></Reveal><Reveal delay={0.1}><p className="max-w-xl font-sans text-base leading-7 text-forest/65">Τα παρακάτω μοντέλα και χαρακτηριστικά προέρχονται από το δημόσιο dealer profile κατά τον έλεγχο της σελίδας. Οι τιμές, η διαθεσιμότητα και οι λεπτομέρειες μπορεί να έχουν αλλάξει.</p></Reveal></div>
          <div className="mt-12 flex flex-col gap-4 border-y border-forest/15 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/55"><SlidersHorizontal className="h-4 w-4 text-gold" />Φίλτρο κατηγορίας</div><div className="w-full sm:max-w-xs"><SelectField label="Επιλογή κατηγορίας" value={filter} onChange={setFilter} options={filters} /></div></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((listing, index) => <Reveal key={listing.id} delay={index * 0.04}><ListingCard listing={listing} /></Reveal>)}</div>
          {filtered.length === 0 && <div className="border border-dashed border-forest/20 py-20 text-center"><p className="font-display text-3xl">Δεν βρέθηκαν καταχωρίσεις σε αυτή την προβολή.</p><p className="mt-3 font-sans text-sm text-forest/60">Δείτε ολόκληρο το dealer profile για περισσότερες κατηγορίες.</p></div>}
        </div>
      </section>

      <section className="bg-[#e8eadf] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1440px]"><Reveal><SectionEyebrow>Κατηγορίες στο profile</SectionEyebrow><h2 className="mt-6 max-w-3xl font-display text-5xl leading-none tracking-[-0.055em] sm:text-7xl">Δείτε και το <span className="text-forest/40">σύνολο.</span></h2></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{equipmentCategories.map((category, index) => <Reveal key={category.id} delay={index * 0.05}><a href={category.href} target="_blank" rel="noreferrer" className="group flex min-h-[300px] flex-col overflow-hidden bg-forest text-ivory"><div className="relative h-36 overflow-hidden"><img src={category.image} alt={category.imageAlt} className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" /></div><div className="flex flex-1 flex-col p-5"><p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{category.count} αγγελίες</p><h3 className="mt-4 font-display text-2xl leading-tight">{category.title}</h3><div className="mt-auto flex items-center justify-between border-t border-ivory/15 pt-4"><span className="font-sans text-[10px] uppercase tracking-[0.12em] text-ivory/55">Στο car.gr</span><ArrowUpRight className="h-4 w-4 text-gold transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div></a></Reveal>)}</div></div></section>

      <section className="bg-forest px-5 py-20 text-ivory sm:px-8 sm:py-28 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><SectionEyebrow light>Η πιο πρόσφατη εικόνα</SectionEyebrow><h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Οι αγγελίες βρίσκονται στο <span className="text-gold">dealer profile.</span></h2><p className="mt-6 max-w-xl font-sans text-base leading-7 text-ivory/65">Οι κάρτες εδώ είναι ενημερωτικό στιγμιότυπο. Για τιμές, φωτογραφίες, έγγραφα και διαθεσιμότητα, συνεχίστε στο car.gr.</p></Reveal><Reveal delay={0.1}><LinkButton to={company.listingsUrl} tone="gold" external>Μετάβαση στο car.gr</LinkButton></Reveal></div></section>
    </>
  )
}

function ListingCard({ listing }: { listing: Listing }) {
  return <article className="group flex min-h-[500px] flex-col overflow-hidden bg-[#e8eadf]"><div className="relative h-56 overflow-hidden bg-forest"><img src={listing.image} alt={listing.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-forest/85 to-transparent" /><div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4"><span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{listing.category}</span><span className="font-sans text-[10px] uppercase tracking-[0.14em] text-ivory/65">{listing.year}</span></div><span className="absolute left-4 top-4 rounded-full bg-forest/80 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/70">Ενδεικτική εικόνα</span></div><div className="flex flex-1 flex-col p-5"><h3 className="font-display text-3xl leading-[1] tracking-[-0.04em]">{listing.title}</h3><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-forest/15 py-4">{listing.specs.map((spec) => <span key={spec} className="font-sans text-xs text-forest/65">{spec}</span>)}</div><p className="mt-4 font-sans text-[11px] leading-5 text-forest/50">{listing.note}</p><a href={listing.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between border-t border-forest/15 pt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-gold">Δείτε την κατηγορία στο car.gr<ExternalLink className="h-4 w-4" /></a></div></article>
}
