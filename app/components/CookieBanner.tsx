'use client'
import { useState, useEffect } from 'react'
export function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => { if (!localStorage.getItem('cookie-consent')) setShow(true) }, [])
  if (!show) return null
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50">
      <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4 shadow-2xl">
        <p className="text-sm text-[#b3b3b3] mb-3">We use cookies to improve your experience. See our <a href="/privacy" className="text-[#10b981] hover:underline">Privacy Policy</a>.</p>
        <div className="flex gap-2">
          <button onClick={() => { localStorage.setItem('cookie-consent','1'); setShow(false) }} className="flex-1 py-2 bg-[#10b981] text-white rounded-lg text-sm font-medium hover:opacity-90">Accept</button>
          <button onClick={() => setShow(false)} className="flex-1 py-2 bg-[#2d2d2d] text-[#b3b3b3] rounded-lg text-sm font-medium">Decline</button>
        </div>
      </div>
    </div>
  )
}
