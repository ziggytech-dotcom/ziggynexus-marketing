import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyNexus vs Copilot — Save $360/yr on your client portal",
  description:
    "ZiggyNexus vs Copilot: Full feature comparison. ZiggyNexus offers unlimited portals, an onboarding wizard, and no per-seat fees — at $39/mo vs Copilot's $69/mo.",
};

const comparisonRows = [
  {
    feature: "Monthly price",
    ziggynexus: "$39/mo",
    copilot: "$69/mo",
    winner: "ziggynexus",
    note: "ZiggyNexus saves you $360/year",
  },
  {
    feature: "Annual price",
    ziggynexus: "$390/yr",
    copilot: "$828/yr",
    winner: "ziggynexus",
    note: "Identical features, $438 cheaper annually",
  },
  {
    feature: "Branded client portals",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "Both offer white-label portals",
  },
  {
    feature: "Unlimited client portals",
    ziggynexus: "Yes — unlimited",
    copilot: "No — limited by plan",
    winner: "ziggynexus",
    note: "Copilot caps portals on lower tiers",
  },
  {
    feature: "Custom domain",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "Both support custom domains",
  },
  {
    feature: "Online invoicing",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "",
  },
  {
    feature: "E-sign contracts",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "",
  },
  {
    feature: "Secure file sharing",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "",
  },
  {
    feature: "Client messaging",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "",
  },
  {
    feature: "Onboarding wizard",
    ziggynexus: "Yes — full wizard builder",
    copilot: "No",
    winner: "ziggynexus",
    note: "ZiggyNexus includes a powerful client onboarding flow builder",
  },
  {
    feature: "Per-seat fees",
    ziggynexus: "None",
    copilot: "Yes on team plans",
    winner: "ziggynexus",
    note: "ZiggyNexus covers your whole team, no per-seat charges",
  },
  {
    feature: "Priority support",
    ziggynexus: "Yes",
    copilot: "Paid add-on",
    winner: "ziggynexus",
    note: "Included in ZiggyNexus base plan",
  },
  {
    feature: "API access",
    ziggynexus: "Yes",
    copilot: "Yes",
    winner: "tie",
    note: "",
  },
  {
    feature: "Setup time",
    ziggynexus: "< 5 minutes",
    copilot: "~30 minutes",
    winner: "ziggynexus",
    note: "Simpler setup process",
  },
];

export default function VsCopilotPage() {
  const ziggyWins = comparisonRows.filter((r) => r.winner === "ziggynexus").length;
  const copilotWins = comparisonRows.filter((r) => r.winner === "copilot").length;

  return (
    <div className="bg-[#0f0a0a]">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
              Comparison
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span style={{ color: "#ff1744" }}>Ziggy</span>
              <span className="text-white">Nexus</span>
              <span className="text-zinc-500"> vs </span>
              <span className="text-zinc-400">Copilot</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Same client portal features. Better onboarding tools. $30/mo
              cheaper. Here&apos;s the full breakdown.
            </p>

            {/* Score cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <div className="bg-[#18181b] border border-emerald-500/40 rounded-2xl px-8 py-5 text-center">
                <div className="text-3xl font-bold text-emerald-500">{ziggyWins}</div>
                <div className="text-sm text-zinc-400 mt-1">Categories won by ZiggyNexus</div>
              </div>
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl px-8 py-5 text-center">
                <div className="text-3xl font-bold text-zinc-500">{copilotWins}</div>
                <div className="text-sm text-zinc-400 mt-1">Categories won by Copilot</div>
              </div>
            </div>

            <a
              href="https://app.ziggynexus.com/signup"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center gap-2"
            >
              Switch to ZiggyNexus — $39/mo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Savings callout */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">Save $360/year</div>
            <p className="text-zinc-300 text-lg">
              ZiggyNexus at $39/mo vs Copilot at $69/mo — same core features,
              $30 less per month, unlimited portals, and an onboarding wizard
              that Copilot doesn&apos;t offer.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Feature-by-feature comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#27272a]">
                  <th className="text-left py-4 px-6 text-zinc-500 font-medium text-sm w-1/3">Feature</th>
                  <th className="py-4 px-6 text-center w-1/4">
                    <div className="font-bold">
                      <span style={{ color: "#ff1744" }}>Ziggy</span>
                      <span className="text-white">Nexus</span>
                    </div>
                    <div className="text-emerald-500 text-sm font-semibold">$39/mo</div>
                  </th>
                  <th className="py-4 px-6 text-center w-1/4">
                    <div className="font-bold text-zinc-400">Copilot</div>
                    <div className="text-zinc-600 text-sm">$69/mo</div>
                  </th>
                  <th className="py-4 px-6 text-left text-zinc-500 font-medium text-sm w-1/3 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-[#27272a] ${i % 2 === 0 ? "bg-transparent" : "bg-[#18181b]/40"}`}
                  >
                    <td className="py-4 px-6 text-sm text-zinc-300 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`text-sm font-medium ${row.winner === "ziggynexus" ? "text-emerald-500" : "text-zinc-400"}`}>
                        {row.winner === "ziggynexus" && (
                          <svg className="w-4 h-4 inline mr-1 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {row.ziggynexus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`text-sm ${row.winner === "copilot" ? "text-emerald-500" : "text-zinc-500"}`}>
                        {row.copilot}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-zinc-500 hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why switch section */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why agencies are switching from Copilot
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "The onboarding wizard is a game-changer",
                    body: "Copilot doesn't have a built-in client onboarding wizard. ZiggyNexus does — and agencies report cutting new client setup time from hours to under 15 minutes.",
                  },
                  {
                    title: "Unlimited portals, no tier confusion",
                    body: "Copilot limits client portals on lower-priced plans. With ZiggyNexus, every plan includes unlimited portals. Grow your client base without watching a counter.",
                  },
                  {
                    title: "No per-seat fees eating into margins",
                    body: "Add your entire team — account managers, designers, copywriters — without paying per seat. ZiggyNexus is a flat $39/mo for your whole workspace.",
                  },
                  {
                    title: "30 days to pay back the difference",
                    body: "At $30/mo cheaper, ZiggyNexus pays back the price of its own trial in the first month compared to Copilot. It's $360 back in your pocket every year.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">The math is simple</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#27272a]">
                  <span className="text-zinc-400 text-sm">Copilot annual cost</span>
                  <span className="font-semibold text-zinc-400 line-through">$828/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#27272a]">
                  <span className="text-zinc-400 text-sm">ZiggyNexus annual cost</span>
                  <span className="font-semibold text-emerald-500">$390/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-emerald-500/10 rounded-xl px-3">
                  <span className="font-semibold">Your annual savings</span>
                  <span className="font-bold text-emerald-500 text-xl">$438/yr</span>
                </div>
              </div>
              <a
                href="https://app.ziggynexus.com/signup"
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl text-sm transition-colors mt-6"
              >
                Start saving today — 14-day free trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to make the switch?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Import your client data, set up your portals, and be up and running
            in under an hour. We&apos;ll help you migrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.ziggynexus.com/signup"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link
              href="/pricing"
              className="border border-[#27272a] hover:border-emerald-500 text-white px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center"
            >
              View full pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
