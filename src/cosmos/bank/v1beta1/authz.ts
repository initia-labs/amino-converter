import { SendAuthorization as SendAuthorization_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/authz'
import { Coin, CoinAmino } from '../../base/v1beta1/coin'

export const SendAuthorization = {
  toAmino: (msg: SendAuthorization_pb): SendAuthorizationAmino => ({
    spend_limit: msg.spendLimit.map((coin) => Coin.toAmino(coin)),
    allow_list: msg.allowList,
  }),
  fromAmino: (msg: SendAuthorizationAmino): SendAuthorization_pb => ({
    spendLimit: msg.spend_limit.map((coin) => Coin.fromAmino(coin)),
    allowList: msg.allow_list,
  }),
}

export interface SendAuthorizationAmino {
  spend_limit: CoinAmino[]
  allow_list: string[]
}
