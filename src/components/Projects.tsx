import React from 'react';
import { Route, CheckCircle2, AlertCircle, Circle, Zap, Info } from 'lucide-react';

export function Projects() {
  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-headline text-xs uppercase tracking-wider bg-primary text-on-primary px-2 py-1 font-bold">Portfolio Control Center</span>
          <span className="font-mono text-xs font-bold text-secondary flex items-center gap-1">
            <span className="w-2 h-2 bg-secondary animate-pulse rounded-full"></span> LIVE FEED
          </span>
        </div>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight uppercase leading-none text-primary">
          Active Corridors & Projects
        </h1>
        <p className="font-body text-sm text-on-surface-variant">
          Monitoring statutory land acquisition milestones, clearance velocity, and critical construction bottlenecks across national infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface-container-lowest border-2 border-outline p-3 shadow-[4px_4px_0px_#1a1a1a] flex flex-col justify-between">
          <span className="font-label text-[10px] uppercase text-on-surface-variant font-bold">Active Length</span>
          <span className="font-headline text-2xl font-extrabold text-primary mt-1">4,280 KM</span>
          <span className="text-[10px] text-tertiary font-bold mt-1">↑ 12% Q3 Target</span>
        </div>
        <div className="bg-primary-container border-2 border-outline p-3 shadow-[4px_4px_0px_#1a1a1a] flex flex-col justify-between">
          <span className="font-label text-[10px] uppercase text-on-primary-container font-bold">Clearance</span>
          <span className="font-headline text-2xl font-extrabold text-on-primary-container mt-1">78.4%</span>
          <span className="text-[10px] text-on-primary-container font-bold mt-1">Physical Avg</span>
        </div>
        <div className="bg-secondary-container border-2 border-outline p-3 shadow-[4px_4px_0px_#1a1a1a] flex flex-col justify-between">
          <span className="font-label text-[10px] uppercase text-on-secondary-container font-bold">Bottlenecks</span>
          <span className="font-headline text-2xl font-extrabold text-secondary mt-1">14</span>
          <span className="text-[10px] text-secondary font-bold mt-1">Requires Action</span>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button className="px-4 py-2 bg-primary text-on-primary font-headline text-xs font-bold uppercase border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] whitespace-nowrap">
          All Corridors (24)
        </button>
        <button className="px-4 py-2 bg-surface-container-lowest text-on-surface font-headline text-xs font-bold uppercase border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] whitespace-nowrap">
          Expressways (8)
        </button>
        <button className="px-4 py-2 bg-surface-container-lowest text-on-surface font-headline text-xs font-bold uppercase border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] whitespace-nowrap">
          Freight Corridors (6)
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { id: '4B', tag: 'PKG-4B', tagColor: 'bg-tertiary-container text-on-tertiary-container', title: 'Vadodara-Mumbai Expressway', status: 'Critical Delay', statusColor: 'bg-secondary text-on-secondary animate-pulse', progress: 84.5, sec3A: 'done', sec3D: 'done', sec11: 'pending', sec19: 'none', alertIcon: AlertCircle, alertText: 'Forest Clearance Pending (Km 142)', alertColor: 'text-secondary' },
          { id: '09', tag: 'PKG-DFC-09', tagColor: 'bg-primary-fixed text-on-primary-fixed', title: 'Eastern Dedicated Freight Corridor', status: 'On Track', statusColor: 'bg-surface-container text-on-surface', progress: 92.0, sec3A: 'done', sec3D: 'done', sec11: 'done', sec19: 'pending', alertIcon: Info, alertText: 'ROB Girder Launching in progress', alertColor: 'text-tertiary' }
        ].map(proj => (
          <div key={proj.id} className="bg-surface-container-lowest border-2 border-outline p-4 shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <span className={`${proj.tagColor} text-[10px] font-headline font-bold uppercase px-2 py-0.5 border border-outline`}>{proj.tag}</span>
                <h3 className="font-headline text-xl font-bold uppercase text-primary mt-1">{proj.title}</h3>
              </div>
              <span className={`${proj.statusColor} font-headline text-[10px] font-bold px-2 py-1 uppercase border border-outline`}>{proj.status}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs font-headline font-bold">
                <span>Physical Clearance</span>
                <span>{proj.progress}%</span>
              </div>
              <div className="w-full h-3 bg-surface-container border-2 border-outline p-0.5">
                <div className="h-full bg-primary" style={{ width: `${proj.progress}%` }}></div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1 mt-1 text-center">
              {[
                { label: 'Sec 3A', status: proj.sec3A },
                { label: 'Sec 3D', status: proj.sec3D },
                { label: 'Sec 11', status: proj.sec11 },
                { label: 'Sec 19', status: proj.sec19 }
              ].map(sec => (
                <div key={sec.label} className="bg-surface-container p-1.5 border border-outline flex flex-col items-center">
                  <span className="text-[9px] uppercase font-headline font-bold text-on-surface-variant">{sec.label}</span>
                  {sec.status === 'done' && <CheckCircle2 size={16} className="text-tertiary mt-0.5" />}
                  {sec.status === 'pending' && <Circle size={16} className="text-secondary mt-0.5" />}
                  {sec.status === 'none' && <Circle size={16} className="text-on-surface-variant mt-0.5" />}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t-2 border-outline-variant mt-1">
              <div className={`flex items-center gap-1.5 text-xs font-bold ${proj.alertColor}`}>
                <proj.alertIcon size={16} />
                <span>{proj.alertText}</span>
              </div>
              <button className={`${proj.status === 'Critical Delay' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface text-on-surface'} font-headline text-xs font-bold uppercase px-3 py-1.5 border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1`}>
                <Zap size={14} /> Expedite
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
