import Link from 'next/link'
import { ZiggyNexusLogo } from '@/app/components/ZiggyNexusLogo'

export function MarketingFooter() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <ZiggyNexusLogo />
            <p className="mt-4 text-[#b3b3b3] text-sm leading-relaxed">Client portal your clients will actually use</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {['/features','/pricing','/integrations','/compare/copilot','/blog','/changelog','/security','/faq'].map((href) => (
                <li key={href}><Link href={href} className="text-[#b3b3b3] hover:text-white text-sm">{href.replace('/','').replace('-',' ')}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {['/about','/press','/contact'].map((href) => <li key={href}><Link href={href} className="text-[#b3b3b3] hover:text-white text-sm">{href.replace('/','').charAt(0).toUpperCase()+href.slice(2)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {['/privacy','/terms','/cookies'].map((href) => <li key={href}><Link href={href} className="text-[#b3b3b3] hover:text-white text-sm">{href.replace('/','').charAt(0).toUpperCase()+href.slice(2)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://twitter.com/ziggynexus" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-white text-sm">Twitter / X</a></li>
              <li><a href="https://linkedin.com/company/ziggynexus" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-white text-sm">LinkedIn</a></li>
              <li><a href="https://youtube.com/@ziggynexus" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-white text-sm">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2d2d2d] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#b3b3b3] text-sm">&copy; 2026 ZiggyTech Ventures LLC. All rights reserved.</p>
          <p className="text-[#555] text-xs">All trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  )
}
