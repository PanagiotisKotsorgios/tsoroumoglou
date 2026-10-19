import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { EquipmentPage } from './pages/EquipmentPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { company } from './data/site'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: `${company.name} | Φορτηγά και μηχανήματα`, description: 'Μεταχειρισμένα φορτηγά, τράκτορες, επικαθήμενα και μηχανήματα έργων στον Δραβήσκο Σερρών.' },
  '/etaireia': { title: `Η εταιρεία | ${company.name}`, description: 'Η ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε. είναι dealer μεταχειρισμένων φορτηγών, επικαθήμενων και μηχανημάτων στον Δραβήσκο Σερρών.' },
  '/drastiriotites': { title: `Κατηγορίες | ${company.name}`, description: 'Φορτηγά άνω των 7,5 τόνων, τράκτορες, επικαθήμενα, μηχανήματα έργων και λοιπά οχήματα.' },
  '/eksoplismos': { title: `Αγγελίες | ${company.name}`, description: 'Επιλεγμένες δημόσιες καταχωρίσεις του dealer profile για φορτηγά, τράκτορες, επικαθήμενα και μηχανήματα.' },
  '/epikoinonia': { title: `Επικοινωνία | ${company.name}`, description: `Επικοινωνήστε με την ${company.name} για φορτηγά, επικαθήμενα και μηχανήματα στον Δραβήσκο Σερρών.` },
}

export function App() {
  return <><MetaManager /><Layout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/etaireia" element={<CompanyPage />} />
    <Route path="/drastiriotites" element={<ActivitiesPage />} />
    <Route path="/eksoplismos" element={<EquipmentPage />} />
    <Route path="/epikoinonia" element={<ContactPage />} />
    <Route path="/about.html" element={<Navigate to="/etaireia" replace />} />
    <Route path="/service.html" element={<Navigate to="/drastiriotites" replace />} />
    <Route path="/blog.html" element={<Navigate to="/eksoplismos" replace />} />
    <Route path="/contact.html" element={<Navigate to="/epikoinonia" replace />} />
    <Route path="/car.html" element={<Navigate to="/eksoplismos" replace />} />
    <Route path="/car-single.html" element={<Navigate to="/eksoplismos" replace />} />
    <Route path="/blog-single.html" element={<Navigate to="/eksoplismos" replace />} />
    <Route path="/pricing.html" element={<Navigate to="/eksoplismos" replace />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Layout></>
}

function MetaManager() {
  const location = useLocation()
  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? { title: `Σελίδα δεν βρέθηκε | ${company.name}`, description: 'Η σελίδα δεν βρέθηκε.' }
    document.title = meta.title
    document.documentElement.lang = 'el'
    setMeta('description', meta.description)
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:url', `${window.location.origin}${location.pathname}`, 'property')
    let structured = document.getElementById('local-business-jsonld') as HTMLScriptElement | null
    if (!structured) { structured = document.createElement('script'); structured.id = 'local-business-jsonld'; structured.type = 'application/ld+json'; document.head.appendChild(structured) }
    structured.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: company.name, telephone: `+30${company.phone}`, email: company.email, address: { '@type': 'PostalAddress', addressLocality: 'Δραβήσκος', addressRegion: 'Σέρρες', addressCountry: 'GR' }, url: window.location.origin, areaServed: 'Σέρρες' })
  }, [location.pathname])
  return null
}

function setMeta(name: string, content: string, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element) }
  element.setAttribute('content', content)
}
