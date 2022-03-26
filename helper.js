function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function setUpMetamaskNetwork(metamask,networkName,rpcUrl,chainId,symbol){
  await metamask.addNetwork({networkName: networkName,rpc: rpcUrl,chainId: chainId,symbol: symbol})
}

module.exports = {
  sleep,
  setUpMetamaskNetwork
}
