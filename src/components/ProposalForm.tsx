import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Send, Save, CheckCircle } from 'lucide-react';

export function ProposalForm({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);

  const workflowStages = [
    'Save Draft', 'Submit', 'Digital/AI Scrutiny', 
    'District Verification', 'State/Central Approval', 'Tracking'
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-surface flex flex-col pt-10 px-4 pb-20 overflow-y-auto">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 relative">
        <button onClick={onClose} className="absolute -top-6 right-0 text-on-surface hover:text-error transition-colors">
          <X size={24} />
        </button>

        <div className="bg-primary-container p-4 border-2 border-outline shadow-[4px_4px_0px_#1a1a1a]">
          <h1 className="font-headline font-bold text-2xl uppercase">{t('Proposal Submission')}</h1>
          <p className="text-sm font-semibold mt-1 opacity-80">{t('National Land Acquisition & Management System')}</p>
        </div>

        <div className="bg-surface-container-lowest p-4 border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Project Name & Description')}</label>
              <textarea className="border-2 border-outline p-2 bg-surface focus:outline-none" rows={3}></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase">{t('Sponsoring Ministry/Department')}</label>
                <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase">{t('Project Implementing Agency')}</label>
                <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('State, District, Taluka and Villages')}</label>
              <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Project Location/GIS Coordinates')}</label>
              <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Total Land Required')}</label>
              <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Government/Private Land')}</label>
              <select className="border-2 border-outline p-2 bg-surface focus:outline-none h-10">
                <option>Government</option>
                <option>Private</option>
                <option>Mixed</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Number of Parcels')}</label>
              <input type="number" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Affected & Displaced Families')}</label>
              <input type="number" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Estimated Compensation')}</label>
              <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Proposed Timeline')}</label>
              <input type="date" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Applicable Legal Framework')}</label>
              <input type="text" className="border-2 border-outline p-2 bg-surface focus:outline-none h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase">{t('Supporting Documents')}</label>
              <input type="file" className="border-2 border-outline p-1.5 bg-surface focus:outline-none h-10 text-xs" multiple />
            </div>
            <div className="md:col-span-2 flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1 w-4 h-4 border-2 border-outline" />
              <label className="text-xs font-bold leading-tight">{t('Declaration & Authorization')}</label>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-4 border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-3">
          <h3 className="font-headline font-bold uppercase text-sm border-b-2 border-outline pb-2">{t('Workflow Tracker')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {workflowStages.map((stage, i) => (
              <div key={i} className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 border-2 border-outline font-bold text-[10px] uppercase ${i === step ? 'bg-primary text-on-primary shadow-[2px_2px_0px_#1a1a1a]' : i < step ? 'bg-tertiary text-on-tertiary' : 'bg-surface-variant text-on-surface-variant'}`}>
                {i < step && <CheckCircle size={12} />} {t(stage)}
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-end mt-2">
            <button onClick={() => setStep(0)} className="px-4 py-2 border-2 border-outline font-bold uppercase text-xs hover:bg-surface-variant transition-colors flex items-center gap-1">
              <Save size={16} /> {t('Save Draft')}
            </button>
            <button onClick={() => setStep(2)} className="px-4 py-2 bg-primary text-on-primary border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] font-bold uppercase text-xs hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-1 active:translate-y-px">
              <Send size={16} /> {t('Submit Proposal')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
