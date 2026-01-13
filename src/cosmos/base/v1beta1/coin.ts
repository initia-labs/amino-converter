import {
  Coin as Coin_pb,
  DecCoin as DecCoin_pb,
} from '@initia/initia.proto/cosmos/base/v1beta1/coin'

export interface CoinAmino {
  denom: string
  amount: string
}

export const Coin = {
  toAmino: (coin: Coin_pb): CoinAmino => ({
    denom: coin.denom,
    amount: coin.amount,
  }),
  fromAmino: (coin: CoinAmino): Coin_pb => ({
    denom: coin.denom,
    amount: coin.amount,
  }),
}

export const DecCoin = {
  toAmino: (coin: DecCoin_pb): CoinAmino => {
    // amount must be integer
    const { denom, amount } = coin

    return {
      denom,
      amount: LegacyDec.toAmino(amount),
    }
  },
  fromAmino: (coin: CoinAmino): DecCoin_pb => {
    // amount must be integer with decimal 18
    const { denom, amount } = coin

    return {
      denom,
      amount: LegacyDec.fromAmino(amount),
    }
  },
}

export const LegacyDec = {
  toAmino: (dec: string): string => {
    const integerPart = dec.slice(0, -18)
    const decimalPart = dec.slice(-18).padStart(18, '0')

    return `${integerPart === '' ? '0' : integerPart}.${decimalPart}`
  },
  fromAmino: (dec: string): string => {
    const [integerPart, decimalPart] = dec.split('.')

    if (decimalPart.length !== 18) {
      throw Error('LegacyDec decimal part must be exactly 18 digits')
    }
    return (
      BigInt(integerPart) * BigInt(10n ** 18n) +
      BigInt(decimalPart)
    ).toString()
  },
}
