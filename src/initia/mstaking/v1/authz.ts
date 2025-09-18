import {
  authorizationTypeFromJSON,
  authorizationTypeToJSON,
  StakeAuthorization as StakeAuthorization_pb,
} from '@initia/initia.proto/initia/mstaking/v1/authz'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'

export const StakeAuthorization = {
  toAmino: (msg: StakeAuthorization_pb): StakeAuthorizationAmino => ({
    max_tokens: msg.maxTokens.map((coin) => Coin.toAmino(coin)),
    allow_list: msg.allowList,
    deny_list: msg.denyList,
    authorization_type: authorizationTypeToJSON(msg.authorizationType),
  }),
  fromAmino: (msg: StakeAuthorizationAmino): StakeAuthorization_pb => ({
    maxTokens: msg.max_tokens.map((coin) => Coin.fromAmino(coin)),
    allowList: msg.allow_list,
    denyList: msg.deny_list,
    authorizationType: authorizationTypeFromJSON(msg.authorization_type),
  }),
}

export interface StakeAuthorizationAmino {
  max_tokens: CoinAmino[]
  allow_list?: Validators
  deny_list?: Validators
  authorization_type: string
}

interface Validators {
  address: string[]
}
