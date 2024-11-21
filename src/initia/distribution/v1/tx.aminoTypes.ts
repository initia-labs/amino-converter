import { CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { ParamsAmino } from './types'

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}

export interface MsgDepositValidatorRewardsPoolAmino {
  depositor: string
  validator_address: string
  denom: string
  amount: CoinAmino[]
}
