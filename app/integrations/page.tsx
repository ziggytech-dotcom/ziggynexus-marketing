"use client"
import Image from 'next/image'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const nativeIntegrations = [
  { name: `Stripe`, domain: `stripe.com`, desc: `Accept payments directly from client portals` },
  { name: `Google Drive`, domain: `drive.google.com`, desc: `Sync files between Drive and client portals` },
  { name: `Zapier`, domain: `zapier.com`, desc: `Connect 5,000+ apps with automations` },
  { name: `Resend`, domain: `resend.com`, desc: `Transactional email notifications to clients` },
  { name: `Slack`, domain: `slack.com`, desc: `Get notified when clients approve or submit files` },
]
const comingSoon = [
  { name: `Dropbox`, domain: `dropbox.com`, desc: `Sync files between Dropbox and portals` },
  { name: `Notion`, domain: `notion.so`, desc: `Sync project notes and wikis` },
  { name: `QuickBooks`, domain: `quickbooks.intuit.com`, desc: `Sync invoice data to QuickBooks` },
]
const suiteApps = [
  { name: `ZiggyHQ`, color: `#0ea5e9`, domain: `ziggyhq.com` },
  { name: `ZiggyNexus`, color: `#10b981`, domain: `ziggynexus.com` },
  { name: `ZiggyDocs`, color: `#7c3aed`, domain: `ziggydocs.com` },
  { name: `ZiggySchedule`, color: `#f472b6`, domain: `ziggyschedule.com` },
  { name: `ZiggyPayroll`, color: `#84cc16`, domain: `ziggypayroll.com` },
  { name: `ZiggyPitch`, color: `#f97316`, domain: `ziggypitch.com` },
  { name: `ZiggyHR`, color: `#8b5cf6`, domain: `ziggyhr.com` },
  { name: `ZiggyReviews`, color: `#f59e0b`, domain: `ziggyreviews.com` },
  { name: `ZiggyInvoice`, color: `#14b8a6`, domain: `ziggyinvoice.com` },
  { name: `ZiggyIntake`, color: `#38bdf8`, domain: `ziggyintake.com` },
]

export default function IntegrationsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10b981]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Works with the tools <span className="text-[#10b981]">you already use</span></h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">ZiggyNexus connects natively with your favorite tools — and via Zapier, with 5,000+ more.</p>
        </div>
      </section>
      <section className="py-16 px-4 border-b border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto">
          <span className="px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-medium">Native Suite</span>
          <h2 className="text-2xl font-bold text-white mt-3 mb-2">Works with the entire ZiggyTech Suite</h2>
          <p className="text-[#b3b3b3] mb-8">No API setup. Data flows automatically between all 10 apps.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {suiteApps.map((a) => (
              <a key={a.name} href={`https://${a.domain}`} target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 text-center hover:border-[#2d2d2d] transition-colors">
                <div className="w-8 h-8 rounded-lg mx-auto mb-2" style={{ background: a.color + '20', border: `1px solid ${a.color}40` }} />
                <p className="text-white text-xs font-medium">{a.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-b border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto">
          <span className="px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-medium mb-6 inline-block">Native Integrations</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nativeIntegrations.map((i) => (
              <div key={i.name} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 hover:border-[#10b981]/30 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d] flex-shrink-0 overflow-hidden">
                  <Image src={`https://logo.clearbit.com/${i.domain}`} alt={i.name} width={40} height={40} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{i.name}</p>
                  <p className="text-[#b3b3b3] text-sm">{i.desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] text-xs rounded-full">Native</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-b border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto">
          <span className="px-2.5 py-1 rounded-full bg-[#2d2d2d] text-[#b3b3b3] text-xs font-medium mb-6 inline-block">Coming Soon</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-60">
            {comingSoon.map((i) => (
              <div key={i.name} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d] flex-shrink-0 overflow-hidden">
                  <Image src={`https://logo.clearbit.com/${i.domain}`} alt={i.name} width={40} height={40} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{i.name}</p>
                  <p className="text-[#b3b3b3] text-sm">{i.desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-[#2d2d2d] text-[#b3b3b3] text-xs rounded-full">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Start connecting your stack</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#10b981] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
