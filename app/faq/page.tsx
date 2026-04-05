'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Do clients need to create an account?`, a: `No. Clients access their portal via a secure link you share. They can view files, send messages, and sign documents without creating an account.` },
  { q: `How many portals can I create?`, a: `Starter includes 1 portal at $25/mo. Pro includes 5 portals at $39/mo. Add more at $12/portal/mo (Starter) or $10/portal/mo (Pro).` },
  { q: `Can I use my own branding?`, a: `Pro plan users can remove the ZiggyNexus logo and replace it with their own logo, brand colors, and custom portal domain.` },
  { q: `Is e-signature legally binding?`, a: `Yes. ZiggyNexus e-signatures comply with ESIGN and UETA in the US, and eIDAS in Europe. Every signature includes a full audit trail.` },
  { q: `Can I accept payments from the portal?`, a: `Yes. Connect your Stripe account and clients can pay invoices directly from their portal. We never store card details.` },
  { q: `What file types are supported?`, a: `All common file types: PDF, images, documents, video, archives. Individual file size limit is 500MB on Pro.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyNexus.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#10b981]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#10b981] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#10b981]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
