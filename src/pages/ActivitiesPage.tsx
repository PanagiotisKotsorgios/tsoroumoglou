import { ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { LinkButton, SectionEyebrow } from '../components/ui'
import { activities, company } from '../data/site'

export function ActivitiesPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [])

  return (
    <>
      <PageHero eyebrow="Κατηγορίες / 02" title={<>Από το φορτηγό <em className="text-sage not-italic">στο έργο.</em></>} description="Το δημόσιο dealer profile συγκεντρώνει βαρέα οχήματα, συρμούς, επικαθήμενα και μηχανήματα έργων από τον Δραβήσκο Σερρών." image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=88" imageAlt="Βαρύ φορτηγό σε ανοιχτό δρόμο" />
      <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.5fr_1fr] lg:gap-24"><Reveal><SectionEyebrow>Μια ευρεία γκάμα</SectionEyebrow></Reveal><Reveal delay={0.1}><p className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl">Η σωστή επιλογή ξεκινά από το <span className="text-sage">σωστό είδος οχήματος.</span></p><p className="mt-7 max-w-2xl font-sans text-base leading-7 text-forest/65">Παρακάτω θα βρείτε τις βασικές κατηγορίες όπως εμφανίζονται στο car.gr. Οι σύνδεσμοι ανοίγουν το εξωτερικό dealer profile για τις καταχωρίσεις που είναι διαθέσιμες τη δεδομένη στιγμή.</p></Reveal></div></section>
      <section className="bg-[#e8eadf] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36"><div className="mx-auto max-w-[1440px]">{activities.map((activity, index) => <ActivityDetail key={activity.id} activity={activity} index={index} />)}</div></section>
      <section className="bg-gold px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><Reveal><SectionEyebrow>Χρειάζεστε κάτι συγκεκριμένο;</SectionEyebrow><h2 className="mt-5 max-w-2xl font-display text-5xl leading-none tracking-[-0.05em] text-forest sm:text-6xl">Ας ξεκινήσουμε από το όχημα.</h2></Reveal><Reveal delay={0.1}><LinkButton to={company.listingsUrl} tone="dark" external>Όλες οι αγγελίες</LinkButton></Reveal></div></section>
    </>
  )
}

function ActivityDetail({ activity, index }: { activity: (typeof activities)[number]; index: number }) {
  const reverse = index % 2 === 1
  return <Reveal><article id={activity.id} className="scroll-mt-8 border-t border-forest/15 py-14 sm:py-20 lg:py-28"><div className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-24 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}><div className="relative min-h-[360px] overflow-hidden bg-forest sm:min-h-[470px]"><img src={activity.image} alt={activity.imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-forest/75 to-transparent" /><span className="absolute left-6 top-6 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{activity.eyebrow}</span><span className="absolute bottom-6 right-6 font-display text-7xl text-ivory/25">0{index + 1}</span><span className="absolute bottom-6 left-6 font-sans text-[10px] uppercase tracking-[0.12em] text-ivory/60">Ενδεικτική εικόνα</span></div><div><SectionEyebrow>{activity.shortTitle}</SectionEyebrow><h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">{activity.title}</h2><p className="mt-7 max-w-lg font-sans text-lg leading-8 text-forest/68">{activity.description}</p><p className="mt-5 max-w-lg border-l-2 border-gold pl-5 font-sans text-sm leading-6 text-forest/60">{activity.detail}</p><LinkButton to={activity.href} tone="dark" external className="mt-9">Δείτε την κατηγορία</LinkButton></div></div></article></Reveal>
}
