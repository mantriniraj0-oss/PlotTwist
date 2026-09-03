import React from 'react';
import { Map, AlertTriangle, AlertOctagon, Zap, Download } from 'lucide-react';

export function GeoMap() {
  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label text-xs uppercase bg-primary text-on-primary px-2 py-0.5 font-bold tracking-wider">Spatial Intelligence // Sector 04</span>
          <div className="flex items-center gap-1.5 bg-secondary-container px-2 py-0.5 border-2 border-outline">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label text-[10px] uppercase font-bold text-on-secondary-container">DGPS Live Feed</span>
          </div>
        </div>
        <h1 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-primary">Cadastral & Polygon Matrix</h1>
        <p className="text-sm font-body text-on-surface-variant">Real-time vector boundary overlays, statutory stay tracking, and high-precision survey nodes.</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col p-3 bg-primary-container border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-primary-container font-bold">Acquired</span>
          <span className="font-headline text-2xl font-black text-on-primary-container mt-1">1,420.5</span>
          <span className="font-label text-[10px] text-on-primary-container/80 uppercase">Hectares</span>
        </div>
        <div className="flex flex-col p-3 bg-secondary-container border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-secondary-container font-bold">Pending</span>
          <span className="font-headline text-2xl font-black text-on-secondary-container mt-1">384.2</span>
          <span className="font-label text-[10px] text-on-secondary-container/80 uppercase">Hectares</span>
        </div>
        <div className="flex flex-col p-3 bg-surface-container-lowest border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-surface font-bold">Hotspots</span>
          <span className="font-headline text-2xl font-black text-secondary mt-1">14</span>
          <span className="font-label text-[10px] text-on-surface-variant uppercase">Critical Zones</span>
        </div>
      </div>

      <div className="flex flex-col border-2 border-outline bg-surface-container-lowest shadow-[4px_4px_0px_#1a1a1a] overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 bg-surface-container border-b-2 border-outline">
          <div className="flex items-center gap-2">
            <Map size={20} />
            <span className="font-headline text-sm font-bold uppercase">Cadastral Vector Map</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-primary text-on-primary">DGPS</button>
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-surface text-on-surface">Stays</button>
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-surface text-on-surface">Velocity</button>
          </div>
        </div>
        <div className="relative w-full h-72 bg-cover bg-center border-b-2 border-outline overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBluaSKAvPezvpZTMTNtMRAxRjHO3_P5AnK3-xnw91YnXe3SttbKcI8yhoWdyWH-5TAO8AkI4Xx9CRHaPZa_M06R_ZQ-EzF5q8Rx_qCeRrp-fJfy4RWhJooPbMfsecmcVP3Mhojj6pg3jjgjOQG84ou5v0uGZurcPPus8uwfupsgMxpF96IEfMEULulKUlMuM4fTO-Sn4GV_VBHU42WaUkCIVF2qdNtcAHL2iD826apwPkx_7iVphvl")' }}>
          <div className="absolute inset-0 bg-[#f5f0e8]/40 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="bg-surface border-2 border-outline px-2 py-1 shadow-[2px_2px_0px_#1a1a1a]">
                <span className="font-label text-[10px] font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Lat: 28.6139° N, Lon: 77.2090° E
                </span>
              </div>
              <div className="bg-primary text-on-primary border-2 border-outline px-2 py-1 font-label text-[10px] font-bold uppercase shadow-[2px_2px_0px_#1a1a1a]">
                Scale 1:5000
              </div>
            </div>
            
            <div className="absolute top-1/3 left-1/4 w-24 h-16 border-2 border-secondary bg-secondary/20 flex items-center justify-center pointer-events-auto">
              <span className="font-label text-[9px] font-bold text-secondary bg-surface px-1 border border-outline">High risk</span>
            </div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-tertiary bg-tertiary/20 flex items-center justify-center pointer-events-auto">
              <span className="font-label text-[9px] font-bold text-tertiary bg-surface px-1 border border-outline">Medium risk</span>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex gap-1 bg-surface border-2 border-outline p-1 shadow-[2px_2px_0px_#1a1a1a] pointer-events-auto">
                <button className="w-6 h-6 flex items-center justify-center font-bold border border-outline bg-surface-container hover:bg-primary-container">+</button>
                <button className="w-6 h-6 flex items-center justify-center font-bold border border-outline bg-surface-container hover:bg-primary-container">-</button>
              </div>
              <div className="bg-surface border-2 border-outline px-2 py-1 font-label text-[10px] font-bold uppercase shadow-[2px_2px_0px_#1a1a1a]">
                Active Overlay: Cadastral Mesh v4.2
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-surface flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon className="text-secondary" size={18} />
            <span className="font-label text-xs uppercase font-bold">Polygon Boundary Sync: 98.4% Verified</span>
          </div>
          <button className="px-3 py-1.5 bg-primary text-on-primary font-label text-xs uppercase font-bold border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">Export GeoJSON</button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-lg font-bold uppercase tracking-tight">Priority Hotspots & Stays</h2>
          <span className="font-label text-xs text-on-surface-variant font-bold">Showing 3 of 14</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {[
            { id: '104', title: 'Sec 5A Dispute — Parcel #104', loc: 'Northern Peripheral Expressway Corridor', status: 'Stay Active', statusColor: 'bg-secondary-container text-on-secondary-container', area: '42.5 Ha', icon: AlertTriangle },
            { id: '7C', title: 'Forest Block 7C Clearance', loc: 'Southern Ecologically Sensitive Zone', status: 'Velocity: Low', statusColor: 'bg-tertiary-container text-on-tertiary-container', area: '118.0 Ha', icon: AlertTriangle },
            { id: '312', title: 'Title Dispute — Plot #312', loc: 'Eastern Industrial Expansion Pocket', status: 'Litigation', statusColor: 'bg-secondary-container text-on-secondary-container', area: '19.3 Ha', icon: AlertTriangle }
          ].map(hotspot => {
            const Icon = hotspot.icon;
            return (
              <div key={hotspot.id} className="flex flex-col p-3 bg-surface-container-lowest border-2 border-outline shadow-[3px_3px_0px_#1a1a1a] gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="text-secondary" size={20} />
                    <div>
                      <h3 className="font-headline text-sm font-bold uppercase">{hotspot.title}</h3>
                      <p className="text-xs text-on-surface-variant">{hotspot.loc}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 ${hotspot.statusColor} font-label text-[10px] font-bold uppercase border border-outline`}>{hotspot.status}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-outline/20">
                  <span className="font-label text-[11px] text-on-surface-variant">Area: <strong className="text-on-surface">{hotspot.area}</strong></span>
                  <button className="px-2.5 py-1 bg-surface border border-outline font-label text-[10px] font-bold uppercase hover:bg-primary hover:text-on-primary transition-all">Inspect Node</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
