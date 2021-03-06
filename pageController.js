const pageScraper = require("./pageScraper");

async function scrapeAll({ browserInstance }) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper({browser});
  } catch (err) {
    console.log("Não conseguiu achar uma instância do browser => ", err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
