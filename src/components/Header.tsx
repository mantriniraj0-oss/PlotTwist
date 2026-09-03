import React from 'react';
import { Bell, Compass } from 'lucide-react';

export function Header({ activeTab }: { activeTab: string }) {
  if (activeTab === 'overview') {
    return (
      <header className="fixed top-0 w-full z-40 pt-safe bg-surface border-b-2 border-outline">
        <div className="px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 overflow-hidden border-2 border-outline shadow-[2px_2px_0px_#1a1a1a] flex-shrink-0 bg-surface-container-lowest">
              <img alt="Emblem" className="w-full h-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_CnEolffALs0Xf8AVVuoMRTbUPHE9748slyLB8gUU7s0G0EIo3ZrnhJjy1f1OrZBeuFtvcvicI62Mn9WhA2SI5QH3psrFFOWeLq77WStJQ68CNZE_9qxNpLwCz8xUSdinGfAZAZJ3xEIeCLhKSjfauQAFN_3fujzwj0wESZLk0daTOowAQy7tvSCOL4QBxc2HorhsJA8L2QfJXrVMkD2vKOk23ugWpw6nnI-YZlE9DUdmkLsmBZwjXaaRodX2ShGwA" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-headline font-bold text-primary text-base tracking-tight">PlotTwist</span>
                <span className="text-[9px] font-bold font-headline tracking-wider uppercase px-1 py-0.5 bg-primary-container text-on-primary-container border border-outline">GOV</span>
              </div>
              <span className="text-[10px] text-on-surface-variant font-semibold tracking-normal mt-0.5">राष्ट्रीय भूमि • Executive Portal</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle language" className="h-8 px-2 bg-surface-container border-2 border-outline text-[11px] font-bold text-on-surface hover:bg-primary-container transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#1a1a1a]">
              <span>EN</span><span className="text-outline text-[10px] mx-1">|</span><span>हिं</span>
            </button>
            <button aria-label="Notifications" className="w-8 h-8 bg-surface-container border-2 border-outline flex items-center justify-center text-on-surface relative hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1a1a1a]">
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary border border-outline"></span>
            </button>
          </div>
        </div>
        <nav aria-label="Jurisdiction level" className="px-5 py-2.5 overflow-x-auto no-scrollbar flex items-center gap-1.5 border-t-2 border-outline bg-surface-container-low">
          <button className="flex items-center gap-1 px-3 py-1 bg-primary text-on-primary text-[11px] font-bold whitespace-nowrap border-2 border-outline shadow-[2px_2px_0px_#1a1a1a]">
            <span className="w-1.5 h-1.5 bg-primary-container border border-outline"></span>
            <span>National</span>
          </button>
          <span className="text-[14px] text-outline font-bold px-1">&gt;</span>
          <button className="px-2.5 py-1 bg-surface border border-outline text-on-surface hover:bg-surface-variant text-[11px] font-semibold whitespace-nowrap transition-colors">
            State (28+8)
          </button>
          <span className="text-[14px] text-outline font-bold px-1">&gt;</span>
          <button className="px-2.5 py-1 bg-surface border border-outline text-on-surface hover:bg-surface-variant text-[11px] font-semibold whitespace-nowrap transition-colors">
            District
          </button>
          <span className="text-[14px] text-outline font-bold px-1">&gt;</span>
          <button className="px-2.5 py-1 bg-surface border border-outline text-on-surface hover:bg-surface-variant text-[11px] font-semibold whitespace-nowrap transition-colors">
            Project Corridor
          </button>
          <span className="text-[14px] text-outline font-bold px-1">&gt;</span>
          <button className="px-2.5 py-1 bg-surface border border-outline text-on-surface hover:bg-surface-variant text-[11px] font-semibold whitespace-nowrap transition-colors">
            Cadastral Parcel
          </button>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface border-b-2 border-outline">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="text-primary" size={28} />
          <span className="font-headline font-bold text-xl tracking-tight text-primary uppercase">PlotTwist</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center border-2 border-outline bg-surface-container-lowest shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <Bell size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
