import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Overview } from './components/Overview';
import { GeoMap } from './components/GeoMap';
import { Projects } from './components/Projects';
import { Reports } from './components/Reports';
import { Cabinet } from './components/Cabinet';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header activeTab={activeTab} />
      
      {activeTab === 'overview' && <Overview />}
      {activeTab === 'geo-map' && <GeoMap />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'reports' && <Reports />}
      {activeTab === 'cabinet' && <Cabinet />}

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
