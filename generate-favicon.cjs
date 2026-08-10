const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, 'src', 'assets', 'logo.png');
const logoBuf = fs.readFileSync(logoPath);
const base64 = logoBuf.toString('base64');
const dataUri = `data:image/png;base64,${base64}`;

// Version 1: High contrast bright container with white border and dark background
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="16" fill="#FFFFFF" />
  <rect x="3" y="3" width="58" height="58" rx="13" fill="#111111" />
  <image href="${dataUri}" x="6" y="6" width="52" height="52" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);

// Also generate a pure bright white background version logo-bright.png in public
const svgWhiteBg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#FFFFFF" />
  <image href="${dataUri}" x="4" y="4" width="56" height="56" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'favicon-white.svg'), svgWhiteBg);

console.log('Successfully generated base64 inline favicons!');
