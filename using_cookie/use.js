const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set cookie
  const cookie = {
    name: 'myCookie',
    value: 'myValue',
    domain: 'example.com'
  };
  await page.setCookie(cookie);

  await page.goto('https://example.com');
  
  // Rest of your code
  // ...
  
  await browser.close();
})();
