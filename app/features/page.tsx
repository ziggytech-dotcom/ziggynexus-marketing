import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Client Portal`, desc: `Give every client their own branded portal with project dashboards, file sharing, messaging, and invoicing.`, bullets: [`Branded client URL`, `Project dashboards per client`, `Secure file uploads`, `Real-time project status`, `Custom welcome message`, `Mobile-responsive portal`] },
  { title: `File Sharing`, desc: `Securely share files with clients. Track approvals, versions, and download history.`, bullets: [`Unlimited file storage`, `Version control`, `File approval workflows`, `Download history tracking`, `Drag-and-drop uploads`, `Bulk file sharing`] },
  { title: `Invoicing`, desc: `Send branded invoices from the portal. Clients pay online via Stripe. Track outstanding balances automatically.`, bullets: [`Stripe payment collection`, `Recurring invoices`, `Payment reminders`, `Invoice status tracking`, `Tax rate configuration`, `CSV export`] },
  { title: `Project Dashboards`, desc: `Show clients exactly where their project stands with milestones, tasks, and timelines.`, bullets: [`Milestone tracking`, `Task completion views`, `Progress percentage`, `Timeline visualization`, `Status updates`, `Client-friendly layout`] },
  { title: `Messaging`, desc: `Built-in client messaging keeps all communication in one place — threaded by project.`, bullets: [`Per-project message threads`, `File attachments`, `Email notifications`, `Message read receipts`, `Internal team notes`, `Message history`] },
  { title: `E-Signatures and Approvals`, desc: `Collect legally binding signatures on contracts. Send approval requests for deliverables.`, bullets: [`Legally binding e-signatures`, `Approval workflows`, `Audit trail per document`, `Email notifications`, `Multi-signer support`, `Template library`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10b981]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyNexus can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#10b981] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
