import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Overview } from './components/Overview';
import { GeoMap } from './components/GeoMap';
import { Projects } from './components/Projects';
import { Reports } from './components/Reports';
import { Cabinet } from './components/Cabinet';
import { SystemSpecs } from './components/SystemSpecs';
import { AuthOverlay } from './components/AuthOverlay';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [authRole, setAuthRole] = useState<'admin' | 'guest' | null>(null);

  if (!authRole) {
    return <AuthOverlay onAuth={(role) => setAuthRole(role)} />;
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header activeTab={activeTab} />
      
      {activeTab === 'overview' && <Overview />}
      {activeTab === 'geo-map' && <GeoMap />}
      {activeTab === 'projects' && <Projects isAdmin={authRole === 'admin'} />}
      {activeTab === 'reports' && <Reports />}
      {activeTab === 'cabinet' && <Cabinet isAdmin={authRole === 'admin'} />}
      {activeTab === 'system-specs' && <SystemSpecs />}

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
