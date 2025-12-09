import { CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { MsgAmino } from '../../../types'
import { BridgeInfoAmino, ParamsAmino } from './types'

export interface MsgExecuteMessagesAmino {
  sender: string
  messages: MsgAmino[]
}

export interface MsgFinalizeTokenDepositAmino {
  sender: string
  from: string
  to: string
  amount: CoinAmino
  sequence: string
  height: string
  base_denom: string
  data?: string
}

export interface MsgInitiateTokenWithdrawalAmino {
  sender: string
  to: string
  amount: CoinAmino
}

export interface MsgSetBridgeInfoAmino {
  sender: string
  bridge_info: BridgeInfoAmino
}

export interface MsgSpendFeePoolAmino {
  authority: string
  recipient: string
  amount: CoinAmino[] | null
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}

export interface MsgUpdateOracleAmino {
  sender: string
  height: string
  data?: string
}

export interface MsgMigrateTokenAmino {
  sender: string
  amount: CoinAmino
}
