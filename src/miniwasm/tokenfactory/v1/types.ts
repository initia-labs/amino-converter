import { Params as Params_pb } from '@initia/initia.proto/miniwasm/tokenfactory/v1/params'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { Coin as Coin_pb } from '@initia/initia.proto/cosmos/base/v1beta1/coin'

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    denom_creation_fee: params.denomCreationFee.map((coin) =>
      Coin.toAmino(coin)
    ),
    denom_creation_gas_consume: params.denomCreationGasConsume.toString(),
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    denomCreationFee: params.denom_creation_fee.map((coin) =>
      Coin.fromAmino(coin as Coin_pb)
    ),
    denomCreationGasConsume: BigInt(params.denom_creation_gas_consume),
  }),
}

export interface ParamsAmino {
  denom_creation_fee: CoinAmino[]
  denom_creation_gas_consume: string
}
