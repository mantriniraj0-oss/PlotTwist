import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Existing...
  'National Land Acquisition': { en: 'National Land Acquisition', hi: 'राष्ट्रीय भूमि अधिग्रहण' },
  'Management System': { en: 'Management System', hi: 'प्रबंधन प्रणाली' },
  'Welcome back, Administrator': { en: 'Welcome back, Administrator', hi: 'वापसी पर स्वागत है, प्रशासक' },
  'Overview': { en: 'Overview', hi: 'अवलोकन' },
  'Geo Map': { en: 'Geo Map', hi: 'जियो मैप' },
  'Projects': { en: 'Projects', hi: 'परियोजनाएं' },
  'Reports': { en: 'Reports', hi: 'रिपोर्ट्स' },
  'Cabinet': { en: 'Cabinet', hi: 'कैबिनेट' },
  'System Specs': { en: 'System Specs', hi: 'सिस्टम स्पेक्स' }, // New
  'National Land Acquisition & Management System Architecture and Specifications': { en: 'National Land Acquisition & Management System Architecture and Specifications', hi: 'राष्ट्रीय भूमि अधिग्रहण और प्रबंधन प्रणाली वास्तुकला और विनिर्देश' }, // New
  
  // Stats
  'Total Area Acquired': { en: 'Total Area Acquired', hi: 'कुल अधिग्रहित क्षेत्र' },
  'Active Corridors': { en: 'Active Corridors', hi: 'सक्रिय कॉरिडोर' },
  'Disbursed Compensation': { en: 'Disbursed Compensation', hi: 'वितरित मुआवजा' },
  'Pending Approvals': { en: 'Pending Approvals', hi: 'लंबित स्वीकृतियां' },
  'Hectares': { en: 'Hectares', hi: 'हेक्टेयर' },
  
  // Dashboard Sections
  'Critical Bottlenecks': { en: 'Critical Bottlenecks', hi: 'महत्वपूर्ण बाधाएं' },
  'Recent Awards (Sec 3G)': { en: 'Recent Awards (Sec 3G)', hi: 'हालिया पंचाट (धारा 3G)' },
  'Action Required': { en: 'Action Required', hi: 'कार्रवाई आवश्यक' },
  
  // Projects
  'Portfolio Control Center': { en: 'Portfolio Control Center', hi: 'पोर्टफोलियो नियंत्रण केंद्र' },
  'LIVE FEED': { en: 'LIVE FEED', hi: 'लाइव फ़ीड' },
  'Active Corridors & Projects': { en: 'Active Corridors & Projects', hi: 'सक्रिय कॉरिडोर और परियोजनाएं' },
  'Monitoring statutory land acquisition milestones, clearance velocity, and critical construction bottlenecks across national infrastructure.': { 
    en: 'Monitoring statutory land acquisition milestones, clearance velocity, and critical construction bottlenecks across national infrastructure.',
    hi: 'राष्ट्रीय बुनियादी ढांचे में वैधानिक भूमि अधिग्रहण मील के पत्थर, निकासी वेग और महत्वपूर्ण निर्माण बाधाओं की निगरानी करना।'
  },
  'Active Length': { en: 'Active Length', hi: 'सक्रिय लंबाई' },
  'Clearance': { en: 'Clearance', hi: 'निकासी' },
  'Bottlenecks': { en: 'Bottlenecks', hi: 'बाधाएं' },
  'All Corridors (24)': { en: 'All Corridors (24)', hi: 'सभी कॉरिडोर (24)' },
  'Expressways (8)': { en: 'Expressways (8)', hi: 'एक्सप्रेसवे (8)' },
  'Freight Corridors (6)': { en: 'Freight Corridors (6)', hi: 'फ्रेट कॉरिडोर (6)' },
  'Vadodara-Mumbai Expressway': { en: 'Vadodara-Mumbai Expressway', hi: 'वडोदरा-मुंबई एक्सप्रेसवे' },
  'Eastern Dedicated Freight Corridor': { en: 'Eastern Dedicated Freight Corridor', hi: 'ईस्टर्न डेडिकेटेड फ्रेट कॉरिडोर' },
  'Physical Clearance': { en: 'Physical Clearance', hi: 'भौतिक निकासी' },
  'Sec 3A': { en: 'Sec 3A', hi: 'धारा 3A' },
  'Sec 3D': { en: 'Sec 3D', hi: 'धारा 3D' },
  'Sec 11': { en: 'Sec 11', hi: 'धारा 11' },
  'Sec 19': { en: 'Sec 19', hi: 'धारा 19' },
  'Expedite': { en: 'Expedite', hi: 'शीघ्र करें' },
  'Critical Delay': { en: 'Critical Delay', hi: 'महत्वपूर्ण देरी' },
  'On Track': { en: 'On Track', hi: 'पटरी पर' },
  'Forest Clearance Pending (Km 142)': { en: 'Forest Clearance Pending (Km 142)', hi: 'वन निकासी लंबित (किमी 142)' },
  'ROB Girder Launching in progress': { en: 'ROB Girder Launching in progress', hi: 'आरओबी गर्डर लॉन्चिंग प्रगति पर' },
  
  // Cabinet
  'Policy & Directives': { en: 'Policy & Directives', hi: 'नीति और निर्देश' },
  'Secured Ledger': { en: 'Secured Ledger', hi: 'सुरक्षित खाता बही' },
  'Immutable record of national land acquisition policies, executive gazette notifications, and state-wise R&R amendments.': {
    en: 'Immutable record of national land acquisition policies, executive gazette notifications, and state-wise R&R amendments.',
    hi: 'राष्ट्रीय भूमि अधिग्रहण नीतियों, कार्यकारी राजपत्र अधिसूचनाओं और राज्य-वार आर एंड आर संशोधनों का अपरिवर्तनीय रिकॉर्ड।'
  },
  'Directives & Memos': { en: 'Directives & Memos', hi: 'निर्देश और ज्ञापन' },
  'Filter': { en: 'Filter', hi: 'फ़िल्टर' },
  'Export': { en: 'Export', hi: 'निर्यात' },
  'National Infrastructure Corridor Bill 2025': { en: 'National Infrastructure Corridor Bill 2025', hi: 'राष्ट्रीय अवसंरचना कॉरिडोर विधेयक 2025' },
  'Special Land Acquisition Amendment': { en: 'Special Land Acquisition Amendment', hi: 'विशेष भूमि अधिग्रहण संशोधन' },
  'R&R Exemption Guidelines 2025': { en: 'R&R Exemption Guidelines 2025', hi: 'आर एंड आर छूट दिशानिर्देश 2025' },
  'URGENT': { en: 'URGENT', hi: 'अति आवश्यक' },
  'PENDING REVIEW': { en: 'PENDING REVIEW', hi: 'समीक्षा लंबित' },
  'APPROVED': { en: 'APPROVED', hi: 'मंजूर की' },
  'Inspect': { en: 'Inspect', hi: 'निरीक्षण करें' },
  'PDF': { en: 'PDF', hi: 'पीडीएफ' },
  
  // Reports
  'National Analytics': { en: 'National Analytics', hi: 'राष्ट्रीय विश्लेषिकी' },
  'Performance Matrix': { en: 'Performance Matrix', hi: 'प्रदर्शन मैट्रिक्स' },
  'Generate Custom Report': { en: 'Generate Custom Report', hi: 'कस्टम रिपोर्ट जनरेट करें' },
  'Acquisition Velocity': { en: 'Acquisition Velocity', hi: 'अधिग्रहण वेग' },
  'Q1': { en: 'Q1', hi: 'Q1' },
  'Q2': { en: 'Q2', hi: 'Q2' },
  'Q3': { en: 'Q3', hi: 'Q3' },
  'Q4': { en: 'Q4', hi: 'Q4' },
  'State-wise Distribution': { en: 'State-wise Distribution', hi: 'राज्यवार वितरण' },
  'Maharashtra': { en: 'Maharashtra', hi: 'महाराष्ट्र' },
  'Gujarat': { en: 'Gujarat', hi: 'गुजरात' },
  'Uttar Pradesh': { en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश' },
  
  // Auth
  'Identity Verification': { en: 'Identity Verification', hi: 'पहचान सत्यापन' },
  'System Access Log': { en: 'System Access Log', hi: 'सिस्टम एक्सेस लॉग' },
  'Level-4 Authorized Session': { en: 'Level-4 Authorized Session', hi: 'लेवल-4 अधिकृत सत्र' },
  'Initiate Scan': { en: 'Initiate Scan', hi: 'स्कैन शुरू करें' },
  'Scanning...': { en: 'Scanning...', hi: 'स्कैन हो रहा है...' },
  'Identity Verified': { en: 'Identity Verified', hi: 'पहचान सत्यापित' },
  'Username': { en: 'Username', hi: 'उपयोगकर्ता नाम' },
  'Password': { en: 'Password', hi: 'पासवर्ड' },
  'Login': { en: 'Login', hi: 'लॉगिन' },
  'Invalid Credentials': { en: 'Invalid Credentials', hi: 'अमान्य क्रेडेंशियल्स' },
  'Biometric Scan': { en: 'Biometric Scan', hi: 'बायोमेट्रिक स्कैन' },
  'Manual Override': { en: 'Manual Override', hi: 'मैनुअल ओवरराइड' },
  'Public Access (View Only)': { en: 'Public Access (View Only)', hi: 'सार्वजनिक पहुंच (केवल देखें)' },
  
  // General
  'Language': { en: 'Language', hi: 'भाषा' },
  'Change Status': { en: 'Change Status', hi: 'स्थिति बदलें' },
  'New Project Corridor': { en: 'New Project Corridor', hi: 'नया प्रोजेक्ट कॉरिडोर' },
  'New Policy Directive': { en: 'New Policy Directive', hi: 'नया नीति निर्देश' },
  'Upload Memo': { en: 'Upload Memo', hi: 'मेमो अपलोड करें' },

  // System Specs
  'Scope of Study': { en: 'Scope of Study', hi: 'अध्ययन का दायरा' },
  'Scope Area': { en: 'Scope Area', hi: 'दायरा क्षेत्र' },
  'Key Activities': { en: 'Key Activities', hi: 'प्रमुख गतिविधियां' },
  'Primary Stakeholders': { en: 'Primary Stakeholders', hi: 'प्राथमिक हितधारक' },
  'Expected Output': { en: 'Expected Output', hi: 'अपेक्षित आउटपुट' },
  'Technology Architecture': { en: 'Technology Architecture', hi: 'प्रौद्योगिकी वास्तुकला' },
  'Component': { en: 'Component', hi: 'घटक' },
  'Suggested Technology': { en: 'Suggested Technology', hi: 'सुझाई गई तकनीक' },
  'Stakeholders': { en: 'Stakeholders', hi: 'हितधारक' },
  'Workflow': { en: 'Workflow', hi: 'कार्यप्रवाह' },
  'Security/Integration': { en: 'Security/Integration', hi: 'सुरक्षा/एकीकरण' },
  
  // Proposal Form
  'Proposal Submission': { en: 'Proposal Submission', hi: 'प्रस्ताव प्रस्तुतीकरण' },
  'National Land Acquisition & Management System': { en: 'National Land Acquisition & Management System', hi: 'राष्ट्रीय भूमि अधिग्रहण और प्रबंधन प्रणाली' },
  'Project Name & Description': { en: 'Project Name & Description', hi: 'परियोजना का नाम और विवरण' },
  'Sponsoring Ministry/Department': { en: 'Sponsoring Ministry/Department', hi: 'प्रायोजक मंत्रालय/विभाग' },
  'Project Implementing Agency': { en: 'Project Implementing Agency', hi: 'परियोजना कार्यान्वयन एजेंसी' },
  'State, District, Taluka and Villages': { en: 'State, District, Taluka and Villages', hi: 'राज्य, जिला, तालुका और गांव' },
  'Project Location/GIS Coordinates': { en: 'Project Location/GIS Coordinates', hi: 'परियोजना स्थान/जीआईएस निर्देशांक' },
  'Total Land Required': { en: 'Total Land Required', hi: 'आवश्यक कुल भूमि' },
  'Government/Private Land': { en: 'Government/Private Land', hi: 'सरकारी/निजी भूमि' },
  'Number of Parcels': { en: 'Number of Parcels', hi: 'पार्सल की संख्या' },
  'Affected & Displaced Families': { en: 'Affected & Displaced Families', hi: 'प्रभावित और विस्थापित परिवार' },
  'Estimated Compensation': { en: 'Estimated Compensation', hi: 'अनुमानित मुआवजा' },
  'Proposed Timeline': { en: 'Proposed Timeline', hi: 'प्रस्तावित समयरेखा' },
  'Applicable Legal Framework': { en: 'Applicable Legal Framework', hi: 'लागू कानूनी ढांचा' },
  'Supporting Documents': { en: 'Supporting Documents', hi: 'समर्थक दस्तावेज' },
  'Declaration & Authorization': { en: 'Declaration & Authorization', hi: 'घोषणा और प्राधिकरण' },
  'Workflow Tracker': { en: 'Workflow Tracker', hi: 'कार्यप्रवाह ट्रैकर' },
  'Save Draft': { en: 'Save Draft', hi: 'ड्राफ्ट सहेजें' },
  'Submit Proposal': { en: 'Submit Proposal', hi: 'प्रस्ताव जमा करें' },
  'Submit': { en: 'Submit', hi: 'जमा करें' },
  'Digital/AI Scrutiny': { en: 'Digital/AI Scrutiny', hi: 'डिजिटल/एआई जांच' },
  'District Verification': { en: 'District Verification', hi: 'जिला सत्यापन' },
  'State/Central Approval': { en: 'State/Central Approval', hi: 'राज्य/केंद्रीय स्वीकृति' },
  'Tracking': { en: 'Tracking', hi: 'ट्रैकिंग' },

  // Study Scope Rows
  'Project Proposal': { en: 'Project Proposal', hi: 'परियोजना प्रस्ताव' },
  'Land Identification & GIS': { en: 'Land Identification & GIS', hi: 'भूमि पहचान और जीआईएस' },
  'Verification': { en: 'Verification', hi: 'सत्यापन' },
  'Approval Workflow': { en: 'Approval Workflow', hi: 'स्वीकृति कार्यप्रवाह' },
  'Notifications': { en: 'Notifications', hi: 'सूचनाएं' },
  'Award & Compensation': { en: 'Award & Compensation', hi: 'पंचाट और मुआवजा' },
  'R&R': { en: 'R&R', hi: 'आर एंड आर' },
  'Possession': { en: 'Possession', hi: 'अधिकार' },
  'Timeline Monitoring': { en: 'Timeline Monitoring', hi: 'समयरेखा निगरानी' },
  'Document Management': { en: 'Document Management', hi: 'दस्तावेज़ प्रबंधन' },
  'Analytics/MIS': { en: 'Analytics/MIS', hi: 'एनालिटिक्स/एमआईएस' },
  'Predictive Analytics': { en: 'Predictive Analytics', hi: 'भविष्य कहनेवाला विश्लेषण' },
  'Public Transparency': { en: 'Public Transparency', hi: 'सार्वजनिक पारदर्शिता' },

  // New Table Data
  'Online submission, preliminary scrutiny, document upload': { en: 'Online submission, preliminary scrutiny, document upload', hi: 'ऑनलाइन सबमिशन, प्रारंभिक जांच, दस्तावेज़ अपलोड' },
  'Project Implementing Agency, State Government': { en: 'Project Implementing Agency, State Government', hi: 'परियोजना कार्यान्वयन एजेंसी, राज्य सरकार' },
  'Digitally submitted proposal': { en: 'Digitally submitted proposal', hi: 'डिजिटल रूप से प्रस्तुत प्रस्ताव' },
  'Parcel identification, survey details, GIS geo-tagging': { en: 'Parcel identification, survey details, GIS geo-tagging', hi: 'पार्सल पहचान, सर्वेक्षण विवरण, जीआईएस जियो-टैगिंग' },
  'District Authority, Field Officers': { en: 'District Authority, Field Officers', hi: 'जिला प्राधिकरण, क्षेत्र अधिकारी' },
  'Verified GIS-linked land parcels': { en: 'Verified GIS-linked land parcels', hi: 'सत्यापित जीआईएस-लिंक्ड भूमि पार्सल' },
  'Digital Verification': { en: 'Digital Verification', hi: 'डिजिटल सत्यापन' },
  'Land-record verification, ownership and area validation': { en: 'Land-record verification, ownership and area validation', hi: 'भूमि-रिकॉर्ड सत्यापन, स्वामित्व और क्षेत्र सत्यापन' },
  'District Authority, Revenue Officials': { en: 'District Authority, Revenue Officials', hi: 'जिला प्राधिकरण, राजस्व अधिकारी' },
  'Verified land data': { en: 'Verified land data', hi: 'सत्यापित भूमि डेटा' },
  'Multi-level scrutiny, approvals, rejection/return with remarks': { en: 'Multi-level scrutiny, approvals, rejection/return with remarks', hi: 'बहु-स्तरीय जांच, स्वीकृति, टिप्पणियों के साथ अस्वीकृति/वापसी' },
  'State Government, Central Ministry': { en: 'State Government, Central Ministry', hi: 'राज्य सरकार, केंद्रीय मंत्रालय' },
  'Transparent approval trail': { en: 'Transparent approval trail', hi: 'पारदर्शी अनुमोदन ट्रेल' },
  'Notification Management': { en: 'Notification Management', hi: 'अधिसूचना प्रबंधन' },
  'Record notifications and affected parcels': { en: 'Record notifications and affected parcels', hi: 'अधिसूचनाएं और प्रभावित पार्सल रिकॉर्ड करें' },
  'District Authority, State Government': { en: 'District Authority, State Government', hi: 'जिला प्राधिकरण, राज्य सरकार' },
  'Notification tracking': { en: 'Notification tracking', hi: 'अधिसूचना ट्रैकिंग' },
  'Award calculation, compensation assessment and payment tracking': { en: 'Award calculation, compensation assessment and payment tracking', hi: 'पुरस्कार गणना, मुआवजा मूल्यांकन और भुगतान ट्रैकिंग' },
  'LAO, Finance Authorities': { en: 'LAO, Finance Authorities', hi: 'एलएओ, वित्त प्राधिकरण' },
  'Compensation status': { en: 'Compensation status', hi: 'मुआवजा स्थिति' },
  'Affected/displaced family tracking and R&R progress': { en: 'Affected/displaced family tracking and R&R progress', hi: 'प्रभावित/विस्थापित परिवार ट्रैकिंग और आर एंड आर प्रगति' },
  'District Authority, R&R Officials': { en: 'District Authority, R&R Officials', hi: 'जिला प्राधिकरण, आर एंड आर अधिकारी' },
  'R&R monitoring': { en: 'R&R monitoring', hi: 'आर एंड आर निगरानी' },
  'Possession documentation and parcel status': { en: 'Possession documentation and parcel status', hi: 'कब्जा दस्तावेजीकरण और पार्सल स्थिति' },
  'District Authority, Project Agency': { en: 'District Authority, Project Agency', hi: 'जिला प्राधिकरण, परियोजना एजेंसी' },
  'Possession record': { en: 'Possession record', hi: 'कब्जा रिकॉर्ड' },
  'Milestones, deadlines, delays and escalations': { en: 'Milestones, deadlines, delays and escalations', hi: 'मील के पत्थर, समय सीमा, देरी और वृद्धि' },
  'All stakeholders': { en: 'All stakeholders', hi: 'सभी हितधारक' },
  'Real-time project status': { en: 'Real-time project status', hi: 'वास्तविक समय परियोजना स्थिति' },
  'GIS & Spatial Analysis': { en: 'GIS & Spatial Analysis', hi: 'जीआईएस और स्थानिक विश्लेषण' },
  'Map visualization, parcel layers, project boundaries': { en: 'Map visualization, parcel layers, project boundaries', hi: 'मानचित्र विज़ुअलाइज़ेशन, पार्सल परतें, परियोजना सीमाएँ' },
  'All authorized users': { en: 'All authorized users', hi: 'सभी अधिकृत उपयोगकर्ता' },
  'Interactive GIS dashboard': { en: 'Interactive GIS dashboard', hi: 'इंटरएक्टिव जीआईएस डैशबोर्ड' },
  'Upload, versioning, verification and audit history': { en: 'Upload, versioning, verification and audit history', hi: 'अपलोड, संस्करण, सत्यापन और ऑडिट इतिहास' },
  'Secure document repository': { en: 'Secure document repository', hi: 'सुरक्षित दस्तावेज़ भंडार' },
  'State/project reports, KPIs, trend analysis': { en: 'State/project reports, KPIs, trend analysis', hi: 'राज्य/परियोजना रिपोर्ट, केपीआई, प्रवृत्ति विश्लेषण' },
  'Government Decision Makers': { en: 'Government Decision Makers', hi: 'सरकारी निर्णय निर्माता' },
  'Executive dashboards and reports': { en: 'Executive dashboards and reports', hi: 'कार्यकारी डैशबोर्ड और रिपोर्ट' },
  'Predictive Intelligence': { en: 'Predictive Intelligence', hi: 'भविष्य कहनेवाला बुद्धिमत्ता' },
  'Delay/risk prediction and bottleneck identification': { en: 'Delay/risk prediction and bottleneck identification', hi: 'देरी/जोखिम भविष्यवाणी और बाधा पहचान' },
  'Central/State Decision Makers': { en: 'Central/State Decision Makers', hi: 'केंद्रीय/राज्य निर्णय निर्माता' },
  'Early-warning insights': { en: 'Early-warning insights', hi: 'प्रारंभिक चेतावनी अंतर्दृष्टि' },
  'Safe/public status tracking': { en: 'Safe/public status tracking', hi: 'सुरक्षित/सार्वजनिक स्थिति ट्रैकिंग' },
  'Citizens, Project Authorities': { en: 'Citizens, Project Authorities', hi: 'नागरिक, परियोजना प्राधिकरण' },
  'Transparent acquisition status': { en: 'Transparent acquisition status', hi: 'पारदर्शी अधिग्रहण स्थिति' },

  // Tech Architecture Rows
  'Database': { en: 'Database', hi: 'डेटाबेस' },
  'PostgreSQL with PostGIS / MySQL': { en: 'PostgreSQL with PostGIS / MySQL', hi: 'PostgreSQL with PostGIS / MySQL' },
  'GIS Platform': { en: 'GIS Platform', hi: 'जीआईएस प्लेटफार्म' },
  'GeoServer, OpenLayers, Leaflet, QGIS': { en: 'GeoServer, OpenLayers, Leaflet, QGIS', hi: 'GeoServer, OpenLayers, Leaflet, QGIS' },
  'APIs': { en: 'APIs', hi: 'एपीआई' },
  'RESTful APIs / GraphQL': { en: 'RESTful APIs / GraphQL', hi: 'RESTful APIs / GraphQL' },
  'Cloud Infrastructure': { en: 'Cloud Infrastructure', hi: 'क्लाउड इंफ्रास्ट्रक्चर' },
  'NIC Cloud (MeghRaj) / AWS / Azure Government Cloud': { en: 'NIC Cloud (MeghRaj) / AWS / Azure Government Cloud', hi: 'NIC Cloud (MeghRaj) / AWS / Azure Government Cloud' },
  'Notification Services': { en: 'Notification Services', hi: 'अधिसूचना सेवाएं' },
  'SMS Gateway, Email APIs, Push Notifications': { en: 'SMS Gateway, Email APIs, Push Notifications', hi: 'SMS Gateway, Email APIs, Push Notifications' },
  'Frontend': { en: 'Frontend', hi: 'फ्रंटएंड' },
  'React.js / Next.js': { en: 'React.js / Next.js', hi: 'React.js / Next.js' },
  'Backend': { en: 'Backend', hi: 'बैकएंड' },
  'Node.js / Python': { en: 'Node.js / Python', hi: 'Node.js / Python' },
  'AI & Analytics': { en: 'AI & Analytics', hi: 'एआई और एनालिटिक्स' },
  'Gemini API, Python, Machine Learning': { en: 'Gemini API, Python, Machine Learning', hi: 'Gemini API, Python, Machine Learning' },
  'Authentication': { en: 'Authentication', hi: 'प्रमाणीकरण' },
  'OAuth 2.0 / JWT, RBAC': { en: 'OAuth 2.0 / JWT, RBAC', hi: 'OAuth 2.0 / JWT, RBAC' },
  'Secure Cloud Storage, Version Control, Audit Logs': { en: 'Secure Cloud Storage, Version Control, Audit Logs', hi: 'Secure Cloud Storage, Version Control, Audit Logs' },
  'Mobile Interface': { en: 'Mobile Interface', hi: 'मोबाइल इंटरफ़ेस' },
  'Responsive Web App / PWA': { en: 'Responsive Web App / PWA', hi: 'Responsive Web App / PWA' }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
