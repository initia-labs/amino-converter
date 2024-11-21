import { CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { BatchInfoAmino, BridgeConfigAmino, ParamsAmino } from './types'

export interface MsgRecordBatchAmino {
  submitter: string
  bridge_id: string
  batch_bytes?: string
}

export interface MsgCreateBridgeAmino {
  creator: string
  config: BridgeConfigAmino
}

export interface MsgProposeOutputAmino {
  proposer: string
  bridge_id: string
  output_index: string
  l2_block_number: string
  output_root?: string
}

export interface MsgDeleteOutputAmino {
  challenger: string
  bridge_id: string
  output_index: string
}

export interface MsgInitiateTokenDepositAmino {
  sender: string
  bridge_id: string
  to: string
  amount: CoinAmino
  data?: string
}

export interface MsgFinalizeTokenWithdrawalAmino {
  sender: string
  bridge_id: string
  output_index: string
  withdrawal_proofs: string[]
  from: string
  to: string
  sequence: string
  amount: CoinAmino
  version: string
  storage_root: string
  last_block_hash: string
}

export interface MsgUpdateProposerAmino {
  authority: string
  bridge_id: string
  new_proposer: string
}

export interface MsgUpdateChallengerAmino {
  authority: string
  bridge_id: string
  challenger: string
}

export interface MsgUpdateBatchInfoAmino {
  authority: string
  bridge_id: string
  new_batch_info: BatchInfoAmino
}

export interface MsgUpdateOracleConfigAmino {
  authority: string
  bridge_id: string
  oracle_enabled: boolean
}

export interface MsgUpdateMetadataAmino {
  authority: string
  bridge_id: string
  metadata: string
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
