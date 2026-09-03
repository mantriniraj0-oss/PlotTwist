const fs = require('fs');

const files = [
  'src/components/GeoMap.tsx',
  'src/components/Projects.tsx',
  'src/components/Reports.tsx',
  'src/components/Cabinet.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace ">Text<" with ">{t('Text')}<" for some common ones.
  // We can do this with regex, being careful.
  content = content.replace(/>([A-Za-z0-9][^<{}]+[A-Za-z0-9])</g, (match, p1) => {
    // skip if it looks like code or already translated
    if (p1.includes('t(') || p1.includes('map(') || p1.includes('=>')) return match;
    // skip if it's just numbers
    if (/^[\d,.]+$/.test(p1.trim())) return match;
    
    // remove leading/trailing spaces for the t() call
    const trimmed = p1.trim();
    if (!trimmed) return match;
    
    return `>{t('${trimmed}')}<`;
  });
  
  // also handle some specific string literals in arrays (like in Projects/Reports)
  content = content.replace(/title: '([^']+)'/g, "title: t('$1')");
  content = content.replace(/loc: '([^']+)'/g, "loc: t('$1')");
  content = content.replace(/status: '([^']+)'/g, "status: t('$1')");
  content = content.replace(/area: '([^']+)'/g, "area: t('$1')");
  content = content.replace(/phase: '([^']+)'/g, "phase: t('$1')");
  content = content.replace(/date: '([^']+)'/g, "date: t('$1')");
  content = content.replace(/region: '([^']+)'/g, "region: t('$1')");

  fs.writeFileSync(file, content);
});

