// This works but not good enough
const puppeteer = require('puppeteer')

// When you run this block, make sure you hide all elements you don't want to convert into PDF
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://resume.madhukm.com', { waitUntil: 'networkidle0' }) // URL where
  await page.pdf({
    path: './test.pdf',
    scale: 0.88, // Adjust scale as much as you'd want depending on your resume size, and make it fit into A4
    printBackground: true
  })
  await browser.close()
})()
