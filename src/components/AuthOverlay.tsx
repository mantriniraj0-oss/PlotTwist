import React, { useState } from 'react';
import { Key, ShieldAlert, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AuthOverlay({ onAuth }: { onAuth: (role: 'admin' | 'guest') => void }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  const handleManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === 'PlotTwist' && pwd === 'PlotTwist2026') {
      onAuth('admin');
    } else {
      setErr(t('Invalid Credentials'));
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center p-6">
      <div className="absolute top-6 right-6">
        <button aria-label="Toggle language" onClick={toggleLanguage} className="h-8 px-2 bg-surface-container border-2 border-outline text-[11px] font-bold text-on-surface hover:bg-primary-container transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#1a1a1a]">
          <span className={language === 'en' ? 'text-primary' : ''}>EN</span><span className="text-outline text-[10px] mx-1">|</span><span className={language === 'hi' ? 'text-primary' : ''}>हिं</span>
        </button>
      </div>
      
      <div className="w-full max-w-sm bg-surface-container-lowest border-4 border-outline shadow-[8px_8px_0px_#1a1a1a] p-6 flex flex-col gap-6">
        <div className="text-center border-b-2 border-outline pb-4">
          <ShieldAlert className="mx-auto text-error mb-2" size={48} strokeWidth={1.5} />
          <h1 className="font-headline font-bold text-xl uppercase tracking-tight text-primary">{t('Authentication Required')}</h1>
          <p className="text-xs font-semibold text-on-surface-variant mt-1">{t('Level-4 Authorized Session')}</p>
        </div>

        <form onSubmit={handleManual} className="flex flex-col gap-3 py-2">
          <div>
            <label className="block text-[10px] font-bold uppercase mb-1">{t('Username')}</label>
            <input type="text" value={id} onChange={e => setId(e.target.value)} className="w-full bg-surface border-2 border-outline px-3 py-2 text-sm font-medium focus:outline-none focus:border-primary shadow-[2px_2px_0px_#1a1a1a]" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase mb-1">{t('Password')}</label>
            <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} className="w-full bg-surface border-2 border-outline px-3 py-2 text-sm font-medium focus:outline-none focus:border-primary shadow-[2px_2px_0px_#1a1a1a]" />
          </div>
          {err && <div className="text-xs font-bold text-error bg-error/10 border border-error p-2 mt-1">{err}</div>}
          <button type="submit" className="mt-2 w-full h-10 bg-primary text-on-primary font-bold font-headline uppercase text-xs border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] hover:bg-primary-container hover:text-on-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2">
            <Key size={16} /> {t('Login')}
          </button>
        </form>

        <div className="border-t-2 border-outline pt-4 flex flex-col gap-3">
          <button 
            onClick={() => onAuth('guest')}
            className="w-full h-10 bg-surface-container text-on-surface font-bold font-headline uppercase text-[10px] border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] hover:bg-surface-variant active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Eye size={16} /> {t('Public Access (View Only)')}
          </button>
        </div>
      </div>
    </div>
  );
}
