const scraperObject = {
  url: "http://books.toscrape.com",
  async scraper({browser}) {
    let page = await browser.newPage();
    console.log(`Navegando para ${this.url}...`);
    await page.goto(this.url);

    // espera o elemento da DOM ser renderizado
    await page.waitForSelector(".page_inner");
    // await page.evaluate(async () => {
      //   const div = document.getElementsByClassName("row")
      //   console.log(div)
      // })
      
      // Pega os links dos livros
    let urls = await page.$$eval("section ol > li", (links) => {
      // Verifica se o livro está em estoque
      links = links.filter(
        (link) =>
          link.querySelector(".instock.availability > i").textContent !==
          "In stock"
      );
      // Extrai os links
      links = links.map((el) => el.querySelector("h3 > a").href);
      return links;
    });
    console.log(urls);
  },
};

module.exports = scraperObject;
