interface CHAIN_INFO {
  chainId: number
  rpcUrl: string
  ethscanType: string
  exploreURL: string
  stakingPool: string
  chainName: string
  nativeCurrency: object
  rpcUrls: Array<string>
  blockExplorerUrls: Array<string>
  iconUrls: Array<string>
}

const CHAIN_ENV_MAP: any = {
  heco: {
    chainId: 128,
    rpcUrl: 'https://http-mainnet.hecochain.com',
    ethscanType: '',
    exploreURL: 'https://hecoinfo.com',
    stakingPool: '0x06c7b472261f788634b62214adbb6d26795d85f9',
    //add
    chainName: 'Huobi ECO Chain Mainnet',
    nativeCurrency: {
      name: 'Huobi ECO Chain Native Token',
      symbol: 'HT',
      decimals: 18,
    },
    /**
     * fix network details for this Chain ID do not match metamask records.
     * use https://chainid.network/chains.json recorded
     */
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://scan.hecochain.com'],
  },
}
export function getEthChainInfo(): CHAIN_INFO {
  return CHAIN_ENV_MAP['heco']
}
