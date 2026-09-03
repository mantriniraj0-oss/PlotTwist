import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, AlertOctagon, Zap, Download } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export function GeoMap() {
  const { t } = useLanguage();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  return (
    <main className="flex-1 w-full max-w-md mx-auto pt-20 pb-24 px-4 flex flex-col gap-6 relative z-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label text-xs uppercase bg-primary text-on-primary px-2 py-0.5 font-bold tracking-wider">{t('Spatial Intelligence // Sector 04')}</span>
          <div className="flex items-center gap-1.5 bg-secondary-container px-2 py-0.5 border-2 border-outline">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label text-[10px] uppercase font-bold text-on-secondary-container">{t('DGPS Live Feed')}</span>
          </div>
        </div>
        <h1 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-primary">{t('Cadastral & Polygon Matrix')}</h1>
        <p className="text-sm font-body text-on-surface-variant">{t('Real-time vector boundary overlays, statutory stay tracking, and high-precision survey nodes.')}</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col p-3 bg-primary-container border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-primary-container font-bold">{t('Acquired')}</span>
          <span className="font-headline text-2xl font-black text-on-primary-container mt-1">1,420.5</span>
          <span className="font-label text-[10px] text-on-primary-container/80 uppercase">{t('Hectares')}</span>
        </div>
        <div className="flex flex-col p-3 bg-secondary-container border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-secondary-container font-bold">{t('Pending')}</span>
          <span className="font-headline text-2xl font-black text-on-secondary-container mt-1">384.2</span>
          <span className="font-label text-[10px] text-on-secondary-container/80 uppercase">{t('Hectares')}</span>
        </div>
        <div className="flex flex-col p-3 bg-surface-container-lowest border-2 border-outline shadow-[3px_3px_0px_#1a1a1a]">
          <span className="font-label text-[10px] uppercase tracking-wider text-on-surface font-bold">{t('Hotspots')}</span>
          <span className="font-headline text-2xl font-black text-secondary mt-1">14</span>
          <span className="font-label text-[10px] text-on-surface-variant uppercase">{t('Critical Zones')}</span>
        </div>
      </div>

      <div className="flex flex-col border-2 border-outline bg-surface-container-lowest shadow-[4px_4px_0px_#1a1a1a] overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 bg-surface-container border-b-2 border-outline">
          <div className="flex items-center gap-2">
            <AlertOctagon size={20} className="text-primary" />
            <span className="font-headline text-sm font-bold uppercase">{t('Cadastral Vector Map')}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-primary text-on-primary">{t('DGPS')}</button>
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-surface text-on-surface">{t('Stays')}</button>
            <button className="px-2 py-1 text-[10px] font-label font-bold uppercase border-2 border-outline bg-surface text-on-surface">{t('Velocity')}</button>
          </div>
        </div>
        
        <div className="relative w-full h-72 border-b-2 border-outline overflow-hidden bg-[#e5e3df]">
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                mapId="DEMO_MAP_ID"
                defaultCenter={{ lat: 28.6139, lng: 77.2090 }}
                defaultZoom={12}
                gestureHandling="greedy"
                disableDefaultUI={true}
                internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
              >
                <AdvancedMarker position={{ lat: 28.6139, lng: 77.2090 }}>
                  <div className="bg-secondary text-on-secondary border-2 border-outline px-2 py-1 shadow-[2px_2px_0px_#1a1a1a]">
                    <span className="font-label text-[10px] font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-on-secondary animate-pulse"></span>
                      {t('High Risk')}
                    </span>
                  </div>
                </AdvancedMarker>
                <AdvancedMarker position={{ lat: 28.6250, lng: 77.2150 }}>
                  <div className="bg-tertiary text-on-tertiary border-2 border-outline px-2 py-1 shadow-[2px_2px_0px_#1a1a1a]">
                    <span className="font-label text-[10px] font-bold uppercase flex items-center gap-1">
                      {t('Medium Risk')}
                    </span>
                  </div>
                </AdvancedMarker>
              </Map>
            </APIProvider>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <AlertTriangle size={32} className="text-secondary mb-3" />
              <p className="font-headline font-bold uppercase text-sm mb-1">{t('Maps API Key Required')}</p>
              <p className="font-label text-xs text-on-surface-variant max-w-[250px]">
                {t('Please provide the VITE_GOOGLE_MAPS_API_KEY environment variable to view the Cadastral Vector Map.')}
              </p>
            </div>
          )}
          
          <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end pointer-events-none">
            <div className="flex gap-1 bg-surface border-2 border-outline p-1 shadow-[2px_2px_0px_#1a1a1a] pointer-events-auto">
              <button className="w-6 h-6 flex items-center justify-center font-bold border border-outline bg-surface-container hover:bg-primary-container text-xs">{t('+')}</button>
              <button className="w-6 h-6 flex items-center justify-center font-bold border border-outline bg-surface-container hover:bg-primary-container text-xs">-</button>
            </div>
            <div className="bg-surface border-2 border-outline px-2 py-1 font-label text-[10px] font-bold uppercase shadow-[2px_2px_0px_#1a1a1a]">
              {t('Active Overlay: Cadastral Mesh v4.2')}
            </div>
          </div>
        </div>
        <div className="p-3 bg-surface flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon className="text-secondary" size={18} />
            <span className="font-label text-xs uppercase font-bold">{t('Polygon Boundary Sync: 98.4% Verified')}</span>
          </div>
          <button className="px-3 py-1.5 bg-primary text-on-primary font-label text-xs uppercase font-bold border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">{t('Export GeoJSON')}</button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-lg font-bold uppercase tracking-tight">{t('Priority Hotspots & Stays')}</h2>
          <span className="font-label text-xs text-on-surface-variant font-bold">{t('Showing 3 of 14')}</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {[
            { id: '104', title: t('Sec 5A Dispute — Parcel #104'), loc: t('Northern Peripheral Expressway Corridor'), status: t('Stay Active'), statusColor: 'bg-secondary-container text-on-secondary-container', area: t('42.5 Ha'), icon: AlertTriangle },
            { id: '7C', title: t('Forest Block 7C Clearance'), loc: t('Southern Ecologically Sensitive Zone'), status: t('Velocity: Low'), statusColor: 'bg-tertiary-container text-on-tertiary-container', area: t('118.0 Ha'), icon: AlertTriangle },
            { id: '312', title: t('Title Dispute — Plot #312'), loc: t('Eastern Industrial Expansion Pocket'), status: t('Litigation'), statusColor: 'bg-secondary-container text-on-secondary-container', area: t('19.3 Ha'), icon: AlertTriangle }
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
                  <span className="font-label text-[11px] text-on-surface-variant">{t('Area:')} <strong className="text-on-surface">{hotspot.area}</strong></span>
                  <button className="px-2.5 py-1 bg-surface border border-outline font-label text-[10px] font-bold uppercase hover:bg-primary hover:text-on-primary transition-all">{t('Inspect Node')}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
