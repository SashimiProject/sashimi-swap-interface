import { Currency, HT, Token } from '@sashimiswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === HT) return process.env.REACT_APP_CHAIN_NATIVE_TOKEN_SYMBOL as string
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
