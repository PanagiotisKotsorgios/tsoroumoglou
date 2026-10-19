import { ArrowDown, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ActivityCard } from '../components/ActivityCard'
import { Reveal } from '../components/Reveal'
import { CheckLine, LinkButton, SectionEyebrow } from '../components/ui'
import { activities, benefits, company, listings } from '../data/site'
import { cn, formatPhone } from '../lib/utils'

const heroImage = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=90'

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[780px] items-end overflow-hidden bg-charcoal text-ivory sm:min-h-screen">
        <img src={heroImage} alt="Βαρύ φορτηγό σε ανοιχτό δρόμο" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,46,37,0.98)_0%,rgba(24,46,37,0.82)_42%,rgba(24,46,37,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,46,37,0.68)_0%,transparent_48%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-5xl">
            <SectionEyebrow light>Βαρέα οχήματα / Δραβήσκος Σερρών</SectionEyebrow>
            <h1 className="mt-7 max-w-5xl font-display text-[3.8rem] leading-[0.91] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(5.5rem,9.5vw,9.6rem)]">Φορτηγά που είναι έτοιμα να <em className="text-sage not-italic">δουλέψουν.</em></h1>
            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-ivory/75 sm:text-lg">Μεταχειρισμένα φορτηγά, τράκτορες, επικαθήμενα και μηχανήματα έργων από τον Δραβήσκο Σερρών. Δείτε τις κατηγορίες, ελέγξτε τις δημόσιες αγγελίες και μιλήστε απευθείας με τον dealer.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/eksoplismos" tone="gold">Δείτε τις αγγελίες</LinkButton>
              <LinkButton to="/epikoinonia" tone="outline">Επικοινωνήστε μαζί μας</LinkButton>
            </div>
          </motion.div>
          <div className="mt-20 flex items-end justify-between sm:mt-28">
            <p className="hidden max-w-[300px] font-sans text-[11px] leading-5 text-ivory/55 sm:block">Ενδεικτική εικόνα. Η τρέχουσα διαθεσιμότητα και τα στοιχεία βρίσκονται στο δημόσιο dealer profile.</p>
            <a href="#intro" className="group flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/65 transition hover:text-gold"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 transition group-hover:border-gold"><ArrowDown className="h-4 w-4" /></span>Περιηγηθείτε</a>
          </div>
        </div>
      </section>

      <section id="intro" className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-24">
          <Reveal>
            <SectionEyebrow>Ο dealer με μία ματιά</SectionEyebrow>
            <p className="mt-7 max-w-sm font-display text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">Από τον τράκτορα έως το <span className="text-sage">μηχάνημα έργων.</span></p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl font-sans text-lg leading-8 text-forest/70 sm:text-xl">Το δημόσιο dealer profile της ΑΦΟΙ ΤΣΟΡΟΥΜΟΓΛΟΥ στον Δραβήσκο συγκεντρώνει αγγελίες για βαρέα φορτηγά, τράκτορες, επικαθήμενα, μηχανήματα έργων και λοιπά οχήματα.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => <div key={benefit.number} className="border-t border-forest/15 pt-4"><span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gold">{benefit.number}</span><p className="mt-4 font-sans text-sm font-semibold text-forest">{benefit.title}</p><p className="mt-2 font-sans text-xs leading-5 text-forest/60">{benefit.text}</p></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e8eadf] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><SectionEyebrow>Οι βασικές κατηγορίες</SectionEyebrow><h2 className="mt-5 max-w-3xl font-display text-5xl leading-none tracking-[-0.055em] sm:text-6xl">Οχήματα για <span className="text-forest/45">κάθε φορτίο.</span></h2></div>
            <Link to="/drastiriotites" className="group inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-forest transition hover:text-gold">Όλες οι κατηγορίες<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activities.slice(0, 5).map((activity, index) => <Reveal key={activity.id} delay={index * 0.05}><ActivityCard activity={activity} index={index} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-24">
          <Reveal className="relative min-h-[480px] overflow-hidden bg-forest sm:min-h-[640px]">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85" alt="Μηχάνημα έργων σε εργοτάξιο" className="h-full min-h-[480px] w-full object-cover sm:min-h-[640px]" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(24,46,37,0.8)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory sm:bottom-8 sm:left-8 sm:right-8"><p className="max-w-[220px] font-display text-2xl leading-tight">Η σωστή βάση για την επόμενη δουλειά.</p><span className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold">Βαρέα / Επαγγελματικά</span></div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionEyebrow>Η εταιρεία</SectionEyebrow>
            <h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Πρακτικές επιλογές για <span className="text-sage">πραγματικές διαδρομές.</span></h2>
            <p className="mt-7 max-w-lg font-sans text-base leading-7 text-forest/68">Η παρούσα ιστοσελίδα είναι μια καθαρή ψηφιακή είσοδος στο δημόσιο dealer profile: κατηγορίες, επιλεγμένες καταχωρίσεις και άμεση επικοινωνία. Δεν αντικαθιστά το car.gr — σας οδηγεί σε αυτό με καλύτερο προσανατολισμό.</p>
            <div className="mt-8 space-y-3"><CheckLine>Φορτηγά, τράκτορες και επικαθήμενα</CheckLine><CheckLine>Μηχανήματα έργων και παρελκόμενα</CheckLine><CheckLine>Δημόσιες αγγελίες με συνεχή ενημέρωση</CheckLine></div>
            <LinkButton to="/etaireia" tone="dark" className="mt-9">Γνωρίστε την εταιρεία</LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest px-5 py-20 text-ivory sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(164,180,155,0.18),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal><SectionEyebrow light>Δημόσιο dealer profile</SectionEyebrow><h2 className="mt-6 max-w-md font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Οι αγγελίες είναι <span className="text-sage">ζωντανές.</span></h2><p className="mt-7 max-w-sm font-sans text-base leading-7 text-ivory/65">Δείτε τις πιο πρόσφατες καταχωρίσεις στο car.gr. Τα στοιχεία της παρούσας σελίδας είναι στιγμιότυπο κατεύθυνσης και όχι υπόσχεση διαθεσιμότητας.</p><LinkButton to={company.listingsUrl} tone="gold" external className="mt-9">Όλες οι αγγελίες</LinkButton></Reveal>
          <Reveal delay={0.12} className="grid gap-4 sm:grid-cols-3">
            {listings.slice(0, 3).map((listing, index) => <Link key={listing.id} to="/eksoplismos" className={cn('group relative min-h-[270px] overflow-hidden bg-forest/50', index === 1 && 'sm:translate-y-10')}><img src={listing.image} alt={listing.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70" loading="lazy" /><div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(24,46,37,0.95)_100%)]" /><div className="relative flex h-full flex-col justify-between p-5"><span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gold">{listing.year} / {listing.category}</span><div className="flex items-end justify-between gap-4"><span className="max-w-[180px] font-display text-2xl leading-tight">{listing.title}</span><ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div></Link>)}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e8eadf] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-3">
          <Reveal><SectionEyebrow>Στο car.gr</SectionEyebrow><p className="mt-4 font-display text-5xl tracking-[-0.05em]">{company.rating}</p><p className="mt-2 font-sans text-sm text-forest/60">{company.reviews} αξιολογήσεις στο dealer profile</p></Reveal>
          <Reveal delay={0.06}><SectionEyebrow>Παρουσία</SectionEyebrow><p className="mt-4 font-display text-5xl tracking-[-0.05em]">2017</p><p className="mt-2 font-sans text-sm text-forest/60">Έμπορος στο car.gr από {company.dealerSince}</p></Reveal>
          <Reveal delay={0.12}><SectionEyebrow>Συνεννόηση</SectionEyebrow><div className="mt-4 flex items-center gap-3 font-display text-3xl tracking-[-0.04em]"><ShieldCheck className="h-7 w-7 text-gold" strokeWidth={1.5} />Απευθείας</div><p className="mt-2 font-sans text-sm text-forest/60">Τηλέφωνο, email και δημόσιες αγγελίες.</p></Reveal>
        </div>
      </section>

      <section className="bg-gold px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal><SectionEyebrow>Επόμενο βήμα</SectionEyebrow><h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.055em] text-forest sm:text-7xl">Βρείτε το όχημα. <span className="text-forest/55">Μετά μιλάμε.</span></h2></Reveal>
          <Reveal delay={0.1} className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col"><LinkButton to="/epikoinonia" tone="dark">Επικοινωνία</LinkButton><a href={`tel:${company.mobile}`} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-forest/25 px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-forest transition hover:border-forest">Κλήση {formatPhone(company.mobile)}<PhoneCall className="h-4 w-4" /></a></Reveal>
        </div>
      </section>
    </>
  )
}
