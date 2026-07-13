import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Loading page...');
  await page.goto('https://metekahyagil.github.io/dutch/', { waitUntil: 'networkidle' });
  
  // Check for navigation bar
  const navBar = await page.locator('.VPNav').isVisible();
  console.log('✓ Navigation bar visible:', navBar);
  
  // Check for Home link
  const homeLink = await page.locator('text=Home').first().isVisible();
  console.log('✓ Home link visible:', homeLink);
  
  // Check for A0 link
  const a0Link = await page.locator('text=A0').first().isVisible();
  console.log('✓ A0 link visible:', a0Link);
  
  // Get page title
  const title = await page.title();
  console.log('✓ Page title:', title);
  
  // Check for CSS loaded
  const cssLoaded = await page.evaluate(() => {
    return document.querySelectorAll('link[rel="stylesheet"]').length;
  });
  console.log('✓ Stylesheets loaded:', cssLoaded);
  
  // Check body content
  const bodyText = await page.textContent('body');
  console.log('✓ Body has text:', bodyText.length > 100 ? 'Yes (${bodyText.length} chars)' : 'No');
  
  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
  console.log('✓ Screenshot saved to screenshot.png');
  
  await browser.close();
})();
