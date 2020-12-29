import { Currency, HT, Token } from '@sashimiswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === HT) return 'HT'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
