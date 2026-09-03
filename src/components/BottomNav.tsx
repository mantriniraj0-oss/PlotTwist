import React from 'react';
import { LayoutDashboard, Map, Building2, BarChart2, FolderOpen } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'geo-map', label: 'Geo Map', icon: Map },
  { id: 'projects', label: 'Projects', icon: Building2 },
  { id: 'reports', label: 'Reports', icon: BarChart2 },
  { id: 'cabinet', label: 'Cabinet', icon: FolderOpen },
];

export function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest border-t-2 border-outline">
      <div className="flex justify-around items-center h-16 px-1 max-w-md mx-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-2 py-1 border-2 border-transparent text-on-surface hover:border-outline transition-all ${
                isActive ? 'bg-primary-container font-bold shadow-[2px_2px_0px_#1a1a1a]' : 'font-semibold hover:bg-surface-variant'
              }`}
            >
              <Icon size={20} className={isActive ? "stroke-[2.5]" : ""} />
              <span className="font-label text-[9px] uppercase mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
