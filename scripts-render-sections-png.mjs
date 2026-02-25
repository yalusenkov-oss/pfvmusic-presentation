import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const url = 'http://127.0.0.1:4173';
const outDir = '/Users/danilaorekhov/Downloads/pfvmusic-slides-png';
const WIDTH = 2246;
const HEIGHT = 1588;

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForSelector('.pdf-hero-page, .pdf-page', { timeout: 20000 });

await page.addStyleTag({
  content: `
    html, body { margin: 0 !important; padding: 0 !important; background: #06010f !important; }
    * { animation: none !important; transition: none !important; }
    button[data-no-print="true"], .no-print { display: none !important; }
  `,
});

await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});

const total = await page.evaluate(() => document.querySelectorAll('.pdf-hero-page, .pdf-page').length);
if (!total) throw new Error('No sections found');

for (let i = 0; i < total; i += 1) {
  const prepared = await page.evaluate(({ index, width, height }) => {
    const sections = Array.from(document.querySelectorAll('.pdf-hero-page, .pdf-page'));
    const root = document.getElementById('pdf-root') || document.getElementById('presentation-root') || document.body;

    root.style.width = `${width}px`;
    root.style.maxWidth = `${width}px`;
    root.style.margin = '0';
    root.style.padding = '0';
    root.style.overflow = 'hidden';

    sections.forEach((el, idx) => {
      const n = el;
      const active = idx === index;
      n.style.display = active ? 'block' : 'none';
      n.style.visibility = active ? 'visible' : 'hidden';
      n.style.position = active ? 'relative' : 'absolute';
      n.style.left = active ? '0' : '-99999px';
      n.style.top = '0';
      n.style.width = `${width}px`;
      n.style.maxWidth = `${width}px`;
      n.style.margin = '0';
      n.style.boxSizing = 'border-box';
    });

    const active = sections[index];
    if (!active) return { ok: false };

    const all = Array.from(active.querySelectorAll('*'));
    for (const el of all) {
      const node = el;
      node.style.opacity = '1';
      node.style.visibility = 'visible';
      if (node.style.transform) node.style.transform = 'none';
    }

    const naturalHeight = Math.max(1, active.scrollHeight);
    const scale = Math.min(1, height / naturalHeight);
    const scaledHeight = naturalHeight * scale;
    const offsetY = Math.max(0, Math.floor((height - scaledHeight) / 2));

    active.style.height = `${naturalHeight}px`;
    active.style.transformOrigin = 'top left';
    active.style.transform = `scale(${scale})`;
    active.style.top = `${offsetY}px`;

    document.body.style.width = `${width}px`;
    document.body.style.height = `${height}px`;
    document.body.style.overflow = 'hidden';

    return { ok: true, scale, naturalHeight };
  }, { index: i, width: WIDTH, height: HEIGHT });

  if (!prepared.ok) throw new Error(`Failed to prep section ${i + 1}`);

  await page.waitForTimeout(100);
  const outPath = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await page.screenshot({ path: outPath, type: 'png' });
  console.log(`${i + 1}/${total} -> ${outPath}`);
}

await browser.close();
console.log(`DONE: ${outDir}`);
