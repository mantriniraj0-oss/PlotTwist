const fs = require('fs');

const files = [
  'src/components/GeoMap.tsx',
  'src/components/Projects.tsx',
  'src/components/Reports.tsx',
  'src/components/Cabinet.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace ">Text<" with ">{t('Text')}<"
  content = content.replace(/>([^<{}]+)</g, (match, p1) => {
    // skip if it looks like code or already translated
    if (p1.includes('t(') || p1.includes('=>')) return match;
    
    const trimmed = p1.trim();
    // skip if empty or just numbers/symbols
    if (!trimmed || /^[\d,.\-%]+$/.test(trimmed)) return match;
    
    // rebuild string with original whitespace around the t() call
    return match.replace(trimmed, `{t('${trimmed.replace(/'/g, "\\'")}')}`);
  });
  
  // specific object literal fields
  content = content.replace(/title: '([^']+)'/g, "title: t('$1')");
  content = content.replace(/loc: '([^']+)'/g, "loc: t('$1')");
  content = content.replace(/status: '([^']+)'/g, "status: t('$1')");
  content = content.replace(/area: '([^']+)'/g, "area: t('$1')");
  content = content.replace(/phase: '([^']+)'/g, "phase: t('$1')");
  content = content.replace(/region: '([^']+)'/g, "region: t('$1')");
  content = content.replace(/label: '([^']+)'/g, "label: t('$1')");
  
  fs.writeFileSync(file, content);
});

