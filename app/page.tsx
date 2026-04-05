'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: 'Client Portal', desc: 'Give every client their own branded portal with project updates, files, invoices, and messages — all in one place.' },
  { title: 'Project Dashboards', desc: 'Track deliverables, milestones, and deadlines. Clients always know where things stand without you chasing them.' },
  { title: 'File Sharing', desc: 'Share files, get approvals, and collect feedback. No more email attachments or scattered Google Drive links.' },
  { title: 'Invoicing & Payments', desc: 'Send invoices and collect payment directly through the portal. Stripe-powered, professionally branded.' },
  { title: 'E-Signatures', desc: 'Get contracts and proposals signed without leaving the portal. Full audit trail on every document.' },
  { title: 'Client Messaging', desc: 'Centralized communication per project. No more digging through email threads to find that one approval.' },
]

const faqs = [
  { q: 'Do my clients need to create an account?', a: 'Yes — clients get their own login to access their portal. Setup takes less than a minute and they only see their own projects.' },
  { q: 'Can I white-label it with my brand?', a: 'Yes. Pro plan includes custom branding — your logo, colors, and optionally your own domain.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel from settings with one click. No fees, no questions.' },
  { q: 'What integrations are supported?', a: 'Zapier, Resend for email, and ZiggyHQ for CRM sync. More coming soon.' },
  { q: 'Is my data secure?', a: 'Yes. Encrypted at rest and in transit. Row-level security on all client data. 2FA available.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#10b981' }}>Nexus</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Integrations', '/integrations'], ['Suite', '/suite'], ['vs Copilot', '/compare/copilot'], ['vs HoneyBook', '/compare/honeybook']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggynexus.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10b981] text-white rounded-xl font-semibold text-sm hover:bg-[#10b981]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#10b981]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyNexus — Client Portal
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Client portal your clients<br />
            <span style={{ color: '#10b981' }}>will actually use.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            We built ZiggyNexus because our clients kept asking for updates in different places. One portal. Everything in one place. Built for how agencies and freelancers actually work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggynexus.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10b981] text-white rounded-xl font-semibold text-lg hover:bg-[#10b981]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded-xl font-semibold text-lg hover:bg-[#10b981]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$25/mo — less than half of Copilot', 'Set up in under an hour', 'White-label on Pro plan', 'Support from the team that built it'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyNexus in action</p>
                <Link href="https://app.ziggynexus.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#10b981] text-white rounded-lg text-sm font-medium hover:bg-[#10b981]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything your clients need. In one place.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">Stop chasing clients across email, Slack, and Google Drive. ZiggyNexus brings everything into one professional portal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#10b981]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-5 group-hover:bg-[#10b981]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded-xl font-semibold hover:bg-[#10b981]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#10b981]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because we needed it</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>When we started our agency, clients kept asking the same questions: &ldquo;Where are the files?&rdquo; &ldquo;What is the status?&rdquo; &ldquo;Can you resend that invoice?&rdquo; We were managing it all through email, Slack, and scattered Google Docs.</p>
            <p>Copilot wanted $69/month. For one seat. We built a better system and made it available for every agency and freelancer who is dealing with the same chaos.</p>
            <p className="text-white font-medium">That&apos;s ZiggyNexus. Built by people who get it, for people who need it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$25/mo', label: 'Starting price', color: '#10b981' },
              { value: '5 seats', label: 'On Pro plan', color: '#0ea5e9' },
              { value: '1 portal', label: 'Per client', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#10b981]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">Copilot charges $69/mo for 1 seat. We include 5 seats for $39/mo. No per-client fees. No hidden costs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$25</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 seat · +$12/additional seat</p>
              <Link href="https://app.ziggynexus.com/signup" className="block w-full text-center px-6 py-3 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded-xl font-semibold hover:bg-[#10b981]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#10b981]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(16,185,129,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#10b981] text-white text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$39</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 seats included · +$10/additional seat</p>
              <Link href="https://app.ziggynexus.com/signup" className="block w-full text-center px-6 py-3 bg-[#10b981] text-white rounded-xl font-semibold hover:bg-[#10b981]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#10b981] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#10b981]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#10b981] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#10b981] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="absolute inset-0 bg-[#10b981]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to give your clients<br /><span style={{ color: '#10b981' }}>the portal they deserve?</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">14 days free. No credit card. Set up in under an hour.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggynexus.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#10b981] text-white rounded-xl font-bold text-xl hover:bg-[#10b981]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded-xl font-bold text-xl hover:bg-[#10b981]/20 transition-all">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#10b981' }}>Nexus</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">Client portal built for agencies and freelancers.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Integrations', '/integrations'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs Copilot', '/compare/copilot'], ['vs HoneyBook', '/compare/honeybook'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
