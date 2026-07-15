import { chromium } from 'playwright';

async function checkA006() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    const ghPagesUrl = 'https://metekahyagil.github.io/dutch/A0/Competency-6-Telling-Time-and-Dates/A0-06.html';
    console.log(`Checking GitHub Pages: ${ghPagesUrl}`);
    
    const response = await page.goto(ghPagesUrl, { waitUntil: 'networkidle' });
    
    if (response.status() === 200) {
      const title = await page.title();
      const h1 = await page.$eval('h1', el => el.textContent).catch(() => null);
      const sections = await page.$$('h2');
      
      console.log(`✅ A0-06 is LIVE on GitHub Pages`);
      console.log(`   Status: 200 OK`);
      console.log(`   Title: ${title}`);
      console.log(`   H1: ${h1}`);
      console.log(`   H2 sections found: ${sections.length}`);
      
      // List the section headings
      const headings = await Promise.all(sections.map(h => h.textContent()));
      headings.forEach((heading, i) => {
        console.log(`     ${i + 1}. ${heading}`);
      });
    } else {
      console.log(`❌ A0-06 returned status ${response.status()}`);
    }
  } catch (error) {
    console.log(`❌ Error accessing A0-06: ${error.message}`);
  } finally {
    await browser.close();
  }
}

checkA006();
