import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyNexus — The client portal your clients will actually use.",
  description:
    "Give every client their own branded portal. Online invoicing, e-sign contracts, secure file sharing, and client messaging — all for $39/mo.",
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Branded White-Label Portals",
    description:
      "Every client gets their own portal with your branding — your logo, your colors, your domain. It feels like an extension of your business, not a third-party tool.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Online Invoicing",
    description:
      "Create and send professional invoices in seconds. Clients pay directly from their portal. Automatic reminders chase late payments so you don't have to.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure File Sharing",
    description:
      "Share deliverables, reports, and documents through encrypted, permission-controlled file storage. No more Google Drive links or email attachments.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "E-Sign Contracts",
    description:
      "Send contracts for legally-binding electronic signature. Track who has viewed, signed, or declined. Never chase a signature over email again.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Client Messaging",
    description:
      "Centralized, threaded conversations keep client communication in one place. No more scattered email chains or missed Slack messages.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Onboarding Wizard",
    description:
      "Guide new clients through a structured onboarding flow. Collect information, request documents, and set expectations — automatically.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create a portal in 60 seconds",
    description:
      "Add a client, set their portal name, upload your logo, and ZiggyNexus spins up a fully branded workspace — no coding or configuration required.",
  },
  {
    step: "02",
    title: "Invite your client",
    description:
      "Send a branded invite email. Your client creates their account and lands directly in their portal — not a generic dashboard full of other clients' data.",
  },
  {
    step: "03",
    title: "Run your whole relationship from one place",
    description:
      "Send invoices, share files, collect signatures, exchange messages, and track onboarding progress — all without leaving ZiggyNexus.",
  },
];

const testimonials = [
  {
    quote:
      "We switched from Copilot and immediately saved $360 a year. ZiggyNexus has everything we needed and the onboarding wizard alone has cut our new client setup time in half.",
    name: "Sarah M.",
    role: "Founder, Momentum Design Agency",
  },
  {
    quote:
      "My clients finally stop emailing me attachments. The file sharing and e-sign features are polished, fast, and my clients actually use them without me having to explain anything.",
    name: "James T.",
    role: "Independent Strategy Consultant",
  },
  {
    quote:
      "SuiteDash was a nightmare to configure and looked like it was built in 2012. ZiggyNexus took us 20 minutes to set up and our clients have complimented the portal design.",
    name: "Priya K.",
    role: "Operations Lead, Clearpath Advisory",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0f0a0a]">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Trusted by 500+ agencies and consultants
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Give every client{" "}
              <span className="text-emerald-500">their own portal.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              The client portal your clients will actually use. Branded
              white-label workspaces, invoicing, file sharing, e-sign, and
              messaging — all for $39/mo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.ziggynexus.com/signup"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/features"
                className="border border-[#27272a] hover:border-emerald-500 text-white px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center"
              >
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-[#27272a] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold text-lg">500+</span> agencies &amp; consultants
            </span>
            <span className="text-[#27272a]">|</span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold text-lg">12k+</span> client portals created
            </span>
            <span className="text-[#27272a]">|</span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold text-lg">$2.4M+</span> invoiced through ZiggyNexus
            </span>
            <span className="text-[#27272a]">|</span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold text-lg">4.9★</span> average rating
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Everything your client relationship needs
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Six powerful features in one unified platform. No integrations, no
              duct-tape — it just works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/features"
              className="border border-[#27272a] hover:border-emerald-500 text-white px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center gap-2"
            >
              Explore all features
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Up and running in minutes
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No complex setup. No developer needed. Just sign up and start
              impressing your clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-[#27272a] mb-4 font-mono">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-sm text-emerald-500 font-medium mb-2 uppercase tracking-wide">Simple pricing</div>
              <h2 className="text-4xl font-bold mb-3">
                One plan. Everything included.
              </h2>
              <p className="text-zinc-400 max-w-lg">
                No feature tiers, no per-client fees, no surprise overage charges.
                Unlimited portals, all six features, one flat monthly rate.
              </p>
            </div>
            <div className="text-center md:text-right shrink-0">
              <div className="text-6xl font-bold mb-1">
                $39
                <span className="text-2xl text-zinc-400 font-normal">/mo</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6">Unlimited client portals</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                <a
                  href="https://app.ziggynexus.com/signup"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Start Free Trial
                </a>
                <Link
                  href="/pricing"
                  className="border border-[#27272a] hover:border-emerald-500 text-white px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  See full pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Loved by service professionals
            </h2>
            <p className="text-zinc-400 text-lg">
              Join hundreds of agencies and consultants who made the switch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-300 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-emerald-500/5 blur-3xl" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative">
              Your clients deserve a{" "}
              <span className="text-emerald-500">better experience.</span>
            </h2>
            <p className="text-zinc-400 text-xl mb-10 max-w-2xl mx-auto relative">
              Start your free trial today. No credit card required. Set up your
              first client portal in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <a
                href="https://app.ziggynexus.com/signup"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started Free — $39/mo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/vs/copilot"
                className="border border-[#27272a] hover:border-emerald-500 text-white px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center"
              >
                Compare vs Copilot
              </Link>
            </div>
            <p className="text-zinc-600 text-sm mt-6 relative">
              14-day free trial &middot; No credit card required &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
