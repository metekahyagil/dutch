import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Loading A0-01 lesson...');
  await page.goto('https://metekahyagil.github.io/dutch/A0/Competency-1-Understanding-Sounds/A0-01.html', { waitUntil: 'networkidle' });
  
  // Check for navigation bar
  const navExists = await page.locator('.VPNav').count();
  console.log('Navigation bar exists on lesson:', navExists > 0);
  
  // Get all visible text
  const title = await page.title();
  console.log('Page title:', title);
  
  // Check for sidebar
  const sidebar = await page.locator('.VPSidebar').isVisible();
  console.log('Sidebar visible:', sidebar);
  
  // Take screenshot
  await page.screenshot({ path: 'screenshot-lesson.png' });
  console.log('Screenshot saved');
  
  await browser.close();
})();
