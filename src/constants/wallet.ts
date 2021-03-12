// eslint-disable-next-line @typescript-eslint/class-name-casing
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
  bsc: {
    chainId: 56,
    rpcUrl: 'https://bsc-dataseed.binance.org',
    ethscanType: '',
    exploreURL: 'https://bscscan.com',
    stakingPool: '0x0449dF5a5e69D61584dd6A6b486a5cF5E33EC1ED',

    //add
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18
    },
    /**
     * fix network details for this Chain ID do not match metamask records.
     * use https://chainid.network/chains.json recorded
     */
    rpcUrls: ['https://bsc-dataseed1.binance.org', 'https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com/'],
    iconUrls: ['https://etherscan.io/token/images/bnb_28_2.png']
  }
}
export function getEthChainInfo(): CHAIN_INFO {
  return CHAIN_ENV_MAP['bsc']
}
