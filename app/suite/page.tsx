import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const suiteApps = [
  { name: `ZiggyHQ`, desc: `CRM & Business Operations`, color: `#0ea5e9`, domain: `ziggyhq.com`, current: false },
  { name: `ZiggyNexus`, desc: `Client Portal & Collaboration`, color: `#10b981`, domain: `ziggynexus.com`, current: true },
  { name: `ZiggyDocs`, desc: `E-Signatures & Documents`, color: `#7c3aed`, domain: `ziggydocs.com`, current: false },
  { name: `ZiggySchedule`, desc: `Appointment Scheduling`, color: `#f472b6`, domain: `ziggyschedule.com`, current: false },
  { name: `ZiggyPayroll`, desc: `Payroll & Contractors`, color: `#84cc16`, domain: `ziggypayroll.com`, current: false },
  { name: `ZiggyPitch`, desc: `Proposals & Quotes`, color: `#f97316`, domain: `ziggypitch.com`, current: false },
  { name: `ZiggyHR`, desc: `HR & People Management`, color: `#8b5cf6`, domain: `ziggyhr.com`, current: false },
  { name: `ZiggyReviews`, desc: `Reviews & Reputation`, color: `#f59e0b`, domain: `ziggyreviews.com`, current: false },
  { name: `ZiggyInvoice`, desc: `Invoicing & Billing`, color: `#14b8a6`, domain: `ziggyinvoice.com`, current: false },
  { name: `ZiggyIntake`, desc: `Forms & Lead Capture`, color: `#38bdf8`, domain: `ziggyintake.com`, current: false },
]
const automations = [
  { trigger: `Form submitted in ZiggyIntake`, action: `Contact created in ZiggyHQ automatically` },
  { trigger: `Deal closed in ZiggyHQ`, action: `Invoice generated in ZiggyInvoice` },
  { trigger: `Appointment booked in ZiggySchedule`, action: `Activity logged in ZiggyHQ` },
  { trigger: `Offer letter signed in ZiggyDocs`, action: `Employee added to ZiggyHR` },
  { trigger: `5-star review in ZiggyReviews`, action: `Follow-up task in ZiggyHQ` },
  { trigger: `Proposal signed in ZiggyPitch`, action: `Client portal created in ZiggyNexus` },
]

export default function SuitePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-medium mb-6">ZiggyTech Business Suite</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">10 tools. One workspace.<br /><span style={{ color: '#10b981' }}>One price.</span></h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">ZiggyNexus is part of the ZiggyTech Business Suite — 10 tightly integrated tools to run your entire business.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://ziggybusiness.com" className="px-6 py-3 bg-[#10b981] text-white rounded-lg font-medium hover:opacity-90 transition-colors">Get all 10 apps — $179/mo</a>
            <a href="https://ziggybusiness.com" className="px-6 py-3 border border-[#2d2d2d] text-[#b3b3b3] rounded-lg hover:text-white hover:bg-[#1a1a1a] transition-colors">Explore the Suite</a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">All 10 apps in the suite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {suiteApps.map((a) => (
              <div key={a.name} className={`bg-[#111111] border rounded-xl p-5 ${a.current ? 'border-[#10b981]/40' : 'border-[#1f1f1f]'}`}>
                <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" style={{ background: a.color + '20', border: `1px solid ${a.color}40` }}>
                  <div className="w-4 h-4 rounded-sm" style={{ background: a.color }} />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{a.name}</p>
                <p className="text-[#b3b3b3] text-xs">{a.desc}</p>
                {a.current && <span className="inline-block mt-2 px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] text-xs rounded-full">Current app</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Cross-app automations that just work</h2>
          <p className="text-[#b3b3b3] text-center mb-8">When apps share the same database, automations happen automatically.</p>
          <div className="space-y-3">
            {automations.map((a, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 flex items-center gap-4">
                <div className="flex-1"><p className="text-[#b3b3b3] text-sm">Trigger: <span className="text-white">{a.trigger}</span></p></div>
                <svg className="w-5 h-5 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="flex-1"><p className="text-[#b3b3b3] text-sm">Action: <span className="text-[#10b981]">{a.action}</span></p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Get the whole suite for $179/mo</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">All 10 apps. One login. One price.</p>
          <a href="https://ziggybusiness.com" className="inline-flex items-center gap-2 px-10 py-5 bg-[#10b981] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Explore ZiggyTech Suite</a>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
