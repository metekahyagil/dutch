import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Loading local dev server...');
  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 10000 });
  } catch (e) {
    console.log('Dev server not running yet');
    await browser.close();
    return;
  }
  
  // Check for nav menu
  const navMenu = await page.locator('.VPNavBarMenu').isVisible();
  console.log('Nav menu visible:', navMenu);
  
  // Get nav menu text
  const navText = await page.locator('.VPNavBarMenu').textContent();
  console.log('Nav menu text:', navText);
  
  // Check viewport
  const size = page.viewportSize();
  console.log('Viewport:', size);
  
  // Take screenshot
  await page.screenshot({ path: 'dev-server-screenshot.png' });
  console.log('Screenshot saved');
  
  await browser.close();
})();
