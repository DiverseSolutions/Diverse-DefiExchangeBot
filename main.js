require('dotenv').config()

const puppeteer = require('puppeteer')
const dappeteer = require('@chainsafe/dappeteer')

const { traderJoeXYZExample } =  require('./examples.js')

async function main() {
  const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.8.1', defaultViewport: null });
  const metamask = await dappeteer.setupMetamask(browser,{seed: process.env.MNEMONIC});

  traderJoeXYZExample(browser,metamask)
}



main();
