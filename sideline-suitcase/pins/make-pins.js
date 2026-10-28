// Renders Pinterest pin images (1000x1500) to pins/png/. Run: node pins/make-pins.js
const { chromium } = require('playwright');
const path = require('path');
const pins = [
  { file: 'packing-list', kicker: 'PRINTABLE', title: 'The Cheer Competition Packing List', sub: 'Uniform bag · hair & makeup · snacks · hotel kit', bg: '#c8102e' },
  { file: 'stay-to-play', kicker: 'SPORTS MOM 101', title: 'Stay-to-Play Hotels, Explained', sub: 'How to book the team block and still earn points', bg: '#111111' },
  { file: 'free-nights', kicker: 'TRAVEL HACK', title: 'Turn Competition Season Into Free Hotel Nights', sub: 'A no-spreadsheet points system for busy moms', bg: '#c8102e' },
  { file: 'survival-guide', kicker: 'COMP WEEKEND', title: 'Competition Weekend Survival Guide', sub: 'Timing, parking, food & happy siblings', bg: '#111111' },
  { file: 'hotel-hacks', kicker: 'SAVE MONEY', title: '5 Hotel Hacks Every Cheer Mom Needs', sub: 'Fridge, free breakfast, steamer, power strip & points', bg: '#c8102e' },
];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 1500 } });
  for (const p of pins) {
    await page.setContent(`<html><body style="margin:0;width:1000px;height:1500px;background:${p.bg};font-family:system-ui,sans-serif;display:flex;flex-direction:column;justify-content:center;padding:90px;box-sizing:border-box;color:#fff">
      <div style="font-size:40px;letter-spacing:6px;font-weight:700;color:${p.bg === "#111111" ? "#ff3b52" : "rgba(255,255,255,.85)"}">${p.kicker}</div>
      <div style="font-size:112px;line-height:1.02;font-weight:900;margin:30px 0 40px;letter-spacing:-2px">${p.title}</div>
      <div style="font-size:46px;line-height:1.3;opacity:.95">${p.sub}</div>
      <div style="margin-top:auto;font-size:38px;font-weight:700;background:#fff;color:${p.bg === "#111111" ? "#c8102e" : p.bg};padding:22px 34px;border-radius:999px;align-self:flex-start">sidelinesuitcase.com</div>
    </body></html>`);
    await page.screenshot({ path: path.join(__dirname, 'png', p.file + '.png') });
  }
  await browser.close();
})();
