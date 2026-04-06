'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ZiggyNexusLogo } from '@/app/components/ZiggyNexusLogo'

export function MarketingNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/suite', label: 'Suite' },
    { href: '/compare/copilot', label: 'vs Copilot' },
    { href: '/compare/honeybook', label: 'vs HoneyBook' },
    { href: '/blog', label: 'Blog' },
  ]
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><ZiggyNexusLogo /></Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => <Link key={l.href} href={l.href} className="text-[#b3b3b3] hover:text-white text-sm font-medium transition-colors">{l.label}</Link>)}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://app.ziggynexus.com/login" className="text-[#b3b3b3] hover:text-white text-sm font-medium px-4 py-2">Sign In</Link>
            <Link href="https://app.ziggynexus.com/signup" className="bg-[#10b981] text-white rounded-lg px-5 py-2 text-sm font-medium hover:opacity-90">Start Free Trial</Link>
          </div>
          <button className="md:hidden p-2 text-[#b3b3b3]" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-[#2d2d2d] py-4 space-y-1 px-2">
            {links.map((l) => <Link key={l.href} href={l.href} className="block px-4 py-3 text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a] rounded-lg text-base" onClick={() => setOpen(false)}>{l.label}</Link>)}
            <div className="border-t border-[#2d2d2d] pt-4 mt-4 flex flex-col gap-2 px-4">
              <Link href="https://app.ziggynexus.com/login" className="block text-center px-5 py-2 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded-lg text-sm font-medium" onClick={() => setOpen(false)}>Sign In</Link>
              <Link href="https://app.ziggynexus.com/signup" className="block text-center bg-[#10b981] text-white rounded-lg px-5 py-2 text-sm font-medium hover:opacity-90" onClick={() => setOpen(false)}>Start Free Trial</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
