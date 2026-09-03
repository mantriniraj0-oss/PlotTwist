import React from 'react';
import { FileBarChart2, FileText, Download } from 'lucide-react';

export function Reports() {
  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label text-xs uppercase bg-primary text-on-primary px-2 py-0.5 font-bold tracking-wider">Financial & Statutory Intelligence</span>
          <span className="font-label text-xs font-bold text-on-surface-variant">FY 2024-25 Q3</span>
        </div>
        <h1 className="font-headline font-bold text-4xl uppercase tracking-tight text-on-surface leading-none">
          PlotTwist Portal
        </h1>
        <p className="font-body text-sm text-on-surface-variant font-medium">
          Master audit ledger, escrow liquidity, statutory milestones, and state-wise acquisition velocity indices.
        </p>
      </div>

      <div className="bg-surface-container-lowest border-2 border-outline p-4 shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-4">
        <div className="flex items-center justify-between border-b-2 border-outline pb-2">
          <div className="flex items-center gap-2">
            <FileBarChart2 className="text-primary" size={24} />
            <h2 className="font-headline font-bold text-lg uppercase tracking-tight">R&R Statutory Milestones</h2>
          </div>
          <span className="font-label text-xs bg-primary-container px-2 py-0.5 font-bold border border-outline">Active</span>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { label: 'HOUSING REHABILITATION (8,420 Units)', progress: 84, color: 'bg-primary-container' },
            { label: 'SKILL TRAINING & STIPEND (12,150 Beneficiaries)', progress: 92, color: 'bg-tertiary-container border-r-2 border-outline' },
            { label: 'ANNUITY & SUSTENANCE PENSION (5-Yr Lock)', progress: 68, color: 'bg-secondary-container border-r-2 border-outline' }
          ].map(mile => (
            <div key={mile.label} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs font-bold font-label">
                <span>{mile.label}</span>
                <span>{mile.progress}%</span>
              </div>
              <div className="w-full h-4 bg-surface-container border-2 border-outline overflow-hidden relative">
                <div className={`h-full absolute left-0 top-0 ${mile.color}`} style={{ width: `${mile.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-surface-container p-3 border-2 border-outline text-xs font-medium flex items-center justify-between mt-2">
          <span>Next statutory audit deadline: <strong>31 Mar 2025</strong></span>
          <button className="bg-primary text-on-primary px-3 py-1 font-headline uppercase font-bold text-xs border-2 border-outline">Verify</button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border-2 border-outline p-4 shadow-[4px_4px_0px_#1a1a1a] flex flex-col gap-4">
        <div className="flex items-center justify-between border-b-2 border-outline pb-2">
          <div className="flex items-center gap-2">
            <FileText className="text-primary" size={24} />
            <h2 className="font-headline font-bold text-lg uppercase tracking-tight">Gazette & Dispatches</h2>
          </div>
          <span className="font-label text-xs uppercase font-bold text-tertiary">PDF Vault</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { title: 'Official Gazette Notification #849-B', date: 'Published 14 Feb 2025 • 4.2 MB' },
            { title: 'Grievance Redressal Quarterly Summary', date: 'Published 01 Feb 2025 • 2.8 MB' }
          ].map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-surface-bright border-2 border-outline hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <FileText className="text-secondary" size={28} />
                <div>
                  <div className="font-headline font-bold text-sm">{file.title}</div>
                  <div className="text-[11px] text-on-surface-variant">{file.date}</div>
                </div>
              </div>
              <button className="w-9 h-9 bg-primary text-on-primary flex items-center justify-center border-2 border-outline shadow-[2px_2px_0px_#1a1a1a]">
                <Download size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
