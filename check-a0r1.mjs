import { chromium } from 'playwright';

async function checkA0R1() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // Try GitHub Pages URL first
    const ghPagesUrl = 'https://metekahyagil.github.io/dutch/A0/Competency-R1-Review/A0-R1.html';
    console.log(`Checking GitHub Pages: ${ghPagesUrl}`);
    
    const response = await page.goto(ghPagesUrl, { waitUntil: 'networkidle' });
    
    if (response.status() === 200) {
      const title = await page.title();
      const h1 = await page.$eval('h1', el => el.textContent).catch(() => null);
      console.log(`✅ A0-R1 is LIVE on GitHub Pages`);
      console.log(`   Status: 200 OK`);
      console.log(`   Title: ${title}`);
      console.log(`   H1: ${h1}`);
      
      // Check for specific content
      const hasContent = await page.$('main').catch(() => false);
      if (hasContent) {
        console.log(`   Main content: Present`);
      }
    } else {
      console.log(`❌ A0-R1 returned status ${response.status()}`);
    }
  } catch (error) {
    console.log(`❌ Error accessing A0-R1: ${error.message}`);
  } finally {
    await browser.close();
  }
}

checkA0R1();
