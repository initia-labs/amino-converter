import { CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { PubKeyAminoMsg } from '../../../cosmos/crypto/ed25519/keys'
import { CommissionRatesAmino, DescriptionAmino, ParamsAmino } from './types'

export interface MsgCreateValidatorAmino {
  description: DescriptionAmino
  commission: CommissionRatesAmino
  validator_address: string
  pubkey: PubKeyAminoMsg
  amount: CoinAmino[]
}

export interface MsgEditValidatorAmino {
  description: DescriptionAmino
  validator_address: string
  commission_rate?: string
}

export interface MsgDelegateAmino {
  delegator_address: string
  validator_address: string
  amount: CoinAmino[]
}

export interface MsgBeginRedelegateAmino {
  delegator_address: string
  validator_src_address: string
  validator_dst_address: string
  amount: CoinAmino[]
}

export interface MsgUndelegateAmino {
  delegator_address: string
  validator_address: string
  amount: CoinAmino[]
}

export interface MsgCancelUnbondingDelegationAmino {
  delegator_address: string
  validator_address: string
  amount: CoinAmino[]
  creation_height: string
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
