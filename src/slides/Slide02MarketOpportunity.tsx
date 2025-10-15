export const Slide02MarketOpportunity = {
  type: 'content',
  title: 'Market Opportunity',
  subtitle: 'Institutional capital shifting toward regulated digital asset managers',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm md:text-base">
        <div className="border border-slate-200 h-full">
          <div className="bg-slate-50 border-b border-slate-200 p-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              TAM → SAM → SOM
            </div>
            <div className="text-base text-slate-500">
              Total addressable market narrowing to Mira Labs Year 3 target
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="relative">
              <div className="bg-slate-900 text-white rounded-md px-4 py-3">
                <div className="text-sm uppercase tracking-wide text-slate-300 mb-1">TAM</div>
                <div className="text-2xl font-light">$500B+</div>
                <div className="text-sm text-slate-300">Global regulated digital asset AUM (2024)</div>
              </div>
              <div className="bg-slate-800 text-white rounded-md px-4 py-3 mt-4 ml-6">
                <div className="text-sm uppercase tracking-wide text-slate-300 mb-1">SAM</div>
                <div className="text-xl font-light">$10-15B</div>
                <div className="text-sm text-slate-300">Institutional allocators seeking Swiss-regulated exposure</div>
              </div>
              <div className="bg-blue-600 text-white rounded-md px-4 py-3 mt-4 ml-12">
                <div className="text-sm uppercase tracking-wide text-blue-200 mb-1">SOM</div>
                <div className="text-lg font-medium">$250-300M</div>
                <div className="text-sm text-blue-100">Mira Labs Year 3 penetration (2-3% of SAM)</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 border border-slate-200 p-4">
                <div className="text-2xl font-light text-slate-900 mb-1">3-7%</div>
                <div className="text-sm uppercase tracking-wide text-slate-500">Institutional crypto allocation targets</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4">
                <div className="text-2xl font-light text-slate-900 mb-1">18-36 mo</div>
                <div className="text-sm uppercase tracking-wide text-slate-500">License acquisition timeline for new entrants</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4">
                <div className="text-2xl font-light text-slate-900 mb-1">&lt;10%</div>
                <div className="text-sm uppercase tracking-wide text-slate-500">Estimated FINMA approval rate for new managers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-slate-200 h-full">
          <div className="bg-slate-50 border-b border-slate-200 p-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Institutional Demand Drivers
            </div>
            <div className="text-base text-slate-500">
              Why allocators are moving toward licensed digital asset platforms now
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-4 text-base text-slate-700">
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">Post-FTX Flight to Quality</div>
                <p>Global allocators are reallocating from offshore exchanges to regulated asset managers with audited controls and bank-grade custody.</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">Regulatory Momentum</div>
                <p>Swiss FINMA, EU MiCA, and US SEC/CFTC guidance now favor fully licensed structures, creating a compliance premium for established managers.</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">Institutional Allocation Growth</div>
                <p>Endowments, family offices, and hedge funds are increasing digital asset allocations from 1-3% to 3-7% of portfolios over the next 24 months.</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">Capital Access Gap</div>
                <p>Only six Swiss managers currently combine Tier-1 banking relationships with digital asset mandates, leaving significant unmet demand within the next 2-3 years.</p>
              </div>
            </div>
            <div className="border border-blue-100 bg-blue-50 p-4">
              <div className="text-sm uppercase tracking-wide text-blue-600 mb-1">Speed-to-Market Advantage</div>
              <p className="text-base text-blue-900">
                Mira Labs enters as a fully licensed, banked platform on Day 1, bypassing the 18-36 month regulatory queue that constrains new entrants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-500">
        Sources: Mira Labs research; Chainalysis 2024 Institutional Adoption Report; BIS Quarterly Review (Q2 2025).
      </div>
    </div>
  )
};
