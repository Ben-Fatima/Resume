/* app/api/pdf/route.ts --------------------------------------------------
   Generates /api/pdf?lang=en|fr
   * prod: puppeteer-core + sparticuz/chromium
   * dev : tries bundled puppeteer → CHROME_PATH → channel:'chrome'
----------------------------------------------------------------------- */

import { NextRequest } from 'next/server';
import fs from 'node:fs';
import chromium from '@sparticuz/chromium';
import puppeteerCore from 'puppeteer-core';

/* ——— Lambda settings ——— */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const config = {
  maxDuration: 30,
  memory: 512,
  unstable_includeFiles: ['node_modules/@sparticuz/chromium/bin/**']
};

function exists(p: string | undefined): p is string {
  return typeof p === 'string' && fs.existsSync(p);
}

async function launchBrowser() {
  if (process.env.NODE_ENV === 'production') {
    return puppeteerCore.launch({
      executablePath: await chromium.executablePath(),
      args: chromium.args,
      headless: 'shell',
      defaultViewport: { width: 1280, height: 1600 }
    });
  }

  try {
    const puppeteerFull = await import('puppeteer');
    return puppeteerFull.launch({
      headless: true,
      defaultViewport: { width: 1280, height: 1600 }
    });
  } catch {
    console.warn('Falling back to puppeteer-core due to missing puppeteer package.');
  }

  if (exists(process.env.CHROME_PATH)) {
    return puppeteerCore.launch({
      executablePath: process.env.CHROME_PATH,
      headless: true,
      defaultViewport: { width: 1280, height: 1600 }
    });
  }

  return puppeteerCore.launch({
    channel: 'chrome',
    headless: true,
    defaultViewport: { width: 1280, height: 1600 }
  });
}

/* ---------- Route --------------------------------------------------- */
export async function GET(req: NextRequest) {
  const lang = (req.nextUrl.searchParams.get('lang') || 'en').toLowerCase();
  const url = `${req.nextUrl.origin}/${lang}?print=1`;

  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (page as any).evaluate(() => document.fonts.ready);

    await page.emulateMediaType('print');
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (page as any).evaluate(() => document.documentElement.classList.remove('dark'));

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="FatimaZahra_Benhamou_CV_${lang}.pdf"`
      }
    });
  } finally {
    await browser.close();
  }
}
