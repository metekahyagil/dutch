import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Loading page...');
  await page.goto('https://metekahyagil.github.io/dutch/', { waitUntil: 'networkidle' });
  
  // Get all links in the nav
  const navLinks = await page.locator('.VPNavBarMenuLink').all();
  console.log('Nav menu links found:', navLinks.length);
  
  for (let i = 0; i < navLinks.length; i++) {
    const text = await navLinks[i].textContent();
    const href = await navLinks[i].getAttribute('href');
    console.log(`  Link ${i + 1}: "${text}" -> ${href}`);
  }
  
  // Check viewport size
  const size = page.viewportSize();
  console.log('Viewport:', size);
  
  // Check for mobile hamburger menu
  const hamburger = await page.locator('.VPNavBarHamburger').isVisible();
  console.log('Mobile hamburger visible:', hamburger);
  
  // Check if nav bar itself exists
  const navExists = await page.locator('.VPNavBar').count();
  console.log('Navigation bar element exists:', navExists > 0);
  
  // Get computed style of nav
  const navStyle = await page.locator('.VPNav').evaluate((el) => {
    return window.getComputedStyle(el).display;
  });
  console.log('Nav display style:', navStyle);
  
  await browser.close();
})();
