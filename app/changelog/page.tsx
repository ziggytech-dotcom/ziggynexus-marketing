import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const changelog = [
  {
    date: 'April 2026', version: 'v1.2', highlight: true,
    entries: [
      { type: 'feature', title: 'Client Portal', description: 'Full feature set now available to all users.' },
      { type: 'feature', title: 'Two-Factor Authentication (TOTP)', description: 'Secure your account with TOTP via Google Authenticator, Authy, or 1Password.' },
      { type: 'feature', title: 'Google & Apple OAuth', description: 'Sign in or sign up using your Google or Apple account.' },
      { type: 'improvement', title: 'Performance improvements', description: 'Faster page loads and reduced API response times across the board.' },
      { type: 'fix', title: 'Various bug fixes', description: 'Resolved edge cases reported during beta.' },
    ],
  },
  {
    date: 'March 2026', version: 'v1.0', highlight: false,
    entries: [
      { type: 'launch', title: 'ZiggyNexus Launched', description: 'We built ZiggyNexus for our own business first. Now available for yours.' },
      { type: 'feature', title: 'Core platform', description: 'Full feature set live — all plans available.' },
      { type: 'feature', title: 'Stripe integration', description: 'Payment collection live on all plans.' },
      { type: 'feature', title: 'ZiggyTech Suite integration', description: 'Native data sync with all 9 other ZiggyTech apps.' },
    ],
  },
]

const typeColors: Record<string, string> = { feature: '#22c55e', improvement: '#f59e0b', fix: '#ef4444', launch: '#10b981' }

export default function ChangelogPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">Changelog</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">What&apos;s new in ZiggyNexus</h1>
          <p className="text-xl text-[#b3b3b3]">Product updates and improvements, documented.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {changelog.map((r) => (
            <div key={r.version} className={`bg-[#111111] border rounded-2xl overflow-hidden ${r.highlight ? 'border-[#10b981]/30' : 'border-[#1f1f1f]'}`}>
              <div className={`px-8 py-5 flex items-center justify-between ${r.highlight ? 'bg-[#10b981]/5' : 'bg-[#0d0d0d]'} border-b border-[#1f1f1f]`}>
                <div><p className="text-white font-bold text-lg">{r.version}</p><p className="text-[#b3b3b3] text-sm">{r.date}</p></div>
                {r.highlight && <span className="px-3 py-1 bg-[#10b981] text-white text-xs font-bold rounded-full">Latest</span>}
              </div>
              <div className="p-8 space-y-4">
                {r.entries.map((e, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide flex-shrink-0 h-fit" style={{ background: (typeColors[e.type] || '#555') + '20', color: typeColors[e.type] || '#555' }}>{e.type}</span>
                    <div><p className="text-white font-semibold">{e.title}</p><p className="text-[#b3b3b3] text-sm mt-1">{e.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
