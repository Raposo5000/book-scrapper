const browserObject = require("./browser");
const scraperController = require("./pageController");

//Inicia uma instância do browser
const browserInstance = browserObject.startBrowser();

// inicia o controller do scrap
scraperController({ browserInstance });
