import { CheckCircle2, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { Button, LinkButton, SectionEyebrow, SelectField } from '../components/ui'
import { activities, company } from '../data/site'
import { formatPhone } from '../lib/utils'

type FormState = { name: string; email: string; phone: string; category: string; message: string }
const initialForm: FormState = { name: '', email: '', phone: '', category: 'Γενική ερώτηση', message: '' }

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [feedback, setFeedback] = useState('')
  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }))

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback('')
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback('Συμπληρώστε το όνομα, το email και το μήνυμά σας για να ανοίξει σωστά το email.')
      return
    }
    const subject = `Ερώτημα από την ιστοσελίδα — ${form.category}`
    const body = [`Όνομα: ${form.name}`, `Email: ${form.email}`, `Τηλέφωνο: ${form.phone || 'Δεν συμπληρώθηκε'}`, `Κατηγορία: ${form.category}`, '', 'Μήνυμα:', form.message].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback('Το email draft ετοιμάστηκε. Ολοκληρώστε την αποστολή μέσα από την εφαρμογή email σας.')
  }

  return (
    <>
      <PageHero eyebrow="Επικοινωνία / 04" title={<>Ας μιλήσουμε <em className="text-sage not-italic">πρακτικά.</em></>} description="Έχετε μια συγκεκριμένη ανάγκη, μια ερώτηση για κατηγορία ή θέλετε να δείτε τις διαθέσιμες αγγελίες; Η πρώτη επαφή είναι απλή." image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=88" imageAlt="Επαγγελματικό φορτηγό σε ανοιχτό δρόμο" />
      <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><Reveal><SectionEyebrow>Τα στοιχεία μας</SectionEyebrow><h2 className="mt-6 max-w-sm font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Η επόμενη <span className="text-sage">κίνηση</span> είναι δική σας.</h2><p className="mt-7 max-w-sm font-sans text-sm leading-6 text-forest/60">Καλέστε, στείλτε email ή ζητήστε οδηγίες προς τον Δραβήσκο Σερρών.</p></Reveal><div className="grid gap-4 sm:grid-cols-3"><ContactCard icon={<Phone />} label="Τηλέφωνο" value={formatPhone(company.phone)} href={`tel:${company.phone}`} /><ContactCard icon={<Phone />} label="Κινητό" value={formatPhone(company.mobile)} href={`tel:${company.mobile}`} /><ContactCard icon={<Mail />} label="Email" value={company.email} href={`mailto:${company.email}`} /></div></div></section>
      <section className="bg-[#e8eadf] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24"><Reveal><SectionEyebrow>Στείλτε ένα αίτημα</SectionEyebrow><h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl">Περιγράψτε μας τι <span className="text-sage">χρειάζεστε.</span></h2><p className="mt-6 max-w-lg font-sans text-sm leading-6 text-forest/60">Η φόρμα δημιουργεί ένα προσυμπληρωμένο email προς την εταιρεία. Δεν αποθηκεύονται δεδομένα σε server και δεν εμφανίζεται ψευδές μήνυμα αποστολής.</p><form onSubmit={submit} className="mt-10 space-y-5" noValidate><div className="grid gap-5 sm:grid-cols-2"><TextField label="Ονοματεπώνυμο *" value={form.name} onChange={(value) => update('name', value)} placeholder="Το όνομά σας" required /><TextField label="Email *" type="email" value={form.email} onChange={(value) => update('email', value)} placeholder="ονομα@email.gr" required /></div><div className="grid gap-5 sm:grid-cols-2"><TextField label="Τηλέφωνο" value={form.phone} onChange={(value) => update('phone', value)} placeholder="Προαιρετικό" /><SelectField label="Κατηγορία ενδιαφέροντος" value={form.category} onChange={(value) => update('category', value)} options={['Γενική ερώτηση', ...activities.map((activity) => activity.shortTitle)]} /></div><label className="block"><span className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-forest/60">Μήνυμα *</span><textarea required value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="Πείτε μας λίγα λόγια για το αίτημά σας" className="min-h-36 w-full resize-y rounded-2xl border border-forest/15 bg-ivory px-5 py-4 font-sans text-sm text-forest outline-none transition placeholder:text-forest/35 focus:border-gold focus:ring-2 focus:ring-gold/25" /></label><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><Button type="submit" tone="dark"><Send className="h-4 w-4" />Άνοιγμα email</Button>{feedback && <p role="status" className="flex items-start gap-2 font-sans text-xs leading-5 text-forest/70"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{feedback}</p>}</div></form></Reveal><Reveal delay={0.1}><div className="relative min-h-[480px] overflow-hidden bg-forest"><img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85" alt="Αγροτικό τοπίο κοντά σε αγροτική περιοχή" className="absolute inset-0 h-full w-full object-cover opacity-75" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/25 to-transparent" /><div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9"><MapPin className="h-7 w-7 text-gold" strokeWidth={1.5} /><p className="mt-5 font-display text-4xl leading-none text-ivory">Δραβήσκος<br />Σερρών</p><p className="mt-4 max-w-xs font-sans text-sm leading-6 text-ivory/65">{company.location}</p><a href={company.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-gold transition hover:text-ivory">Οδηγίες στον χάρτη <ExternalLink className="h-4 w-4" /></a></div></div></Reveal></div></section>
      <section className="bg-gold px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><SectionEyebrow>Εναλλακτικά</SectionEyebrow><h2 className="mt-4 font-display text-4xl tracking-[-0.045em] text-forest sm:text-5xl">Δείτε τις δημόσιες αγγελίες.</h2></div><LinkButton to={company.listingsUrl} tone="dark" external>Μετάβαση στο dealer profile</LinkButton></div></section>
    </>
  )
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) { return <a href={href} className="group border-t border-forest/15 pt-5 transition hover:border-gold"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-forest [&_svg]:h-4 [&_svg]:w-4">{icon}</span><p className="mt-5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-forest/50">{label}</p><p className="mt-2 break-all font-sans text-sm leading-5 text-forest transition group-hover:text-gold">{value}</p></a> }
function TextField({ label, value, onChange, placeholder, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string; required?: boolean }) { return <label className="block"><span className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-forest/60">{label}</span><input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-full border border-forest/15 bg-ivory px-5 font-sans text-sm text-forest outline-none transition placeholder:text-forest/35 focus:border-gold focus:ring-2 focus:ring-gold/25" /></label> }
