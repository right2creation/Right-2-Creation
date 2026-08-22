const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default || require('png-to-ico');

async function generate() {
  const srcLogo = path.join(__dirname, 'src', 'assets', 'logo.png');
  const pubDir = path.join(__dirname, 'public');

  console.log('Generating favicon sizes from:', srcLogo);

  // 1. Generate PNGs for Google & modern browsers (multiples of 48)
  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-144x144.png', size: 144 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'tab-logo.png', size: 192 } // update tab-logo to 192x192 (48x4)
  ];

  for (const { name, size } of sizes) {
    const dest = path.join(pubDir, name);
    await sharp(srcLogo)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(dest);
    console.log(`Created ${name} (${size}x${size})`);
  }

  // Also copy tab-logo.png to src/assets/tab-logo.png
  await sharp(srcLogo)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, 'src', 'assets', 'tab-logo.png'));

  // 2. Generate true multi-resolution favicon.ico (16, 32, 48)
  const temp16 = path.join(pubDir, 'temp-16.png');
  const temp32 = path.join(pubDir, 'temp-32.png');
  const temp48 = path.join(pubDir, 'favicon-48x48.png');

  await sharp(srcLogo).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(temp16);
  await sharp(srcLogo).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(temp32);

  const icoBuf = await pngToIco([temp16, temp32, temp48]);
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icoBuf);
  console.log('Created valid multi-resolution favicon.ico (16x16, 32x32, 48x48)');

  // Clean up temps
  fs.unlinkSync(temp16);
  fs.unlinkSync(temp32);

  console.log('All favicons successfully generated!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
