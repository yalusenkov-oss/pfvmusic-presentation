import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const url = 'https://pfvmusic-presentation.vercel.app';
const outDir = '/Users/danilaorekhov/Downloads/pfvmusic-presentation-pages-corrected';

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1100 } });

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForSelector('.pdf-hero-page, .pdf-page', { timeout: 20000 });
await page.addStyleTag({
  content: `
    @page { size: 1123px 794px; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; background: #06010f !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    button[data-no-print="true"], .no-print { display: none !important; }
  `,
});

await page.evaluate(async () => {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
});

const total = await page.evaluate(() => {
  return document.querySelectorAll('.pdf-hero-page, .pdf-page').length;
});

if (!total) {
  throw new Error('No sections found (.pdf-hero-page, .pdf-page).');
}

for (let i = 0; i < total; i += 1) {
  const info = await page.evaluate((index) => {
    const pageWidth = 1123;
    const pageHeight = 794;
    const sections = Array.from(document.querySelectorAll('.pdf-hero-page, .pdf-page'));

    sections.forEach((el, idx) => {
      const node = el;
      node.style.display = idx === index ? 'block' : 'none';
      node.style.visibility = idx === index ? 'visible' : 'hidden';
      node.style.position = idx === index ? 'relative' : 'absolute';
      node.style.left = idx === index ? '0' : '-99999px';
      node.style.top = '0';
    });

    const active = sections[index];
    if (!active) {
      return { ok: false };
    }

    const root = document.getElementById('pdf-root') || document.getElementById('presentation-root') || document.body;
    root.style.width = `${pageWidth}px`;
    root.style.maxWidth = `${pageWidth}px`;
    root.style.margin = '0';
    root.style.padding = '0';
    root.style.overflow = 'hidden';

    active.style.width = `${pageWidth}px`;
    active.style.maxWidth = `${pageWidth}px`;
    active.style.margin = '0';
    active.style.boxSizing = 'border-box';
    active.style.transform = 'none';
    active.style.transformOrigin = 'top left';

    const naturalHeight = Math.max(1, active.scrollHeight);
    const scale = Math.min(1, pageHeight / naturalHeight);
    const scaledHeight = naturalHeight * scale;
    const offsetY = Math.max(0, (pageHeight - scaledHeight) / 2);

    active.style.height = `${naturalHeight}px`;
    active.style.transform = `scale(${scale})`;
    active.style.top = `${offsetY}px`;

    document.body.style.width = `${pageWidth}px`;
    document.body.style.height = `${pageHeight}px`;
    document.body.style.overflow = 'hidden';

    return { ok: true, naturalHeight, scale };
  }, i);

  if (!info.ok) {
    throw new Error(`Failed to prepare section ${i + 1}`);
  }

  await page.waitForTimeout(120);

  const outPath = path.join(outDir, `pfvmusic-section-${String(i + 1).padStart(2, '0')}.pdf`);
  await page.pdf({
    path: outPath,
    width: '1123px',
    height: '794px',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    pageRanges: '1',
    preferCSSPageSize: true,
  });

  console.log(`${i + 1}/${total} -> ${outPath}`);
}

await browser.close();
console.log(`DONE: ${outDir}`);
