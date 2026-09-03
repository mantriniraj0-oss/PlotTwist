import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // GeoMap
  'Spatial Intelligence // Sector 04': { en: 'Spatial Intelligence // Sector 04', hi: 'स्थानिक बुद्धिमत्ता // सेक्टर 04' },
  'DGPS Live Feed': { en: 'DGPS Live Feed', hi: 'डीजीपीएस लाइव फ़ीड' },
  'Cadastral & Polygon Matrix': { en: 'Cadastral & Polygon Matrix', hi: 'भूकर और बहुभुज मैट्रिक्स' },
  'Real-time vector boundary overlays, statutory stay tracking, and high-precision survey nodes.': { en: 'Real-time vector boundary overlays, statutory stay tracking, and high-precision survey nodes.', hi: 'रीयल-टाइम वेक्टर सीमा ओवरले, वैधानिक स्टे ट्रैकिंग, और उच्च-सटीक सर्वेक्षण नोड्स।' },
  'Acquired': { en: 'Acquired', hi: 'अधिग्रहित' },
  'Hectares': { en: 'Hectares', hi: 'हेक्टेयर' },
  'Pending': { en: 'Pending', hi: 'लंबित' },
  'Hotspots': { en: 'Hotspots', hi: 'हॉटस्पॉट' },
  'Critical Zones': { en: 'Critical Zones', hi: 'गंभीर क्षेत्र' },
  'Cadastral Vector Map': { en: 'Cadastral Vector Map', hi: 'भूकर वेक्टर मानचित्र' },
  'DGPS': { en: 'DGPS', hi: 'डीजीपीएस' },
  'Stays': { en: 'Stays', hi: 'स्टे' },
  'Velocity': { en: 'Velocity', hi: 'वेग' },
  'High Risk': { en: 'High Risk', hi: 'उच्च जोखिम' },
  'Medium Risk': { en: 'Medium Risk', hi: 'मध्यम जोखिम' },
  'Maps API Key Required': { en: 'Maps API Key Required', hi: 'मानचित्र एपीआई कुंजी आवश्यक' },
  'Please provide the VITE_GOOGLE_MAPS_API_KEY environment variable to view the Cadastral Vector Map.': { en: 'Please provide the VITE_GOOGLE_MAPS_API_KEY environment variable to view the Cadastral Vector Map.', hi: 'भूकर वेक्टर मानचित्र देखने के लिए कृपया VITE_GOOGLE_MAPS_API_KEY पर्यावरण चर प्रदान करें।' },
  '+': { en: '+', hi: '+' },
  '-': { en: '-', hi: '-' },
  'Active Overlay: Cadastral Mesh v4.2': { en: 'Active Overlay: Cadastral Mesh v4.2', hi: 'सक्रिय ओवरले: भूकर मेष v4.2' },
  'Polygon Boundary Sync: 98.4% Verified': { en: 'Polygon Boundary Sync: 98.4% Verified', hi: 'बहुभुज सीमा सिंक: 98.4% सत्यापित' },
  'Export GeoJSON': { en: 'Export GeoJSON', hi: 'जियोजेएसओएन निर्यात करें' },
  'Priority Hotspots & Stays': { en: 'Priority Hotspots & Stays', hi: 'प्राथमिकता हॉटस्पॉट और स्टे' },
  'Showing 3 of 14': { en: 'Showing 3 of 14', hi: '14 में से 3 दिखा रहा है' },
  'Sec 5A Dispute — Parcel #104': { en: 'Sec 5A Dispute — Parcel #104', hi: 'धारा 5ए विवाद - पार्सल #104' },
  'Northern Peripheral Expressway Corridor': { en: 'Northern Peripheral Expressway Corridor', hi: 'उत्तरी परिधीय एक्सप्रेसवे कॉरिडोर' },
  'Stay Active': { en: 'Stay Active', hi: 'स्टे सक्रिय' },
  '42.5 Ha': { en: '42.5 Ha', hi: '42.5 हेक्टेयर' },
  'Forest Block 7C Clearance': { en: 'Forest Block 7C Clearance', hi: 'वन ब्लॉक 7सी निकासी' },
  'Southern Ecologically Sensitive Zone': { en: 'Southern Ecologically Sensitive Zone', hi: 'दक्षिणी पारिस्थितिक रूप से संवेदनशील क्षेत्र' },
  'Velocity: Low': { en: 'Velocity: Low', hi: 'वेग: कम' },
  '118.0 Ha': { en: '118.0 Ha', hi: '118.0 हेक्टेयर' },
  'Title Dispute — Plot #312': { en: 'Title Dispute — Plot #312', hi: 'स्वामित्व विवाद - प्लॉट #312' },
  'Eastern Industrial Expansion Pocket': { en: 'Eastern Industrial Expansion Pocket', hi: 'पूर्वी औद्योगिक विस्तार पॉकेट' },
  'Litigation': { en: 'Litigation', hi: 'मुकदमेबाजी' },
  '19.3 Ha': { en: '19.3 Ha', hi: '19.3 हेक्टेयर' },
  'Area:': { en: 'Area:', hi: 'क्षेत्रफल:' },
  'Inspect Node': { en: 'Inspect Node', hi: 'नोड का निरीक्षण करें' },

  // Projects
  'Portfolio Control Center': { en: 'Portfolio Control Center', hi: 'पोर्टफोलियो नियंत्रण केंद्र' },
  'LIVE FEED': { en: 'LIVE FEED', hi: 'लाइव फ़ीड' },
  'Active Corridors & Projects': { en: 'Active Corridors & Projects', hi: 'सक्रिय गलियारे और परियोजनाएं' },
  'Monitoring statutory land acquisition milestones, clearance velocity, and critical construction bottlenecks across national infrastructure.': { en: 'Monitoring statutory land acquisition milestones, clearance velocity, and critical construction bottlenecks across national infrastructure.', hi: 'राष्ट्रीय बुनियादी ढांचे में वैधानिक भूमि अधिग्रहण मील के पत्थर, निकासी वेग और महत्वपूर्ण निर्माण बाधाओं की निगरानी।' },
  'Active Length': { en: 'Active Length', hi: 'सक्रिय लंबाई' },
  '4,280 KM': { en: '4,280 KM', hi: '4,280 किमी' },
  '↑ 12% Q3 Target': { en: '↑ 12% Q3 Target', hi: '↑ 12% Q3 लक्ष्य' },
  'Clearance': { en: 'Clearance', hi: 'निकासी' },
  'Physical Avg': { en: 'Physical Avg', hi: 'भौतिक औसत' },
  'Bottlenecks': { en: 'Bottlenecks', hi: 'बाधाएं' },
  'Requires Action': { en: 'Requires Action', hi: 'कार्रवाई आवश्यक है' },
  'All Corridors (24)': { en: 'All Corridors (24)', hi: 'सभी गलियारे (24)' },
  'Expressways (8)': { en: 'Expressways (8)', hi: 'एक्सप्रेसवे (8)' },
  'Freight Corridors (6)': { en: 'Freight Corridors (6)', hi: 'फ्रेट कॉरिडोर (6)' },
  'Vadodara-Mumbai Expressway': { en: 'Vadodara-Mumbai Expressway', hi: 'वडोदरा-मुंबई एक्सप्रेसवे' },
  'Critical Delay': { en: 'Critical Delay', hi: 'गंभीर देरी' },
  'Eastern Dedicated Freight Corridor': { en: 'Eastern Dedicated Freight Corridor', hi: 'पूर्वी समर्पित फ्रेट कॉरिडोर' },
  'On Track': { en: 'On Track', hi: 'ट्रैक पर' },
  'Physical Clearance': { en: 'Physical Clearance', hi: 'भौतिक निकासी' },
  'Sec 3A': { en: 'Sec 3A', hi: 'धारा 3ए' },
  'Sec 3D': { en: 'Sec 3D', hi: 'धारा 3डी' },
  'Sec 11': { en: 'Sec 11', hi: 'धारा 11' },
  'Sec 19': { en: 'Sec 19', hi: 'धारा 19' },
  'Expedite': { en: 'Expedite', hi: 'तेज करें' },

  // Reports
  'Financial & Statutory Intelligence': { en: 'Financial & Statutory Intelligence', hi: 'वित्तीय और वैधानिक बुद्धिमत्ता' },
  'FY 2024-25 Q3': { en: 'FY 2024-25 Q3', hi: 'वित्तीय वर्ष 2024-25 Q3' },
  'PlotTwist Portal': { en: 'PlotTwist Portal', hi: 'प्लेटट्विस्ट पोर्टल' },
  'Master audit ledger, escrow liquidity, statutory milestones, and state-wise acquisition velocity indices.': { en: 'Master audit ledger, escrow liquidity, statutory milestones, and state-wise acquisition velocity indices.', hi: 'मास्टर ऑडिट लेजर, एस्क्रो लिक्विडिटी, वैधानिक मील के पत्थर, और राज्य-वार अधिग्रहण वेग सूचकांक।' },
  'R&R Statutory Milestones': { en: 'R&R Statutory Milestones', hi: 'आर एंड आर वैधानिक मील के पत्थर' },
  'Active': { en: 'Active', hi: 'सक्रिय' },
  'HOUSING REHABILITATION (8,420 Units)': { en: 'HOUSING REHABILITATION (8,420 Units)', hi: 'आवास पुनर्वास (8,420 इकाइयां)' },
  'SKILL TRAINING & STIPEND (12,150 Beneficiaries)': { en: 'SKILL TRAINING & STIPEND (12,150 Beneficiaries)', hi: 'कौशल प्रशिक्षण और वजीफा (12,150 लाभार्थी)' },
  'ANNUITY & SUSTENANCE PENSION (5-Yr Lock)': { en: 'ANNUITY & SUSTENANCE PENSION (5-Yr Lock)', hi: 'वार्षिकी और निर्वाह पेंशन (5-वर्षीय लॉक)' },
  'Next statutory audit deadline:': { en: 'Next statutory audit deadline:', hi: 'अगली वैधानिक ऑडिट समय सीमा:' },
  '31 Mar 2025': { en: '31 Mar 2025', hi: '31 मार्च 2025' },
  'Verify': { en: 'Verify', hi: 'सत्यापित करें' },
  'Gazette & Dispatches': { en: 'Gazette & Dispatches', hi: 'राजपत्र और प्रेषण' },
  'PDF Vault': { en: 'PDF Vault', hi: 'पीडीएफ वॉल्ट' },
  'Official Gazette Notification #849-B': { en: 'Official Gazette Notification #849-B', hi: 'आधिकारिक राजपत्र अधिसूचना #849-B' },
  'Grievance Redressal Quarterly Summary': { en: 'Grievance Redressal Quarterly Summary', hi: 'शिकायत निवारण त्रैमासिक सारांश' },

  // Cabinet
  'Cabinet Intelligence // Memorandums & Directives': { en: 'Cabinet Intelligence // Memorandums & Directives', hi: 'कैबिनेट खुफिया // ज्ञापन और निर्देश' },
  'Cabinet & Policy': { en: 'Cabinet & Policy', hi: 'कैबिनेट और नीति' },
  'Secure repository for official governmental land acquisition policies, executive memorandums, and signed cabinet notes.': { en: 'Secure repository for official governmental land acquisition policies, executive memorandums, and signed cabinet notes.', hi: 'आधिकारिक सरकारी भूमि अधिग्रहण नीतियों, कार्यकारी ज्ञापनों और हस्ताक्षरित कैबिनेट नोटों के लिए सुरक्षित भंडार।' },
  'Active Notes': { en: 'Active Notes', hi: 'सक्रिय नोट्स' },
  'In Circulation': { en: 'In Circulation', hi: 'प्रचलन में' },
  'Cleared': { en: 'Cleared', hi: 'मंजूरी दे दी' },
  'GoM Approved': { en: 'GoM Approved', hi: 'GoM स्वीकृत' },
  'Sign-off': { en: 'Sign-off', hi: 'साइन-ऑफ' },
  'Pending Review': { en: 'Pending Review', hi: 'समीक्षा लंबित' },
  'Secure Clearance Active': { en: 'Secure Clearance Active', hi: 'सुरक्षित निकासी सक्रिय' },
  'Level-4 Authorized Session // PlotTwist Terminal #BG-88': { en: 'Level-4 Authorized Session // PlotTwist Terminal #BG-88', hi: 'लेवल -4 अधिकृत सत्र // प्लेटट्विस्ट टर्मिनल #BG-88' },
  'Directives & Memos': { en: 'Directives & Memos', hi: 'निर्देश और मेमो' },
  'Filter': { en: 'Filter', hi: 'फ़िल्टर' },
  'Export': { en: 'Export', hi: 'निर्यात' },
  'National Infrastructure Corridor Bill 2025': { en: 'National Infrastructure Corridor Bill 2025', hi: 'राष्ट्रीय बुनियादी ढांचा गलियारा विधेयक 2025' },
  'URGENT': { en: 'URGENT', hi: 'तत्काल' },
  'Special Land Acquisition Amendment': { en: 'Special Land Acquisition Amendment', hi: 'विशेष भूमि अधिग्रहण संशोधन' },
  'PENDING REVIEW': { en: 'PENDING REVIEW', hi: 'समीक्षा लंबित' },
  'R&R Exemption Guidelines 2025': { en: 'R&R Exemption Guidelines 2025', hi: 'R&R छूट दिशानिर्देश 2025' },
  'APPROVED': { en: 'APPROVED', hi: 'स्वीकृत' },
  'Inspect': { en: 'Inspect', hi: 'निरीक्षण करें' },
  'PDF': { en: 'PDF', hi: 'पीडीएफ' },

  // Overview
  'National Cadastral Sync Active': { en: 'National Cadastral Sync Active', hi: 'राष्ट्रीय भूकर सिंक सक्रिय' },
  'Cabinet Executive Overview': { en: 'Cabinet Executive Overview', hi: 'कैबिनेट कार्यकारी अवलोकन' },
  'Unified Decision Support & Cadastral Monitoring per RFCTLARR statutory framework.': { en: 'Unified Decision Support & Cadastral Monitoring per RFCTLARR statutory framework.', hi: 'RFCTLARR वैधानिक ढांचे के अनुसार एकीकृत निर्णय समर्थन और भूकर निगरानी।' },
  'Verify Khasra, Survey No. or Award ID...': { en: 'Verify Khasra, Survey No. or Award ID...', hi: 'खसरा, सर्वेक्षण संख्या या अवार्ड आईडी सत्यापित करें...' },
  'Total Land Acquired': { en: 'Total Land Acquired', hi: 'कुल अधिग्रहित भूमि' },
  'Sec. 11 Awarded': { en: 'Sec. 11 Awarded', hi: 'धारा 11 सम्मानित' },
  'Possessed & Handed Over': { en: 'Possessed & Handed Over', hi: 'कब्ज़ा और सौंपा गया' },
  'Total Proposed Footprint': { en: 'Total Proposed Footprint', hi: 'कुल प्रस्तावित पदचिह्न' },
  'across corridors': { en: 'across corridors', hi: 'गलियारों के पार' },
  'Corridors': { en: 'Corridors', hi: 'गलियारे' },
  'Delayed': { en: 'Delayed', hi: 'देरी' },
  'Disbursed': { en: 'Disbursed', hi: 'संवितरित' },
  'Families': { en: 'Families', hi: 'परिवार' },
  'Resettled': { en: 'Resettled', hi: 'पुनर्वासित' },
  'Vadodara-Mumbai Corridor #08': { en: 'Vadodara-Mumbai Corridor #08', hi: 'वडोदरा-मुंबई कॉरिडोर #08' },
  'Package 4B • 94% Clearance verified': { en: 'Package 4B • 94% Clearance verified', hi: 'पैकेज 4B • 94% निकासी सत्यापित' },
  'View Map': { en: 'View Map', hi: 'मानचित्र देखें' },
  'Audited per RFCTLARR Act 2013': { en: 'Audited per RFCTLARR Act 2013', hi: 'RFCTLARR अधिनियम 2013 के अनुसार ऑडिट किया गया' },
  'National Land Records Modernization • Govt of India': { en: 'National Land Records Modernization • Govt of India', hi: 'राष्ट्रीय भूमि रिकॉर्ड आधुनिकीकरण • भारत सरकार' },

  // Header & BottomNav
  'PlotTwist': { en: 'PlotTwist', hi: 'प्लेटट्विस्ट' },
  'GOV': { en: 'GOV', hi: 'सरकार' },
  'राष्ट्रीय भूमि • Executive Portal': { en: 'राष्ट्रीय भूमि • Executive Portal', hi: 'राष्ट्रीय भूमि • कार्यकारी पोर्टल' },
  'National': { en: 'National', hi: 'राष्ट्रीय' },
  'State (28+8)': { en: 'State (28+8)', hi: 'राज्य (28+8)' },
  'District': { en: 'District', hi: 'ज़िला' },
  'Project Corridor': { en: 'Project Corridor', hi: 'परियोजना गलियारा' },
  'Cadastral Parcel': { en: 'Cadastral Parcel', hi: 'भूकर पार्सल' },
  'Overview': { en: 'Overview', hi: 'अवलोकन' },
  'Geo Map': { en: 'Geo Map', hi: 'भू-मानचित्र' },
  'Projects': { en: 'Projects', hi: 'परियोजनाएं' },
  'Reports': { en: 'Reports', hi: 'रिपोर्ट' },
  'Cabinet': { en: 'Cabinet', hi: 'कैबिनेट' },
  
  // Auth & Admin
  'Authentication Required': { en: 'Authentication Required', hi: 'प्रमाणीकरण आवश्यक' },
  'Biometric Scan': { en: 'Biometric Scan', hi: 'बायोमेट्रिक स्कैन' },
  'Manual Override': { en: 'Manual Override', hi: 'मैनुअल ओवरराइड' },
  'Initiate Scan': { en: 'Initiate Scan', hi: 'स्कैन प्रारंभ करें' },
  'Scanning...': { en: 'Scanning...', hi: 'स्कैन किया जा रहा है...' },
  'Identity Verified': { en: 'Identity Verified', hi: 'पहचान सत्यापित' },
  'Username': { en: 'Username', hi: 'उपयोगकर्ता नाम' },
  'Password': { en: 'Password', hi: 'पासवर्ड' },
  'Login': { en: 'Login', hi: 'लॉग इन करें' },
  'Invalid Credentials': { en: 'Invalid Credentials', hi: 'अमान्य क्रेडेंशियल' },
  'Add Project': { en: 'Add Project', hi: 'परियोजना जोड़ें' },
  'Upload Memo': { en: 'Upload Memo', hi: 'मेमो अपलोड करें' },
  'Change Status': { en: 'Change Status', hi: 'स्थिति बदलें' },
  'Level-4 Authorized Session': { en: 'Level-4 Authorized Session', hi: 'लेवल-4 अधिकृत सत्र' },
  'New Project Corridor': { en: 'New Project Corridor', hi: 'नया प्रोजेक्ट कॉरिडोर' },
  'New Policy Directive': { en: 'New Policy Directive', hi: 'नया नीति निर्देश' },
  'Public Access (View Only)': { en: 'Public Access (View Only)', hi: 'सार्वजनिक पहुंच (केवल देखें)' }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
