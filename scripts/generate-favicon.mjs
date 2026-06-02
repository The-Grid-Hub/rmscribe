import { Jimp } from 'jimp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const source = resolve(root, 'src/app/assets/rmscribe-logo-exact-transparent.png');
const output = resolve(root, 'src/app/favicon.ico');

const sizes = [16, 32, 48];

const pngBuffers = await Promise.all(
  sizes.map(async (size) => {
    const img = await Jimp.read(source);
    img.contain({ w: size, h: size });
    return img.getBuffer('image/png');
  })
);

const icoBuffer = await pngToIco(pngBuffers);
writeFileSync(output, icoBuffer);

console.log(`favicon.ico written to ${output} (${icoBuffer.length} bytes)`);
