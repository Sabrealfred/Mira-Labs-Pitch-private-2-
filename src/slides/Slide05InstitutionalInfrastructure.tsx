export const Slide05InstitutionalInfrastructure = {
  type: 'content',
  title: 'Institutional Infrastructure',
  subtitle: 'Swiss and Luxembourg regulatory frameworks providing global market access',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-base font-semibold uppercase tracking-wide">Swiss Asset Manager</h3>
            <div className="text-sm text-slate-400 mt-1">FINMA-Licensed (FinIA Art. 17)</div>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Regulatory Overview</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• Full FINMA authorization under Financial Institutions Act (FinIA Art. 17) with SRO membership for AML/KYC.</li>
                <li>• Typical licensing timeline for new applicants: 18-36 months; estimated approval rate &lt;10% for digital asset managers.</li>
                <li>• Regulatory capital maintained at CHF 1.5M+ with independent compliance, risk, and audit functions in place.</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Banking & Custody Network</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• LGT Bank (Liechtenstein) – CHF 280B AUM private bank providing institutional digital asset custody.</li>
                <li>• VP Bank (Liechtenstein) – Digital asset custody since 2019 with segregated client accounts.</li>
                <li>• Julius Bär (Switzerland) – Strategic cooperation for custody and on/off-ramp services.</li>
              </ul>
              <div className="text-sm text-slate-500 mt-2">These relationships typically require 12-24 months of diligence for new entrants.</div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Mira Labs Advantage</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• Immediate transfer of ~CHF 60M existing AUM to establish audited institutional track record.</li>
                <li>• Operational infrastructure (policies, reporting, compliance workflows) already audited and in good standing.</li>
                <li>• Acquisition structure provides Day-1 execution authority without incremental licensing risk.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-base font-semibold uppercase tracking-wide">Luxembourg Umbrella SPV</h3>
            <div className="text-sm text-slate-400 mt-1">CSSF-Regulated Structure</div>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Regulatory Structure</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• CSSF-authorized umbrella fund with segregated sub-fund compartments (400+ capacity).</li>
                <li>• UCITS and AIFMD compatible, enabling EU passporting and institutional onboarding across jurisdictions.</li>
                <li>• Ring-fenced legal entities per compartment prevent cross-contamination of assets or liabilities.</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Use Cases</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• Bespoke SMAs spanning crypto, credit, and tokenized RWAs with dedicated governance.</li>
                <li>• White-label platform for external managers seeking compliant European distribution.</li>
                <li>• Supports Shariah-compliant, ESG, and traditional mandates without rebuilding compliance stack.</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">Operational Benefits</div>
              <ul className="text-base text-slate-700 space-y-2">
                <li>• Pre-approved administrators, auditors, and legal counsel compress new compartment launches to 6-8 weeks.</li>
                <li>• Platform revenue opportunity: 0.25-0.75% AUM infrastructure fee for external managers (Year 2+ optionality).</li>
                <li>• Enables multi-jurisdiction capital raising (US Reg D/506(c), EU AIFMD, MENA private placements) under one framework.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Combined Infrastructure Value</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-2">Speed-to-Market</div>
            <div>Regulatory assets enable Day-1 operations. Replicating licensing and banking stack requires 24-36 months and CHF 3-5M for new entrants.</div>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Trust & Compliance</div>
            <div>Audited policies, AML program, and institutional custody relationships transfer with acquisition, providing immediate allocator confidence.</div>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Platform Optionality</div>
            <div>Luxembourg compartments support recurring platform revenue and strategic partnerships without additional regulatory filings.</div>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Technology Infrastructure: MiraOS</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">&lt;120ns</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Execution Latency</div>
              <div className="text-sm text-slate-500 mt-2">Strategic partner-provided FPGA stack with sub-microsecond performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">32+</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Concurrent Strategies</div>
              <div className="text-sm text-slate-500 mt-2">Institutional execution environment supports multi-strategy deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">99.99%</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Uptime SLA</div>
              <div className="text-sm text-slate-500 mt-2">Redundant fail-over architecture with automated surveillance tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">Day-1</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Deployment Ready</div>
              <div className="text-sm text-slate-500 mt-2">Live integration with custody and reporting stack for immediate activation</div>
            </div>
          </div>
          <div className="text-sm text-slate-500 mt-4">
            Technology partner agreement aligns costs with performance fee revenue share and includes data feeds, surveillance, and reporting automation. CHF 250K working capital retained as regulatory capital buffer.
          </div>
        </div>
      </div>

      <div className="text-sm text-slate-500">
        Sources: FINMA registry and annual reports (2024-2025); LGT Bank, VP Bank, Julius Bär digital asset service announcements; CSSF umbrella fund framework documentation.
      </div>
    </div>
  )
};
