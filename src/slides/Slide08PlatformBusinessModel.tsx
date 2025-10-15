import { Building2, Briefcase, Lock } from 'lucide-react';

export const Slide08PlatformBusinessModel = {
  type: 'content',
  title: 'Platform Business Model',
  subtitle: 'Future revenue optionality once regulatory platform scales (not in base case)',
  content: (
    <div className="space-y-6 text-sm md:text-base">
      <div className="border border-blue-200 bg-blue-50 p-4">
        <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-1">
          Future Revenue Optionality
        </div>
        <p className="text-base text-blue-900 leading-relaxed">
          Core projections (Slide 6) consider only asset management fees. The Luxembourg platform unlocks incremental revenue beginning in Year 2 once the regulatory transfer is complete, the $72M (~CHF 60M) AUM base is stabilized, and pilot compartments are validated.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="border border-slate-200 p-4 bg-slate-50 space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-blue-600" size={24} />
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Core Asset Management</h3>
          </div>
          <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
            <li><span className="font-semibold">Model:</span> 1.5% management fee + 35% performance fee on proprietary AUM.</li>
            <li><span className="font-semibold">Run-rate:</span> $72M AUM → $1.0-1.3M Day 1 recurring fees.</li>
            <li><span className="font-semibold">Focus:</span> Convert $20-30M LOIs and lock a 12-month audited track record.</li>
          </ul>
        </div>

        <div className="border border-slate-200 p-4 space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-purple-600" size={24} />
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Platform Services (Year 2+)</h3>
          </div>
          <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
            <li><span className="font-semibold">Model:</span> 0.25-0.75% platform fee per compartment (70%+ margin profile).</li>
            <li><span className="font-semibold">Capacity:</span> 400+ CSSF-approved compartments for external managers.</li>
            <li><span className="font-semibold">2027 Target:</span> 5-7 managers, $120-180M AUM → $0.3-0.5M incremental revenue.</li>
          </ul>
        </div>

        <div className="border border-slate-200 p-4 space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-green-600" size={24} />
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Advisory & Integration</h3>
          </div>
          <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
            <li><span className="font-semibold">Model:</span> $50-150K setup + $2-5K/month retainer (custody, compliance, reporting).</li>
            <li><span className="font-semibold">Clients:</span> Family offices, RIAs, and digital asset funds seeking regulated infrastructure.</li>
            <li><span className="font-semibold">Goal:</span> Accelerate onboarding and deepen cross-sell relationships.</li>
          </ul>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Commercial Validation Roadmap</h3>
        </div>
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4 text-base text-slate-700 leading-relaxed">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Milestones</div>
            <ul className="space-y-1.5">
              <li>• Q3 2026: Launch 3 pilot compartments with allocators (&gt;$5M each).</li>
              <li>• Q4 2026: Onboard first external manager under revenue-share.</li>
              <li>• Q1 2027: Publish audited performance and institutional DD pack.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Success Metrics</div>
            <ul className="space-y-1.5">
              <li>• 70%+ retention after 12 months.</li>
              <li>• Platform fees = 15-20% of total revenue by Year 3.</li>
              <li>• Compartment launch cycle &lt; 8 weeks.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Dependencies</div>
            <ul className="space-y-1.5">
              <li>• FINMA change-of-control approval plus banking consents.</li>
              <li>• CSSF notifications for compartment transfers and onboarding.</li>
              <li>• Pre-aligned provider network (admin/audit/legal) ready to execute.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Key Risks & Mitigations</h3>
        </div>
        <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 text-base text-slate-700 leading-relaxed">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Client Adoption</div>
            <p>Mitigation: Leverage existing $72M (~CHF 60M) relationships, offer introductory rebates, and deploy dedicated onboarding support.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Operational Complexity</div>
            <p>Mitigation: Standardize legal/compliance templates, pre-approve CSSF vendor stack, and automate reporting prior to scaling.</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        Timing and magnitude of these revenues depend on regulatory transfer completion, pilot compartment performance, and Series A capital.
      </p>
      <p className="text-sm text-slate-500">
        Sources: Internal projections; CSSF guidance; benchmarks from Swiss institutional platforms (2024-2025).
      </p>
    </div>
  )
};
