import fs from 'fs';

const keys = fs.readFileSync('all_keys.txt', 'utf8').split('\n').filter(Boolean);
let output = `import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {\n`;

// Simple mapping for translation (we'll just use a mock object or hardcode a few and let the rest be English or we provide a mapped JSON).
// Since the user wants "whole website in Hindi", I will do my best to provide a literal translation dictionary for these keys.
