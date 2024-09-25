const puppeteer = require('puppeteer')

const startBrowser = async () => {
    let browser 
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-setuid-sandlbox'],
            'ignoreHTTPSErrors': true
        })
    } catch (error) {
        console.log(error)
    }

    return browser
}

module.exports = startBrowser