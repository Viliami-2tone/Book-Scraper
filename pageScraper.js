const scraperObject = {
    url: 'https://en.wikipedia.org/wiki/List_of_UFC_events',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.mw-parser-output');
       
        let titleData = await page.$('table#Past_events > tbody > tr > td:nth-of-type(2)')
        let linkData = await page.$('table#Past_events > tbody > tr > td:nth-of-type(2) > a')

        let value = await page.evaluate(el => el.textContent, titleData)
        let link = await page.evaluate(el => el.href, linkData)

        await page.goto(link)
        console.log(`Navigating to ${link}`)

        let fighterData = await page.$('table.toccolors > tbody > tr > td')

        let fighterDatatext = await page.evaluate(el => el.textContent, fighterData)

        console.log(fighterDatatext);
        ;
    }
}

module.exports = scraperObject;