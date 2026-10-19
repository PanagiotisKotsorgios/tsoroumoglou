import { LinkButton, SectionEyebrow } from '../components/ui'

export function NotFoundPage() {
  return <section className="flex min-h-[75vh] items-center bg-forest px-5 py-32 text-ivory sm:px-8 lg:px-12"><div className="mx-auto w-full max-w-[1440px]"><SectionEyebrow light>404 / Δεν βρέθηκε</SectionEyebrow><h1 className="mt-7 max-w-3xl font-display text-7xl leading-[0.9] tracking-[-0.06em] sm:text-9xl">Η σελίδα πήρε <span className="text-sage">άλλο δρόμο.</span></h1><p className="mt-8 max-w-md font-sans text-base leading-7 text-ivory/65">Ο σύνδεσμος που ακολουθήσατε δεν είναι διαθέσιμος. Επιστρέψτε στην αρχική και συνεχίστε από εκεί.</p><LinkButton to="/" tone="gold" className="mt-9">Επιστροφή στην αρχική</LinkButton></div></section>
}
