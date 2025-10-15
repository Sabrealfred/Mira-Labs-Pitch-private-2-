export const Slide10ValuationFramework = {
  type: 'content',
  title: 'Valuation & Returns Analysis',
  subtitle: 'Attractive entry multiple with clear path to value creation',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Entry Valuation Analysis</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs text-slate-600 uppercase tracking-wide">Pre-Money Cap</span>
                <span className="text-2xl font-light text-slate-900">$18M</span>
              </div>
              <div className="text-xs text-slate-500">Pre-acquisition valuation (existing SAFEs)</div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Revenue Multiple Analysis</div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Year 1 Revenue (Base Case)</span>
                  <span className="text-sm font-semibold">$1.5-1.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Implied Multiple</span>
                  <span className="text-sm font-semibold text-blue-600">10-12x</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs text-slate-600">Year 2 Revenue (Base Case)</span>
                  <span className="text-sm font-semibold">$3.25-3.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Implied Multiple</span>
                  <span className="text-sm font-semibold text-green-600">4.7-5.5x</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">AUM Multiple Analysis</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Immediate AUM</span>
                  <span className="text-sm font-semibold">$72M (~CHF 60M)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Valuation / AUM</span>
                  <span className="text-sm font-semibold text-blue-600">0.30x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Comparable Analysis</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">Traditional Asset Managers</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">Revenue Multiple Range</span>
                  <span className="text-xl font-light text-slate-900">10-20x</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Examples: BlackRock (18x), Invesco (12x), Affiliated Managers Group (14x). Mature, lower-growth businesses with slower AUM expansion.
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">Digital Asset Managers</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">Revenue Multiple Range</span>
                  <span className="text-xl font-light text-slate-900">15-30x</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Examples: Crypto Finance (acquired by Deutsche Börse, ~25x), Galaxy Digital (20-25x), Swiss comparables Sygnum (est. 20-30x) and 21Shares (25-35x via ETP). High-growth, regulation-focused peers.
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">HFT / Quant Shops</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">Revenue Multiple Range</span>
                  <span className="text-xl font-light text-slate-900">20-40x</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Examples: Citadel Securities (30-40x est.), Virtu Financial (15-25x public), Jump Trading (35-45x est.). Mira Labs leverages comparable technology but pairs it with regulated asset management.
                </div>
              </div>

              <div className="bg-blue-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-900 mb-2">Mira Labs Position</div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm text-slate-700">Entry Multiple (Year 1)</span>
                  <span className="text-xl font-light text-blue-600">10-12x</span>
                </div>
                <div className="text-xs text-slate-600">Below comparable range with hybrid positioning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Liquidity Pathways (5-7 Year Horizon)</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Primary Exit: Strategic Acquisition</div>
            <ul className="space-y-1">
              <li>• Precedents: Crypto Finance → Deutsche Börse (2021), METACO → Ripple (2023), Taurus → Deutsche Börse (2024).</li>
              <li>• Likely acquirers: Swiss private banks, global exchanges, financial infrastructure providers.</li>
              <li>• Valuation range: 15-30x EBITDA for regulated, profitable digital asset platforms.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Secondary Path: Growth Equity / IPO</div>
            <ul className="space-y-1">
              <li>• Series B/C growth equity for continued expansion (2028+).</li>
              <li>• Potential dual-track process once EBITDA consistently &gt;$5M and AUM exceeds $500M.</li>
              <li>• Requires multi-year audited track record and expanded distribution footprint.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Execution Plan</div>
            <ul className="space-y-1">
              <li>• Q1 2026-Q1 2027: Build 12-month audited track record | Q2-Q3 2027: Series A fundraise.</li>
              <li>• 2028-2029: Scale platform compartments, surpass $300M AUM, reach $3-5M EBITDA.</li>
              <li>• 2030-2032: Target exit once regulatory moat + profitability thresholds achieved.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Investor Return Scenarios</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-3 text-left font-semibold uppercase tracking-wide text-xs">Scenario</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Next Round Valuation</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Revenue Multiple</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Effective Price</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">MOIC</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">IRR (18mo)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold">Downside</td>
                  <td className="p-3 text-right">$25M</td>
                  <td className="p-3 text-right text-slate-600">7x Y2 Revenue</td>
                  <td className="p-3 text-right text-slate-600">$14.4M (20% disc)</td>
                  <td className="p-3 text-right font-semibold">1.7x</td>
                  <td className="p-3 text-right font-semibold">53%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Conservative</td>
                  <td className="p-3 text-right">$40M</td>
                  <td className="p-3 text-right text-slate-600">11x Y2 Revenue</td>
                  <td className="p-3 text-right text-slate-600">$14.4M (20% disc)</td>
                  <td className="p-3 text-right font-semibold">2.8x</td>
                  <td className="p-3 text-right font-semibold">128%</td>
                </tr>
                <tr className="border-b border-slate-200 bg-blue-50">
                  <td className="p-3 font-semibold">Base Case</td>
                  <td className="p-3 text-right">$72M (~CHF 60M)</td>
                  <td className="p-3 text-right text-slate-600">16x Y2 Revenue</td>
                  <td className="p-3 text-right text-slate-600">$14.4M (20% disc)</td>
                  <td className="p-3 text-right font-semibold text-blue-600">4.2x</td>
                  <td className="p-3 text-right font-semibold text-blue-600">222%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Growth Case</td>
                  <td className="p-3 text-right">$90M</td>
                  <td className="p-3 text-right text-slate-600">24x Y2 Revenue</td>
                  <td className="p-3 text-right text-slate-600">$14.4M (20% disc)</td>
                  <td className="p-3 text-right font-semibold">6.3x</td>
                  <td className="p-3 text-right font-semibold">368%</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold">Upside (w/ LBO)</td>
                  <td className="p-3 text-right">$150M</td>
                  <td className="p-3 text-right text-slate-600">21x Y3 Revenue</td>
                  <td className="p-3 text-right text-slate-600">$14.4M (20% disc)</td>
                  <td className="p-3 text-right font-semibold text-green-600">10.4x</td>
                  <td className="p-3 text-right font-semibold text-green-600">464%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-slate-500 space-y-1">
            <div>Return scenario assumptions: $5M investment via Option 2 (SAFE) at $18M pre-money cap with 20% discount; Option 1 generates additional AUM returns not reflected here.</div>
            <div>18-24 month timeline to Series A (Q2-Q3 2027 target) assumes: (1) SRO transfer complete by Q1 2026, (2) 12-month audited track record (Q1 2026-Q1 2027), (3) $100-150M AUM achieved, (4) platform pilots underway. Timing is milestone-driven.</div>
            <div>If timeline extends to 24 months, IRRs decline ~30-40% (MOIC unchanged). Growth and upside cases require 50-80% LOI conversion plus platform revenue validation.</div>
          </div>
        </div>
      </div>
      <div className="text-xs text-slate-500">
        Sources: Company comparables include BlackRock, Invesco, Affiliated Managers Group (public filings 2024-2025); Crypto Finance–Deutsche Börse transaction (2021), Galaxy Digital filings (2024), Citadel Securities investor presentations (2024), Virtu Financial 10-K (2024).
      </div>
    </div>
  )
};
