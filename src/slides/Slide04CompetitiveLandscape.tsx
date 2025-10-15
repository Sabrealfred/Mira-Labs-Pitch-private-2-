export const Slide04CompetitiveLandscape = {
  type: 'content',
  title: 'Competitive Landscape',
  subtitle: 'Swiss regulated digital asset managers and Mira Labs differentiation',
  content: (
    <div className="space-y-8">
      <div className="border border-slate-200">
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between text-base">
          <div>
            <h3 className="text-base uppercase tracking-wide font-semibold">Institutional Benchmarking</h3>
            <p className="text-sm text-slate-300">Comparison across licensing, banking, performance, technology, and distribution</p>
          </div>
          <div className="text-right text-sm text-slate-400 uppercase tracking-wide">Source: Company filings, press releases, industry research (2024)</div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[880px] w-full text-sm md:text-base">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wide text-sm">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Criteria</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-900">Mira Labs</th>
                <th className="px-4 py-3 text-center font-semibold">Sygnum</th>
                <th className="px-4 py-3 text-center font-semibold">Amina (SEBA)</th>
                <th className="px-4 py-3 text-center font-semibold">Crypto Finance</th>
                <th className="px-4 py-3 text-center font-semibold">Bitcoin Suisse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-blue-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Regulatory Status</td>
                <td className="px-4 py-3 text-center font-semibold text-blue-700">FINMA AM license + CSSF SPV (Day 1)</td>
                <td className="px-4 py-3 text-center">FINMA bank + securities dealer</td>
                <td className="px-4 py-3 text-center">FINMA bank + wealth management</td>
                <td className="px-4 py-3 text-center">FINMA broker-dealer</td>
                <td className="px-4 py-3 text-center">VQF membership, banking license pending</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Tier-1 Banking Relationships</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">Established (LGT, VP Bank, Julius Bär)</td>
                <td className="px-4 py-3 text-center">Julius Bär, ZKB</td>
                <td className="px-4 py-3 text-center">Julius Bär, Hypothekarbank Lenzburg</td>
                <td className="px-4 py-3 text-center">ZKB, Bank Frick</td>
                <td className="px-4 py-3 text-center">Regional private banks</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Track Record / AUM</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">$72M immediate (~CHF 60M) + $20-30M LOIs</td>
                <td className="px-4 py-3 text-center">$3.5B+ digital asset AUM</td>
                <td className="px-4 py-3 text-center">$2.0B+ across wealth mandates</td>
                <td className="px-4 py-3 text-center">$1.0B+ institutional clients</td>
                <td className="px-4 py-3 text-center">$1.2B retail, institutional in pilot</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Technology Stack</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">FPGA-powered execution + SPV automation</td>
                <td className="px-4 py-3 text-center">Bank-grade core banking</td>
                <td className="px-4 py-3 text-center">Proprietary trading infrastructure</td>
                <td className="px-4 py-3 text-center">Market-making and brokerage systems</td>
                <td className="px-4 py-3 text-center">Retail-first trading platform</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">Distribution Focus</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">Institutional SMA + bespoke funds</td>
                <td className="px-4 py-3 text-center">Private banking & wealth platforms</td>
                <td className="px-4 py-3 text-center">Ultra-HNWI & institutional</td>
                <td className="px-4 py-3 text-center">Institutional brokerage</td>
                <td className="px-4 py-3 text-center">Mass-affluent retail</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Speed-to-Market</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">Day 1 (acquisition)</td>
                <td className="px-4 py-3 text-center">24-30 months build</td>
                <td className="px-4 py-3 text-center">30+ months build</td>
                <td className="px-4 py-3 text-center">36+ months build</td>
                <td className="px-4 py-3 text-center">36+ months build</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-blue-200 bg-blue-50 p-6">
          <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-3">Mira Labs Defensible Advantages</div>
          <ul className="space-y-3 text-base text-blue-900">
            <li>• License acquisition strategy delivers Swiss AM + Luxembourg SPV in weeks, compressing regulatory lead time by 18-24 months.</li>
            <li>• Combination of TradFi track record and high-frequency infrastructure uncommon among Swiss incumbents.</li>
            <li>• Platform architecture designed for bespoke SMA mandates, not retail ETPs—aligns with institutional demand for customization.</li>
            <li>• Technology partnership optionality provides path to owning execution stack without upfront $15-20M capex.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-3">Barriers to Entry (18-36 Month Moat)</div>
          <ul className="space-y-3 text-base text-slate-700">
            <li>• FINMA authorization process (&lt;10% approval rate) plus AML/SRO requirements discourage new applications.</li>
            <li>• Tier-1 Swiss banking partners require multi-year compliance history before extending digital asset services.</li>
            <li>• Institutional LPs demand audited controls, SOC2 reporting, and operational DD—significant upfront investment.</li>
            <li>• Track record expectations: new managers without 12-24 month live mandates struggle to attract institutional allocations.</li>
          </ul>
        </div>
      </div>
      <div className="text-sm text-slate-500">
        Sources: Company filings, FINMA registry, Bloomberg Intelligence digital asset management survey (October 2025).
      </div>
    </div>
  )
};
