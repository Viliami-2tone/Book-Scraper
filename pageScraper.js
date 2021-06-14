const scraperObject = {
    url: 'https://en.wikipedia.org/wiki/List_of_UFC_events',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.mw-parser-output');
        // Get the link to all the required books
        // let urls = await page.$$eval('section ol > li', links => {
        //     // Make sure the book to be scraped is in stock
        //     links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
        //     // Extract the links from the data
        //     links = links.map(el => el.querySelector('h3 > a').href)
        //     return links;
        // });

        let titleData = await page.$('table#Past_events > tbody > tr > td:nth-of-type(2)')
        let linkData = await page.$('table#Past_events > tbody > tr > td:nth-of-type(2) > a')

        let value = await page.evaluate(el => el.textContent, titleData)
        let link = await page.evaluate(el => el.href, linkData)


        console.log(value)
        console.log(link)

        ;
    }
}

module.exports = scraperObject;