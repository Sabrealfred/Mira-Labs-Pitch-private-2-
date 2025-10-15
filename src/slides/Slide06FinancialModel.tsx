import { RevenueChart } from '../components/RevenueChart';

export const Slide06FinancialModel = {
  type: 'content',
  title: 'Financial Projections',
  subtitle: 'Conservative base case with clear path to profitability',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-6 items-stretch text-sm md:text-base">
        <div className="border border-slate-200 flex flex-col">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Revenue Build-Up Analysis</h3>
          </div>
          <div className="overflow-x-auto flex-1 px-4 py-4">
            <table className="w-full text-sm md:text-base min-w-[600px]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-3 text-left font-semibold uppercase tracking-wide text-sm">Metric</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Immediate</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 1</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 2</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 3</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold">Total AUM ($M)</td>
                <td className="p-3 text-right">60</td>
                <td className="p-3 text-right">80-90</td>
                <td className="p-3 text-right">150-180</td>
                <td className="p-3 text-right">250-300</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 pl-6 text-slate-600">Base AUM (SRO)</td>
                <td className="p-3 text-right text-slate-600">60</td>
                <td className="p-3 text-right text-slate-600">60</td>
                <td className="p-3 text-right text-slate-600">60</td>
                <td className="p-3 text-right text-slate-600">70</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 pl-6 text-slate-600">LOI Conversions</td>
                <td className="p-3 text-right text-slate-600">—</td>
                <td className="p-3 text-right text-slate-600">20-30</td>
                <td className="p-3 text-right text-slate-600">50</td>
                <td className="p-3 text-right text-slate-600">80</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 pl-6 text-slate-600">New Business Development</td>
                <td className="p-3 text-right text-slate-600">—</td>
                <td className="p-3 text-right text-slate-600">—</td>
                <td className="p-3 text-right text-slate-600">40-70</td>
                <td className="p-3 text-right text-slate-600">100-150</td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="p-3 font-semibold">Management Fees (1.5%)</td>
                <td className="p-3 text-right font-semibold">0.9</td>
                <td className="p-3 text-right font-semibold">1.2-1.35</td>
                <td className="p-3 text-right font-semibold">2.25-2.7</td>
                <td className="p-3 text-right font-semibold">3.75-4.5</td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="p-3 font-semibold">Performance Fees (35%)</td>
                <td className="p-3 text-right font-semibold">—</td>
                <td className="p-3 text-right font-semibold">0.3-0.45</td>
                <td className="p-3 text-right font-semibold">1.0-1.1</td>
                <td className="p-3 text-right font-semibold">2.0-2.5</td>
              </tr>
              <tr className="border-b border-slate-400 bg-blue-50">
                <td className="p-3 font-bold">Total Revenue ($M)</td>
                <td className="p-3 text-right font-bold">0.9</td>
                <td className="p-3 text-right font-bold text-blue-600">1.5-1.8</td>
                <td className="p-3 text-right font-bold text-blue-600">3.25-3.8</td>
                <td className="p-3 text-right font-bold text-blue-600">5.75-7.0</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 text-slate-600">Operating Expenses</td>
                <td className="p-3 text-right text-slate-600">0.4-0.5</td>
                <td className="p-3 text-right text-slate-600">0.8-1.0</td>
                <td className="p-3 text-right text-slate-600">1.5-1.8</td>
                <td className="p-3 text-right text-slate-600">2.5-3.0</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 font-bold">EBITDA ($M)</td>
                <td className="p-3 text-right font-bold">0.4-0.5</td>
                <td className="p-3 text-right font-bold text-green-600">0.5-0.8</td>
                <td className="p-3 text-right font-bold text-green-600">1.45-2.0</td>
                <td className="p-3 text-right font-bold text-green-600">2.75-4.0</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 font-bold">EBITDA Margin (%)</td>
                <td className="p-3 text-right font-bold">44-56%</td>
                <td className="p-3 text-right font-bold">33-44%</td>
                <td className="p-3 text-right font-bold">45-53%</td>
                <td className="p-3 text-right font-bold">48-57%</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
        <div className="h-full">
          <RevenueChart />
        </div>
      </div>
      <div className="text-sm text-slate-500">
        Base case reflects management and performance fees from proprietary AUM only. Platform service revenue (Luxembourg compartments licensed to third parties) is treated as upside optionality and excluded from core projections.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
        <div className="border border-slate-200 p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Key Assumptions & Justification</div>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Management Fee:</span> 1.5% of AUM (aligned with Swiss digital asset manager benchmarks: Sygnum 1.5%, Amina 1.4%).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Performance Fee:</span> 35% above 8% hurdle (industry range 20-40%; supported by HFT strategy profile and daily liquidity).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Strategy Returns:</span> 15-25% gross target based on forward-tested partner infrastructure; 10% downside case modeled in sensitivities.
            </li>
            <li>
              <span className="font-semibold text-slate-900">LOI Conversion:</span> 40-60% Year 1 from $20-30M qualified pipeline; 20% downside conversion modeled for stress test.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Operating Leverage:</span> Fixed cost base locked at $0.8-1.0M; incremental AUM scales with sub-40% expense growth.
            </li>
          </ul>
        </div>

        <div className="border border-slate-200 p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Operating Expense Breakdown</div>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Personnel:</span> $400-500K (4 FTEs: CIO, COO/CCO, Quant Lead, Operations).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Regulatory & Compliance:</span> $150-200K (FINMA fees, audit, legal, CSSF filings).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Technology & Data:</span> $100-150K (FPGA partnership share, market data, risk systems).
            </li>
            <li>
              <span className="font-semibold text-slate-900">General & Administrative:</span> $125-175K (insurance, office, travel, investor reporting).
            </li>
          </ul>
        </div>

        <div className="border border-slate-200 p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Sensitivity Analysis</div>
          <div className="space-y-3 text-base text-slate-700">
            <div>
              <div className="font-semibold text-slate-900">Base Case (Displayed):</div>
              <div>$1.5-1.8M Year 1 revenue at 45-53% EBITDA margin (40-60% LOI conversion, 15-25% gross returns).</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Downside Case:</div>
              <div>20% LOI conversion + 10% gross returns ⇒ $1.0-1.3M revenue, 28-34% EBITDA margin (remains cash-flow positive).</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Growth Case:</div>
              <div>80% LOI conversion + platform fees from 5 compartments ⇒ $1.9-2.3M revenue, 48-55% EBITDA margin.</div>
            </div>
            <div className="text-slate-500">IRR impact: 6-month delay to Series A reduces IRRs ~30-40% while MOIC remains unchanged.</div>
          </div>
        </div>
      </div>

      <div className="text-sm text-slate-500">
        Sources: Mira Labs internal financial model (October 2025); Swiss digital asset manager fee benchmarks from Sygnum, Amina, and Crypto Finance public disclosures; partner technology infrastructure performance data.
      </div>
    </div>
  )
};
