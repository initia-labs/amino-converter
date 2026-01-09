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

    const integerPart = amount.slice(0, -18)
    const decimalPart = amount.slice(-18).padStart(18, '0')

    return {
      denom,
      amount: `${integerPart === '' ? '0' : integerPart}.${decimalPart}`,
    }
  },
  fromAmino: (coin: CoinAmino): DecCoin_pb => {
    // amount must be integer with decimal 18
    const { denom, amount } = coin
    const [integerPart, decimalPart] = amount.split('.')
    const newAmount =
      BigInt(integerPart) * BigInt(10n ** 18n) + BigInt(decimalPart)

    return {
      denom,
      amount: newAmount.toString(),
    }
  },
}
