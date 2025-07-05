import { NextRequest } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const config = { runtime: 'nodejs', memory: 512, maxDuration: 30 };

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const resume = `${origin}/?print=1`;
  const isProd = process.env.NODE_ENV === 'production';

  const launchOpts = isProd
    ? {
        executablePath: await chromium.executablePath(),
        args: chromium.args,
        headless: 'shell' as const
      }
    : {
        channel: 'chrome' as const,
        headless: true as const
      };

  const browser = await puppeteer.launch({
    ...launchOpts,
    defaultViewport: { width: 1200, height: 1600 }
  });

  try {
    const page = await browser.newPage();
    await page.goto(resume, { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    await page.emulateMediaType('print');
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
    });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="FatimaZahra_Benhamou_CV.pdf"'
      }
    });
  } finally {
    await browser.close();
  }
}
