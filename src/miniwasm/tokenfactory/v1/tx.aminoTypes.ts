import { MetadataAmino } from '../../../cosmos/bank/v1beta1/metadata'
import { CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { ParamsAmino } from './types'

export interface MsgCreateDenomAmino {
  sender: string
  subdenom: string
}

export interface MsgMintAmino {
  sender: string
  amount: CoinAmino
  mint_to_address: string
}

export interface MsgBurnAmino {
  sender: string
  amount: CoinAmino
  burn_from_address: string
}

export interface MsgChangeAdminAmino {
  sender: string
  denom: string
  new_admin: string
}

export interface MsgSetBeforeSendHookAmino {
  sender: string
  denom: string
  cosmwasm_address: string
}

export interface MsgSetDenomMetadataAmino {
  sender: string
  metadata: MetadataAmino
}

export interface MsgForceTransferAmino {
  sender: string
  amount: CoinAmino
  transfer_from_address: string
  transfer_to_address: string
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
