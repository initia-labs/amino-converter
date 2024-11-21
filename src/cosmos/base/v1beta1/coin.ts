import { Coin as Coin_pb } from '@initia/initia.proto/cosmos/base/v1beta1/coin'

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
    amount: coin.denom,
  }),
}
