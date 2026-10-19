import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Activity } from '../data/site'
import { cn } from '../lib/utils'

export function ActivityCard({ activity, index = 0 }: { activity: Activity; index?: number }) {
  return (
    <Link to={`/drastiriotites#${activity.id}`} className="group relative block min-h-[330px] overflow-hidden bg-forest text-ivory sm:min-h-[390px]">
      <img src={activity.image} alt={activity.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-75" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,46,37,0.05)_15%,rgba(24,46,37,0.9)_100%)]" />
      <div className="relative flex h-full min-h-[330px] flex-col justify-between p-6 sm:min-h-[390px] sm:p-8">
        <div className="flex items-center justify-between font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory/65"><span>{activity.eyebrow}</span><span className={cn('h-2 w-2 rounded-full', index % 2 ? 'bg-gold' : 'bg-sage')} /></div>
        <div>
          <h3 className="max-w-xs font-display text-3xl leading-[1.04] tracking-[-0.035em] sm:text-4xl">{activity.title}</h3>
          <div className="mt-6 flex items-center justify-between border-t border-ivory/20 pt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-ivory/65"><span>Ανακαλύψτε</span><ArrowUpRight className="h-5 w-5 text-gold transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} /></div>
        </div>
      </div>
    </Link>
  )
}
