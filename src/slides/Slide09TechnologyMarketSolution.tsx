import { CheckCircle } from 'lucide-react';

export const Slide09TechnologyMarketSolution = {
  type: 'content',
  title: 'Technology Infrastructure & Market Solution',
  subtitle: 'Strategic partnership delivers institutional execution while our team wraps it in a regulated product',
  content: (
    <div className="space-y-8 text-sm md:text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6 bg-red-50">
          <h3 className="text-base font-semibold uppercase tracking-wide text-red-900 mb-3">Market Inefficiencies Today</h3>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-red-800">Fragmented Liquidity:</span> TradFi and DeFi operate in silos; on/off ramps cost 150-300bps with T+2 settlement, limiting cross-market allocation.
            </li>
            <li>
              <span className="font-semibold text-red-800">Infrastructure Gap:</span> Institutional-grade execution (sub-microsecond latency, full surveillance) is largely unavailable to crypto allocators.
            </li>
            <li>
              <span className="font-semibold text-red-800">Compliance Barrier:</span> Allocators require regulated wrappers, audited controls, and custody integration—difficult to build from scratch.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6 bg-green-50">
          <h3 className="text-base font-semibold uppercase tracking-wide text-green-900 mb-3">Mira Labs Solution</h3>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-green-800">Unified Execution:</span> Sub-microsecond latency across equities, FX, and digital assets via exclusive technology partnership.
            </li>
            <li>
              <span className="font-semibold text-green-800">Regulated Wrapper:</span> FINMA asset manager + CSSF compartments deliver compliant access for global allocators.
            </li>
            <li>
              <span className="font-semibold text-green-800">Turnkey Operations:</span> Custody, risk, and reporting stack integrated Day 1, reducing institutional onboarding to weeks (vs. 18-36 months).</li>
          </ul>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-900 text-white p-4">
          <h3 className="text-base font-semibold uppercase tracking-wide">Execution Infrastructure: Strategic Technology Partnership</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-slate-700">
          <div>
            <div className="text-sm uppercase tracking-wide text-slate-500 mb-2">Partner Profile</div>
            <ul className="space-y-2">
              <li>• 10+ years building FPGA infrastructures for top-tier quantitative funds.</li>
              <li>• Processes $10B+ average daily notional across 15 institutional clients.</li>
              <li>• Relationship structured as revenue share—zero upfront license cost, exclusive access for digital asset mandates.</li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wide text-slate-500 mb-2">Technology Validation Roadmap</div>
            <ul className="space-y-2">
              <li>• Q1 2026: Independent performance audit (latency, fill quality, failover).</li>
              <li>• Q2 2026: 6-month live trading track record published to investors.</li>
              <li>• Q3 2026: Third-party risk assessment covering VaR, stress tests, surveillance.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Technical Capabilities vs. Mira Labs Value-Add</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Partner-Provided Stack</div>
            <ul className="space-y-1">
              <li>• Sub-120ns latency with deterministic routing and redundant fiber paths.</li>
              <li>• Capacity for 10,000+ symbols and 64,000+ concurrent orders per server.</li>
              <li>• 99.99% uptime SLA with automated surveillance and MiFID II best-execution reporting.</li>
              <li>• Direct connectivity to Tier-1 exchanges (CME, Eurex, Binance, Coinbase, Kraken).</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Mira Labs Overlay</div>
            <ul className="space-y-1">
              <li>• Proprietary strategies and risk frameworks launched by Jason Hutchinson (8+ yrs $300M AUM).</li>
              <li>• FINMA/CSSF governance enabling compliant institutional access to partner execution.</li>
              <li>• Client onboarding, reporting, and bespoke SMA design via Luxembourg compartments.</li>
              <li>• Institutional relationship management, due diligence support, and performance analytics.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Competitive Context</h3>
        </div>
        <div className="p-6 text-base text-slate-700 space-y-3">
          <div>
            <span className="font-semibold">Swiss Peers:</span> Sygnum, Amina (SEBA), Crypto Finance, Bitcoin Suisse, 21Shares.
          </div>
          <div>
            <span className="font-semibold">Differentiation:</span> We combine regulated asset management with institutional FPGA execution through an exclusive partnership. Peers either focus on banking/custody (Sygnum, Bitcoin Suisse) or ETP manufacturing (21Shares) without comparable execution infrastructure.
          </div>
          <div>
            <span className="font-semibold">Barrier:</span> Replicating our licensing + technology partnership requires 24-36 months and $3-5M+ investment, plus access to scarce Tier-1 banking relationships.
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Target Client Segments</h3>
        </div>
        <div className="p-6 space-y-4 text-base text-slate-700">
          <div className="flex gap-3">
            <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
            <div>
              <span className="font-semibold">TradFi allocators seeking crypto exposure:</span> Need custody-backed, MiFID II compliant vehicles with daily NAV and institutional reporting.
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
            <div>
              <span className="font-semibold">Crypto-native funds seeking TradFi yield:</span> Desire access to tokenized credit arbitrage and delta-neutral strategies (8-15% target) via Luxembourg compartments.
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
            <div>
              <span className="font-semibold">Family offices / RIAs needing turnkey infrastructure:</span> Leverage our regulated platform instead of investing $3-5M and 18-36 months to build internally.
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-slate-500">
        We are finalizing naming rights with the technology partner; details available under NDA. Performance audits and risk assessments described above will be shared with investors as milestones are completed.
      </div>
      <div className="text-sm text-slate-500">
        Sources: Technology partner data room (2025), Mira Labs due diligence memos, Swiss digital asset manager disclosures.
      </div>
    </div>
  )
};
