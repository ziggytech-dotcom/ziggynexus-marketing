import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Two-Factor Authentication (TOTP)`, desc: `Protect your account with time-based one-time passwords via any authenticator app.` },
  { title: `Data Encrypted at Rest (AES-256)`, desc: `All stored data is encrypted using AES-256 — the same standard used by financial institutions.` },
  { title: `Data Encrypted in Transit (TLS 1.3)`, desc: `All data in transit is protected using TLS 1.3 — the latest transport security protocol.` },
  { title: `SOC 2 Compliance (In Progress)`, desc: `We are working toward SOC 2 Type II certification. Our infrastructure is built to meet its requirements.` },
  { title: `PCI Compliant Payments (Stripe)`, desc: `We never store card data. All billing is handled by Stripe, a Level 1 PCI DSS compliant processor.` },
  { title: `Row-Level Security`, desc: `Your data is isolated at the database level. No other customer can access your data under any circumstances.` },
  { title: `GDPR & CCPA Compliant`, desc: `Data subject access requests, deletion requests, and portability exports are all supported.` },
  { title: `Regular Security Audits`, desc: `We conduct periodic security reviews of our infrastructure, code, and access controls.` },
]

export default function SecurityPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">Security</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Your data is safe with us</h1>
          <p className="text-xl text-[#b3b3b3]">We built ZiggyNexus for our own business first. Security was never optional.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#10b981]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-[#b3b3b3] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#10b981]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Questions about security?</h2>
            <p className="text-[#b3b3b3] mb-6">We&apos;re happy to answer before you sign up.</p>
            <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
