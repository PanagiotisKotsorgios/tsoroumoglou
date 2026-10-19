export type Activity = {
  id: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  detail: string
  image: string
  imageAlt: string
  accent: string
  href: string
}

export type EquipmentCategory = {
  id: string
  title: string
  type: string
  description: string
  image: string
  imageAlt: string
  note: string
  count?: number
  href: string
}

export type Listing = {
  id: string
  title: string
  category: string
  year: string
  specs: string[]
  image: string
  imageAlt: string
  href: string
  note: string
}

export const company = {
  name: 'ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.',
  dealerName: 'ΑΦΟΙ ΤΣΟΡΟΥΜΟΓΛΟΥ',
  location: 'Δραβήσκος, Σέρρες, Ελλάδα',
  phone: '2324051841',
  mobile: '6974873084',
  email: 'afoitsoroumoglou@yahoo.com',
  dealerSince: '04-07-2017',
  rating: '4,8/5',
  reviews: 9,
  listingsUrl: 'https://afoitsoroumoglou.car.gr/classifieds/',
  trucksUrl: 'https://afoitsoroumoglou.car.gr/trucks/',
  tractorsUrl: 'https://afoitsoroumoglou.car.gr/semitrucks/',
  semitrailersUrl: 'https://afoitsoroumoglou.car.gr/semitrailers/',
  buildersUrl: 'https://afoitsoroumoglou.car.gr/builders/',
  agricultureUrl: 'https://afoitsoroumoglou.car.gr/tractors/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Δραβήσκος+Σερρών',
  verificationNote: 'Οι αγγελίες, οι τιμές και η διαθεσιμότητα μεταβάλλονται. Επιβεβαιώστε τα στοιχεία απευθείας στο dealer profile ή τηλεφωνικά πριν από κάθε απόφαση.',
}

export const navigation = [
  { label: 'Αρχική', to: '/' },
  { label: 'Η εταιρεία', to: '/etaireia' },
  { label: 'Κατηγορίες', to: '/drastiriotites' },
  { label: 'Αγγελίες', to: '/eksoplismos' },
]

const imageBase = 'https://images.unsplash.com'
const truckImage = `${imageBase}/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=88`
const machineryImage = `${imageBase}/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=88`
const trailerImage = `${imageBase}/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=88`

export const activities: Activity[] = [
  {
    id: 'fortiga-ano-ton-75t',
    title: 'Φορτηγά άνω των 7,5 τόνων',
    shortTitle: 'Φορτηγά',
    eyebrow: '01 / Βαρέα οχήματα',
    description: 'Ανατρεπόμενα και βαρέα φορτηγά για μεταφορά υλικών και απαιτητικές επαγγελματικές διαδρομές.',
    detail: 'Η κατηγορία εμφανίζεται στο δημόσιο dealer profile με 5 αγγελίες κατά τον έλεγχο. Δείτε την εξωτερική σελίδα για την τρέχουσα εικόνα.',
    image: truckImage,
    imageAlt: 'Βαρύ φορτηγό σε ανοιχτό δρόμο',
    accent: 'gold',
    href: company.trucksUrl,
  },
  {
    id: 'traktorees',
    title: 'Τράκτορες',
    shortTitle: 'Τράκτορες',
    eyebrow: '02 / Συρμοί',
    description: 'Τράκτορες δρόμου για επαγγελματικές μεταφορές, με καταχωρίσεις από Volvo, MAN και άλλους κατασκευαστές.',
    detail: 'Στο profile εμφανίζονται τράκτορες όπως Volvo FH 16 550 Euro 6, MAN TGX Euro 6D και Volvo FH 500 Euro 6.',
    image: truckImage,
    imageAlt: 'Τράκτορας φορτηγού σε βιομηχανικό περιβάλλον',
    accent: 'sage',
    href: company.tractorsUrl,
  },
  {
    id: 'epikathimena',
    title: 'Επικαθήμενα',
    shortTitle: 'Επικαθήμενα',
    eyebrow: '03 / Ρυμουλκούμενα',
    description: 'Ανατρεπόμενα, καρότσες, κουρτίνες και εξοπλισμός μεταφοράς για διαφορετικές ανάγκες φορτίου.',
    detail: 'Η κατηγορία περιλαμβάνει δημόσιες αγγελίες για Schmitz, Benalu, Stas, Nooteboom και Krone.',
    image: trailerImage,
    imageAlt: 'Μεταλλική κατασκευή επαγγελματικού ρυμουλκούμενου',
    accent: 'gold',
    href: company.semitrailersUrl,
  },
  {
    id: 'mixanimata-ergon',
    title: 'Μηχανήματα έργων',
    shortTitle: 'Μηχανήματα έργων',
    eyebrow: '04 / Εργοτάξιο',
    description: 'Εκσκαφείς, φορτωτές, γκρέιντερ, κουβάδες και αρπάγες για έργα και βαριές εργασίες.',
    detail: 'Στο δημόσιο profile αναφέρονται ενδεικτικά CAT M318D, Liebherr A310, JCB και άλλα μηχανήματα έργων.',
    image: machineryImage,
    imageAlt: 'Κίτρινο μηχάνημα έργων σε εργοτάξιο',
    accent: 'sage',
    href: company.buildersUrl,
  },
  {
    id: 'epaggelmatika-oximata',
    title: 'Επαγγελματικά και λοιπά οχήματα',
    shortTitle: 'Οχήματα',
    eyebrow: '05 / Μετακίνηση',
    description: 'Επιλεγμένα μεταχειρισμένα οχήματα που εμφανίζονται στο dealer profile, πέρα από τα βαρέα φορτηγά.',
    detail: 'Οι καταχωρίσεις του profile περιλαμβάνουν και οχήματα όπως Ford Ranger, Mercedes-Benz A 220 και Renault Clio.',
    image: `${imageBase}/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=88`,
    imageAlt: 'Επαγγελματικό όχημα σε δρόμο',
    accent: 'gold',
    href: company.listingsUrl,
  },
  {
    id: 'georgika-mixanimata',
    title: 'Γεωργικά μηχανήματα',
    shortTitle: 'Γεωργικά',
    eyebrow: '06 / Εξοπλισμός',
    description: 'Δευτερεύουσα κατηγορία του profile με τρακτέρ, πρέσες, αρότρα και άλλο γεωργικό εξοπλισμό.',
    detail: 'Η κατηγορία καταγράφεται στο car.gr, αλλά η κύρια κατεύθυνση της παρούσας ιστοσελίδας είναι τα φορτηγά και τα μηχανήματα.',
    image: `${imageBase}/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1800&q=88`,
    imageAlt: 'Αγροτικό τοπίο ως δευτερεύουσα κατηγορία εξοπλισμού',
    accent: 'sage',
    href: company.agricultureUrl,
  },
]

export const equipmentCategories: EquipmentCategory[] = [
  { id: 'trucks', title: 'Φορτηγά άνω των 7,5 τόνων', type: 'Φορτηγά', description: 'Ανατρεπόμενα και βαρέα φορτηγά.', image: truckImage, imageAlt: 'Βαρύ φορτηγό σε δρόμο', note: '5 αγγελίες στο profile κατά τον έλεγχο', count: 5, href: company.trucksUrl },
  { id: 'tractors', title: 'Τράκτορες', type: 'Τράκτορες', description: 'Τράκτορες δρόμου για επαγγελματικούς συρμούς.', image: truckImage, imageAlt: 'Τράκτορας φορτηγού', note: '3 αγγελίες στο profile κατά τον έλεγχο', count: 3, href: company.tractorsUrl },
  { id: 'semitrailers', title: 'Επικαθήμενα', type: 'Επικαθήμενα', description: 'Ανατρεπόμενα, καρότσες, κουρτίνες και σασί.', image: trailerImage, imageAlt: 'Μεταλλικό ρυμουλκούμενο', note: '10 αγγελίες στο profile κατά τον έλεγχο', count: 10, href: company.semitrailersUrl },
  { id: 'builders', title: 'Μηχανήματα έργων', type: 'Μηχανήματα', description: 'Εκσκαφείς, φορτωτές, γκρέιντερ και παρελκόμενα.', image: machineryImage, imageAlt: 'Μηχάνημα εργοταξίου', note: '7 αγγελίες στο profile κατά τον έλεγχο', count: 7, href: company.buildersUrl },
  { id: 'agriculture', title: 'Γεωργικά μηχανήματα', type: 'Γεωργικά', description: 'Τρακτέρ, πρέσες, αρότρα και λοιπός εξοπλισμός.', image: `${imageBase}/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85`, imageAlt: 'Αγροτικό τοπίο', note: '8 αγγελίες στο profile κατά τον έλεγχο', count: 8, href: company.agricultureUrl },
]

export const listings: Listing[] = [
  { id: 'daf-cf-480-hardox', title: 'DAF CF 480 HARDOX', category: 'Ανατροπή', year: '2004', specs: ['485.000 χλμ', '480 hp', 'Πετρέλαιο', '4 άξονες'], image: truckImage, imageAlt: 'Ενδεικτική εικόνα βαρέος φορτηγού', href: company.trucksUrl, note: 'Η καταχώριση εμφανίζεται στην κατηγορία φορτηγών άνω των 7,5 τόνων.' },
  { id: 'scania-94d-310', title: 'Scania 94D 310', category: 'Ανατροπή', year: '2004', specs: ['700.000 χλμ', '12.000 cc', '300 hp', '2 άξονες'], image: truckImage, imageAlt: 'Ενδεικτική εικόνα ανατρεπόμενου φορτηγού', href: company.trucksUrl, note: 'Στοιχεία όπως εμφανίζονται στο δημόσιο dealer profile.' },
  { id: 'volvo-fh-16-550', title: 'Volvo FH 16 550 Euro 6', category: 'Τράκτορας', year: '2018', specs: ['550.000 χλμ', '16.000 cc', '550 hp', '2 άξονες'], image: truckImage, imageAlt: 'Ενδεικτική εικόνα τράκτορα', href: company.tractorsUrl, note: 'Η τιμή και η διαθεσιμότητα χρειάζονται επιβεβαίωση.' },
  { id: 'man-tgx-euro-6d', title: 'MAN TGX Euro 6D', category: 'Τράκτορας', year: '2021', specs: ['480.000 χλμ', '470 hp', 'Πετρέλαιο', '2 άξονες'], image: truckImage, imageAlt: 'Ενδεικτική εικόνα φορτηγού τράκτορα', href: company.tractorsUrl, note: 'Η καταχώριση ελέγχεται από το εξωτερικό dealer profile.' },
  { id: 'schmitz-54', title: 'Schmitz 54 κυβικά αλουμινίου', category: 'Επικαθήμενο', year: '2019', specs: ['3 άξονες', 'Αλουμίνιο', '54 κυβικά'], image: trailerImage, imageAlt: 'Ενδεικτική εικόνα επικαθήμενου', href: company.semitrailersUrl, note: 'Κατηγορία επικαθήμενων — τα στοιχεία μπορεί να αλλάξουν.' },
  { id: 'benalu-optilainer', title: 'Benalu Optilainer 52 κυβικά', category: 'Επικαθήμενο', year: '2008', specs: ['3 άξονες', '52 κυβικά', 'Ανατροπή'], image: trailerImage, imageAlt: 'Ενδεικτική εικόνα ανατρεπόμενου επικαθήμενου', href: company.semitrailersUrl, note: 'Δείτε την τρέχουσα αγγελία στο dealer profile.' },
  { id: 'nooteboom-machinery', title: 'Nooteboom', category: 'Μεταφορά μηχανημάτων', year: '2012', specs: ['3 άξονες', 'Σασί', 'Μεταφορά μηχανημάτων'], image: trailerImage, imageAlt: 'Ενδεικτική εικόνα σασί μεταφοράς μηχανημάτων', href: company.semitrailersUrl, note: 'Ενδεικτική καταχώριση από την κατηγορία επικαθήμενων.' },
  { id: 'cat-m318d', title: 'CAT M318D', category: 'Εκσκαφέας με λάστιχα', year: '2012', specs: ['8.900 ώρες', '177 hp', 'Πετρέλαιο'], image: machineryImage, imageAlt: 'Ενδεικτική εικόνα εκσκαφέα με λάστιχα', href: company.buildersUrl, note: 'Κατηγορία μηχανημάτων έργων — επιβεβαιώστε ώρες και διαθεσιμότητα.' },
  { id: 'liebherr-a310', title: 'Liebherr A310', category: 'Εκσκαφέας με λάστιχα', year: '1994', specs: ['80 hp', 'Πετρέλαιο'], image: machineryImage, imageAlt: 'Ενδεικτική εικόνα εκσκαφέα', href: company.buildersUrl, note: 'Η καταχώριση εμφανίζεται στο δημόσιο profile.' },
]

export const benefits = [
  { number: '01', title: 'Βαρέα οχήματα', text: 'Φορτηγά άνω των 7,5 τόνων και ανατρεπόμενα για επαγγελματική χρήση.' },
  { number: '02', title: 'Συρμοί και επικαθήμενα', text: 'Τράκτορες, καρότσες, ανατρεπόμενα και εξοπλισμός μεταφοράς.' },
  { number: '03', title: 'Μηχανήματα έργων', text: 'Εκσκαφείς, φορτωτές, γκρέιντερ και παρελκόμενα.' },
]
