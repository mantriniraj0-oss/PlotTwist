import React from 'react';
import { Search, ArrowRight, Route, Wallet, Users, Map, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Overview() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-32 pb-24 px-5 flex flex-col gap-6 relative z-10">
      {/* Hero Header */}
      <section className="text-center flex flex-col items-center pt-2">
        <div className="relative mb-3.5">
          <div className="w-20 h-20 p-1 bg-primary border-2 border-outline shadow-[4px_4px_0px_#1a1a1a]">
            <div className="w-full h-full overflow-hidden bg-surface-container-lowest flex items-center justify-center">
              <img alt="Seal" className="w-full h-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpuc5dHzynRkGMBDHIlw1RUFThJUPlabvYBR0c_WSPgUe3-pcoQW1GEze_D4Yvpc6mXgwtpzLTGQO1ekSo09D955TBSAeZMBjzE6PMOxVqKlyp0OdWSQqqH6vv77oz7QfCqAl10sSgbTA3fDOrOWJX8kI16aHJjjCHxLgyvxS5JHDYhpPFX_Jdd4FU4Se60Rsh0VaBE6dJNxgMxFW10TBr6prFjI0fceUKc4Fot_XwJHCcRsZBEGdNfoQT8skGRBOBSA" />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] mb-3">
          <span className="w-2 h-2 bg-emerald-600 border border-outline animate-pulse"></span>
          <span className="text-[11px] font-bold text-on-surface font-headline uppercase">{t('National Cadastral Sync Active')}</span>
          <span className="text-outline text-[10px]">•</span>
          <span className="text-[11px] font-bold text-secondary font-headline">2025-26</span>
        </div>
        <h1 className="font-headline text-2xl font-bold text-primary tracking-tight leading-tight uppercase border-b-4 border-primary pb-1">
          {t('Cabinet Executive Overview')}
        </h1>
        <p className="font-sans text-[13px] text-on-surface-variant mt-2 max-w-xs font-medium leading-relaxed">
          {t('Unified Decision Support & Cadastral Monitoring per RFCTLARR statutory framework.')}
        </p>
      </section>

      {/* Search */}
      <section>
        <form className="relative" onSubmit={e => e.preventDefault()}>
          <div className="relative flex items-center bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] p-1.5 pl-3.5">
            <Search className="text-outline mr-2" size={19} />
            <input className="w-full bg-transparent text-[13px] text-on-surface placeholder:text-outline font-medium focus:outline-none py-1" placeholder={t('Verify Khasra, Survey No. or Award ID...')} type="text" />
            <button className="h-9 px-4 bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container text-[12px] font-bold font-headline tracking-wide flex items-center gap-1.5 transition-all border-2 border-outline flex-shrink-0">
              <span>{t('Verify')}</span>
              <ArrowRight size={14} strokeWidth={3} />
            </button>
          </div>
        </form>
      </section>

      {/* Metrics */}
      <section className="flex flex-col gap-4">
        <div className="relative p-5 bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a]">
          <div className="flex items-start justify-between mb-4 border-b-2 border-outline pb-2">
            <div>
              <span className="text-[10px] font-bold font-headline tracking-wider uppercase bg-secondary text-on-secondary px-1.5 py-0.5 border border-outline">{t('Physical Clearance')}</span>
              <h2 className="font-headline font-bold text-lg text-primary leading-tight mt-1">{t('Total Land Acquired')}</h2>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 bg-primary-container text-on-primary-container border-2 border-outline font-headline">
              {t('Sec. 11 Awarded')}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center border-2 border-outline bg-surface-container">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="41" stroke="#e8e3da" strokeWidth="8"></circle>
                <circle cx="50" cy="50" fill="none" r="41" stroke="#1a1a1a" strokeDasharray="257.6" strokeDashoffset="61.8" strokeLinecap="butt" strokeWidth="8"></circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center leading-none">
                <span className="font-headline font-bold text-xl text-primary">76.0%</span>
                <span className="text-[9px] font-bold font-headline tracking-wider text-on-surface uppercase mt-0.5">{t('Cleared')}</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <div>
                <div className="text-[11px] font-bold text-on-surface-variant uppercase">{t('Possessed & Handed Over')}</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-xl font-bold text-primary">1.08M</span>
                  <span className="text-[11px] text-outline font-bold">{t('Hectares')}</span>
                </div>
              </div>
              <div className="h-0.5 bg-outline w-full"></div>
              <div>
                <div className="text-[10px] text-outline uppercase font-bold">{t('Total Proposed Footprint')}</div>
                <div className="text-[12px] font-bold text-on-surface font-headline">1.42M Ha <span className="text-outline font-normal">{t('across corridors')}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 bg-surface-container-lowest border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] flex flex-col justify-between">
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-[10px] font-bold font-headline uppercase tracking-wider">{t('Corridors')}</span>
              <Route className="text-primary" size={15} />
            </div>
            <div>
              <div className="font-headline text-lg font-bold text-primary leading-tight">4,820</div>
              <div className="text-[10px] text-error font-bold mt-0.5 flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 bg-error border border-outline inline-block"></span>
                <span>148 {t('Delayed')}</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-surface-container-lowest border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] flex flex-col justify-between">
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-[10px] font-bold font-headline uppercase tracking-wider">{t('Disbursed')}</span>
              <Wallet className="text-primary" size={15} />
            </div>
            <div>
              <div className="font-headline text-base font-bold text-primary leading-tight">₹1.42L <span className="text-[10px] font-sans font-bold">Cr</span></div>
              <div className="text-[9px] text-secondary font-bold mt-0.5 uppercase">
                77.4% {t('Disbursed')}
              </div>
            </div>
          </div>
          <div className="p-3 bg-surface-container-lowest border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] flex flex-col justify-between">
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-[10px] font-bold font-headline uppercase tracking-wider">{t('Families')}</span>
              <Users className="text-primary" size={15} />
            </div>
            <div>
              <div className="font-headline text-lg font-bold text-primary leading-tight">312K</div>
              <div className="text-[10px] text-on-surface-variant font-bold mt-0.5">
                86K {t('Resettled')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section>
        <div className="p-4 bg-surface-container-lowest border-2 border-outline shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center flex-shrink-0 border-2 border-outline shadow-[2px_2px_0px_#1a1a1a]">
              <Map size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="font-headline text-[13px] font-bold text-primary truncate leading-tight uppercase">{t('Vadodara-Mumbai Corridor #08')}</h3>
              <p className="text-[11px] text-on-surface-variant truncate mt-0.5 font-semibold">{t('Package 4B • 94% Clearance verified')}</p>
            </div>
          </div>
          <button className="px-3.5 py-1.5 bg-primary-container text-on-primary-container text-[11px] font-bold font-headline hover:bg-primary hover:text-on-primary border-2 border-outline whitespace-nowrap flex-shrink-0 transition-colors shadow-[2px_2px_0px_#1a1a1a]">
            {t('View Map')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-2 pb-1 text-on-surface-variant">
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-surface-container-lowest border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] text-[11px] font-bold text-primary font-headline">
          <ShieldCheck className="text-secondary" size={14} strokeWidth={3} />
          <span>{t('Audited per RFCTLARR Act 2013')}</span>
        </div>
        <p className="text-[10px] text-outline mt-2 font-semibold uppercase tracking-wider">{t('National Land Records Modernization • Govt of India')}</p>
      </footer>
    </main>
  );
}
