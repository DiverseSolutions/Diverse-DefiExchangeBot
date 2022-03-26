const { sleep,setUpMetamaskNetwork } = require('./helper.js');

async function traderJoeXYZExample(browser,metamask){

  const networkName = 'Avax'
  const rpcUrl = 'https://api.avax.network/ext/bc/C/rpc' 
  const chainId = '43114' 
  const symbol = 'AVX' 
  const exchangeUrl = 'https://traderjoexyz.com/trade'

  // Set Up Metamask Network
  setUpMetamaskNetwork(metamask,networkName,rpcUrl,chainId,symbol)
  await metamask.switchNetwork(networkName)

  const page = await browser.newPage()

  // Go To Exchange
  await page.goto(exchangeUrl)

  // Wait For Page To Load
  await sleep(2000);

  // Search For Coin - Using the search function of website to search BNB
  await page.waitForXPath('//div[contains(@class,"open-currency-select-button")]');
  var originSelector = await page.$x('//div[contains(@class,"open-currency-select-button")]');

  await originSelector[0].click();
  var input = await page.waitForSelector('input#token-search-input');
  await input.type("BNB");
  input = await page.$x('//div[contains(@class,"token-item-0x264c1383EA520f73dd837F915ef3a732e204a493")]');
  await input[0].click();

  // Wait For Page To Load
  await sleep(2000);

  // Setting Up To Trade BNB for USDT
  await originSelector[1].click();
  var input = await page.waitForSelector('input#token-search-input'); 
  await input.type("USDT");
  input = await page.$x('//div[contains(@class,"token-item-0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7")]');
  await input[0].click();

  // Wait For Page To Load
  await sleep(2000);

  // Choosing BNB Amount
  input = await page.$x('//*[contains(@title,"Token Amount")]');
  await input[0].type("1");

  // Wait For Page To Load
  await sleep(2000);

  // Connecting To Metamask 
  input = await page.$x('//button[contains(text(),"Connect Wallet")]');
  await input[0].click();
  input = await page.waitForSelector("button#connect-METAMASK");
  await input.click();
  
  // Approve
  await metamask.approve({allAccounts: false});

  // // Swap
  // page.bringToFront();
  // input = await page.waitForSelector("button#swap-button");
  // await input.click();
  // await metamask.confirmTransaction();
}

module.exports = {
  traderJoeXYZExample
}
