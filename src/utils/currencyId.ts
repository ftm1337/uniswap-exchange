import { Currency, EXPANSE, Token } from '@eggswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === EXPANSE) return 'EXP'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
