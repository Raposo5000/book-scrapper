const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;
  try {
    console.log("Abrindo navegador...");
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    console.log("Navegador aberto com sucesso!");
  } catch (err) {
    console.log("Não foi possível criar uma instância do navegador => : ", err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
