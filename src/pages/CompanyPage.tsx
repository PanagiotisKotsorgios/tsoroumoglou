import { ArrowUpRight, BadgeCheck, MapPinned, Truck } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { LinkButton, SectionEyebrow } from '../components/ui'
import { activities, company } from '../data/site'

export function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Η εταιρεία / 01" title={<>Ο dealer πίσω από τις <em className="text-sage not-italic">αγγελίες.</em></>} description="Η ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε. δραστηριοποιείται δημόσια στο car.gr από τον Δραβήσκο Σερρών, με έμφαση σε φορτηγά, τράκτορες, επικαθήμενα και μηχανήματα έργων." image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=88" imageAlt="Βαρύ φορτηγό σε δρόμο" action={{ label: 'Δείτε τις αγγελίες', to: '/eksoplismos' }} />

      <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal><SectionEyebrow>Η εικόνα σε μία φράση</SectionEyebrow><h2 className="mt-6 max-w-sm font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Εμπόριο μεταχειρισμένων <span className="text-sage">βαρέων οχημάτων.</span></h2></Reveal>
          <Reveal delay={0.1}><p className="max-w-2xl font-sans text-lg leading-8 text-forest/70">Στο δημόσιο προφίλ του dealer εμφανίζονται κατηγορίες και καταχωρίσεις για φορτηγά άνω των 7,5 τόνων, τράκτορες, επικαθήμενα, μηχανήματα έργων, γεωργικό εξοπλισμό και λοιπά οχήματα. Η παρούσα ιστοσελίδα οργανώνει αυτή την εικόνα ώστε να βρίσκετε γρήγορα αυτό που σας ενδιαφέρει.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><Value icon={<Truck />} title="Βαρέα οχήματα" text="Ανατρεπόμενα φορτηγά και τράκτορες δρόμου." /><Value icon={<BadgeCheck />} title="Δημόσιες αγγελίες" text="Σύνδεση με το car.gr για την πιο πρόσφατη ενημέρωση." /><Value icon={<MapPinned />} title="Δραβήσκος Σερρών" text="Τοπική βάση και απευθείας στοιχεία επικοινωνίας." /></div></Reveal>
        </div>
      </section>

      <section className="bg-[#e8eadf] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]"><Reveal><SectionEyebrow>Οι βασικοί άξονες</SectionEyebrow><h2 className="mt-6 max-w-3xl font-display text-5xl leading-none tracking-[-0.055em] sm:text-7xl">Όταν η κατηγορία είναι <span className="text-forest/40">ξεκάθαρη.</span></h2></Reveal><div className="mt-14 divide-y divide-forest/15 border-y border-forest/15">{activities.map((activity) => <Reveal key={activity.id}><a href={activity.href} target="_blank" rel="noreferrer" className="group grid gap-4 py-7 transition hover:px-3 sm:grid-cols-[0.22fr_0.5fr_1fr_auto] sm:items-center"><span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">{activity.eyebrow}</span><h3 className="font-display text-3xl tracking-[-0.04em] text-forest sm:text-4xl">{activity.shortTitle}</h3><p className="max-w-lg font-sans text-sm leading-6 text-forest/60">{activity.description}</p><ArrowUpRight className="h-5 w-5 text-forest/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" /></a></Reveal>)}</div></div>
      </section>

      <section className="bg-forest px-5 py-20 text-ivory sm:px-8 sm:py-28 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end"><Reveal><SectionEyebrow light>Σημείωση διαφάνειας</SectionEyebrow><h2 className="mt-6 max-w-2xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Οι αγγελίες αλλάζουν. Η σωστή ερώτηση <span className="text-gold">μένει.</span></h2></Reveal><Reveal delay={0.1}><p className="font-sans text-sm leading-7 text-ivory/65">Οι καταχωρίσεις, οι τιμές, οι ώρες και η διαθεσιμότητα προέρχονται από το δημόσιο dealer profile και μπορεί να αλλάξουν. Χρησιμοποιήστε το car.gr ή τα στοιχεία επικοινωνίας για επιβεβαίωση πριν από οποιαδήποτε συμφωνία.</p><LinkButton to={company.listingsUrl} tone="gold" external className="mt-8">Άνοιγμα dealer profile</LinkButton></Reveal></div></section>
    </>
  )
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="border-t border-forest/15 pt-4"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-forest [&_svg]:h-4 [&_svg]:w-4">{icon}</div><h3 className="mt-5 font-sans text-sm font-semibold">{title}</h3><p className="mt-2 font-sans text-xs leading-5 text-forest/60">{text}</p></div> }
