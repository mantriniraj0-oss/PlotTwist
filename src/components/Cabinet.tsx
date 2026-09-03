import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lock, FileText, CheckCircle2, MoreHorizontal, Shield, Filter, Download, Eye, Plus } from 'lucide-react';

export function Cabinet({ isAdmin = false }: { isAdmin?: boolean }) {
  const { t } = useLanguage();

  const [memos, setMemos] = useState([
    { id: 'REF-9920', title: 'National Infrastructure Corridor Bill 2025', date: '24 Oct 2025', status: 'URGENT', statusColor: 'bg-secondary text-on-secondary', desc: 'Comprehensive policy framework adjusting right-of-way acquisition protocols for cross-state multi-modal transit corridors.' },
    { id: 'REF-8841', title: 'Special Land Acquisition Amendment', date: '19 Oct 2025', status: 'PENDING REVIEW', statusColor: 'bg-primary-fixed text-on-primary-fixed', desc: 'Fast-track provisions for emergency industrial zone expansions and environmental clearance waivers.' },
    { id: 'REF-7712', title: 'R&R Exemption Guidelines 2025', date: '12 Oct 2025', status: 'APPROVED', statusColor: 'bg-emerald-100 text-emerald-900', desc: 'Revised compensation multipliers and alternative livelihood provisions for displaced agrarian communities.' }
  ]);

  const handleUploadMemo = () => {
    if (!isAdmin) return;
    const newMemo = {
      id: `REF-${Math.floor(Math.random() * 9000 + 1000)}`,
      title: 'New Policy Directive',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'PENDING REVIEW',
      statusColor: 'bg-primary-fixed text-on-primary-fixed',
      desc: 'Newly drafted administrative memo requiring executive clearance.'
    };
    setMemos([newMemo, ...memos]);
  };

  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-secondary"></span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">{t('Cabinet Intelligence // Memorandums & Directives')}</span>
        </div>
        <h1 className="font-headline font-bold text-3xl uppercase tracking-tight text-primary">{t('Cabinet & Policy')}</h1>
        <p className="text-sm font-body text-on-surface-variant">{t('Secure repository for official governmental land acquisition policies, executive memorandums, and signed cabinet notes.')}</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface-container-lowest p-3 border-2 border-outline shadow-[3px_3px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">{t('Active Notes')}</span>
            <FileText className="text-tertiary" size={18} />
          </div>
          <div className="mt-2">
            <span className="font-headline font-bold text-2xl">12</span>
            <span className="text-[10px] text-on-surface-variant block uppercase">{t('In Circulation')}</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-3 border-2 border-outline shadow-[3px_3px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">{t('Cleared')}</span>
            <CheckCircle2 className="text-emerald-700" size={18} />
          </div>
          <div className="mt-2">
            <span className="font-headline font-bold text-2xl">42</span>
            <span className="text-[10px] text-on-surface-variant block uppercase">{t('GoM Approved')}</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-3 border-2 border-outline shadow-[3px_3px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">{t('Sign-off')}</span>
            <MoreHorizontal className="text-secondary" size={18} />
          </div>
          <div className="mt-2">
            <span className="font-headline font-bold text-2xl">3</span>
            <span className="text-[10px] text-on-surface-variant block uppercase">{t('Pending Review')}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-primary-container p-3 border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
        <div className="flex items-center gap-3">
          <Shield size={24} />
          <div>
            <h4 className="font-headline font-bold text-sm uppercase">{t('Secure Clearance Active')}</h4>
            <p className="text-xs font-body opacity-85">{t('Level-4 Authorized Session // PlotTwist Terminal #BG-88')}</p>
          </div>
        </div>
        <button className="bg-surface text-primary border-2 border-outline px-3 py-1.5 font-label text-xs uppercase font-bold shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">{t('Verify')}</button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg uppercase tracking-wide">{t('Directives & Memos')}</h3>
          <div className="flex gap-1">
            {isAdmin && (
              <button onClick={handleUploadMemo} className="bg-primary text-on-primary border-2 border-outline p-1 hover:bg-primary-container hover:text-on-primary-container active:translate-y-px transition-all" title={t('Upload Memo')}>
                <Plus size={16} />
              </button>
            )}
            <button className="bg-surface-container-lowest border-2 border-outline px-2 py-1 font-label text-[10px] uppercase font-bold shadow-[2px_2px_0px_#1a1a1a]">{t('Filter')}</button>
            <button className="bg-surface-container-lowest border-2 border-outline px-2 py-1 font-label text-[10px] uppercase font-bold shadow-[2px_2px_0px_#1a1a1a]">{t('Export')}</button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {memos.map(memo => (
            <div key={memo.id} className="bg-surface-container-lowest border-2 border-outline p-4 shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-3 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className={`font-label text-[10px] uppercase ${memo.statusColor} px-1.5 py-0.5 font-bold w-max mb-1 border border-outline`}>{t(memo.status)}</span>
                  <h4 className="font-headline font-bold text-base leading-tight">{t(memo.title)}</h4>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant">{memo.id}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">{memo.desc}</p>
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant">
                <span className="font-label text-[10px] text-on-surface-variant uppercase">Issued: {memo.date}</span>
                <div className="flex gap-2">
                  <button className="bg-surface-container-lowest border-2 border-outline px-2.5 py-1 font-label text-xs uppercase font-bold shadow-[2px_2px_0px_#1a1a1a] flex items-center gap-1 hover:bg-surface transition-colors">
                    <Eye size={14} /> {t('Inspect')}
                  </button>
                  <button className="bg-primary-container border-2 border-outline px-2.5 py-1 font-label text-xs uppercase font-bold shadow-[2px_2px_0px_#1a1a1a] flex items-center gap-1 hover:bg-primary hover:text-on-primary transition-colors">
                    <Download size={14} /> {t('PDF')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
