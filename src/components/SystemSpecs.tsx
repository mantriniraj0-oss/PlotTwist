import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Cpu, Users, GitMerge, ShieldCheck } from 'lucide-react';

export function SystemSpecs() {
  const { t } = useLanguage();

  const scopeData = [
    { area: 'Project Proposal', activities: 'Online submission, preliminary scrutiny, document upload', stakeholders: 'Project Implementing Agency, State Government', output: 'Digitally submitted proposal' },
    { area: 'Land Identification', activities: 'Parcel identification, survey details, GIS geo-tagging', stakeholders: 'District Authority, Field Officers', output: 'Verified GIS-linked land parcels' },
    { area: 'Digital Verification', activities: 'Land-record verification, ownership and area validation', stakeholders: 'District Authority, Revenue Officials', output: 'Verified land data' },
    { area: 'Approval Workflow', activities: 'Multi-level scrutiny, approvals, rejection/return with remarks', stakeholders: 'State Government, Central Ministry', output: 'Transparent approval trail' },
    { area: 'Notification Management', activities: 'Record notifications and affected parcels', stakeholders: 'District Authority, State Government', output: 'Notification tracking' },
    { area: 'Award & Compensation', activities: 'Award calculation, compensation assessment and payment tracking', stakeholders: 'LAO, Finance Authorities', output: 'Compensation status' },
    { area: 'Rehabilitation & Resettlement', activities: 'Affected/displaced family tracking and R&R progress', stakeholders: 'District Authority, R&R Officials', output: 'R&R monitoring' },
    { area: 'Possession', activities: 'Possession documentation and parcel status', stakeholders: 'District Authority, Project Agency', output: 'Possession record' },
    { area: 'Timeline Monitoring', activities: 'Milestones, deadlines, delays and escalations', stakeholders: 'All stakeholders', output: 'Real-time project status' },
    { area: 'GIS & Spatial Analysis', activities: 'Map visualization, parcel layers, project boundaries', stakeholders: 'All authorized users', output: 'Interactive GIS dashboard' },
    { area: 'Document Management', activities: 'Upload, versioning, verification and audit history', stakeholders: 'All authorized users', output: 'Secure document repository' },
    { area: 'Analytics & MIS', activities: 'State/project reports, KPIs, trend analysis', stakeholders: 'Government Decision Makers', output: 'Executive dashboards and reports' },
    { area: 'Predictive Intelligence', activities: 'Delay/risk prediction and bottleneck identification', stakeholders: 'Central/State Decision Makers', output: 'Early-warning insights' },
    { area: 'Public Transparency', activities: 'Safe/public status tracking', stakeholders: 'Citizens, Project Authorities', output: 'Transparent acquisition status' }
  ];

  const techData = [
    { c: 'Database', t: 'PostgreSQL with PostGIS / MySQL' },
    { c: 'GIS Platform', t: 'GeoServer, OpenLayers, Leaflet, QGIS' },
    { c: 'APIs', t: 'RESTful APIs / GraphQL' },
    { c: 'Cloud Infrastructure', t: 'NIC Cloud (MeghRaj) / AWS / Azure Government Cloud' },
    { c: 'Notification Services', t: 'SMS Gateway, Email APIs, Push Notifications' },
    { c: 'Frontend', t: 'React.js / Next.js' },
    { c: 'Backend', t: 'Node.js / Python' },
    { c: 'AI & Analytics', t: 'Gemini API, Python, Machine Learning' },
    { c: 'Authentication', t: 'OAuth 2.0 / JWT, RBAC' },
    { c: 'Document Management', t: 'Secure Cloud Storage, Version Control, Audit Logs' },
    { c: 'Mobile Interface', t: 'Responsive Web App / PWA' }
  ];

  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight uppercase leading-none text-primary">
          {t('System Specs')}
        </h1>
        <p className="font-body text-sm text-on-surface-variant">
          {t('National Land Acquisition & Management System Architecture and Specifications')}
        </p>
      </div>

      {/* Scope of Study */}
      <section className="bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] flex flex-col overflow-hidden">
        <div className="bg-primary-container p-3 border-b-2 border-outline flex items-center gap-2">
          <BookOpen size={20} className="text-on-primary-container" />
          <h2 className="font-headline font-bold text-lg uppercase text-on-primary-container">{t('Scope of Study')}</h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface-container border-b-2 border-outline text-xs uppercase font-bold text-on-surface">
                <th className="p-3 border-r-2 border-outline">{t('Scope Area')}</th>
                <th className="p-3 border-r-2 border-outline">{t('Key Activities')}</th>
                <th className="p-3 border-r-2 border-outline">{t('Primary Stakeholders')}</th>
                <th className="p-3">{t('Expected Output')}</th>
              </tr>
            </thead>
            <tbody>
              {scopeData.map((item, idx) => (
                <tr key={idx} className="border-b border-outline-variant text-sm font-medium hover:bg-surface-variant transition-colors">
                  <td className="p-3 border-r-2 border-outline font-bold text-primary">{t(item.area)}</td>
                  <td className="p-3 border-r-2 border-outline text-on-surface-variant text-xs">{t(item.activities)}</td>
                  <td className="p-3 border-r-2 border-outline text-on-surface-variant text-xs">{t(item.stakeholders)}</td>
                  <td className="p-3 text-on-surface-variant text-xs font-bold">{t(item.output)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Technology Architecture */}
      <section className="bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] flex flex-col overflow-hidden">
        <div className="bg-tertiary-container p-3 border-b-2 border-outline flex items-center gap-2">
          <Cpu size={20} className="text-on-tertiary-container" />
          <h2 className="font-headline font-bold text-lg uppercase text-on-tertiary-container">{t('Technology Architecture')}</h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b-2 border-outline text-xs uppercase font-bold text-on-surface">
                <th className="p-3 border-r-2 border-outline">{t('Component')}</th>
                <th className="p-3">{t('Suggested Technology')}</th>
              </tr>
            </thead>
            <tbody>
              {techData.map((item, idx) => (
                <tr key={idx} className="border-b border-outline-variant text-sm font-medium hover:bg-surface-variant transition-colors">
                  <td className="p-3 border-r-2 border-outline font-bold">{t(item.c)}</td>
                  <td className="p-3 text-primary font-bold">{t(item.t)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { icon: Users, title: 'Stakeholders', color: 'bg-secondary-container text-on-secondary-container' },
          { icon: GitMerge, title: 'Workflow', color: 'bg-primary-container text-on-primary-container' },
          { icon: ShieldCheck, title: 'Security/Integration', color: 'bg-surface-variant text-on-surface-variant' }
        ].map((sec, i) => (
          <div key={i} className="bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] p-4 flex items-center gap-3">
            <div className={`p-2 border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] ${sec.color}`}>
              <sec.icon size={24} />
            </div>
            <h3 className="font-headline font-bold text-lg uppercase flex-1">{t(sec.title)}</h3>
            <span className="text-xs font-bold text-on-surface-variant uppercase px-2 py-1 border border-outline bg-surface">Details Available</span>
          </div>
        ))}
      </div>
    </main>
  );
}
