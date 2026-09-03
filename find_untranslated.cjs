const fs = require('fs');
const files = [
  'src/components/GeoMap.tsx',
  'src/components/Projects.tsx',
  'src/components/Reports.tsx',
  'src/components/Cabinet.tsx',
  'src/components/Overview.tsx',
  'src/components/Header.tsx',
  'src/components/BottomNav.tsx'
];

const allMatches = new Set();
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.matchAll(/t\('([^']+)'\)/g);
  for (const match of matches) {
    allMatches.add(match[1]);
  }
});
console.log(Array.from(allMatches).join('\n'));
