import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgCreateBridge,
  MsgDeleteOutput,
  MsgFinalizeTokenWithdrawal,
  MsgInitiateTokenDeposit,
  MsgProposeOutput,
  MsgRecordBatch,
  MsgUpdateBatchInfo,
  MsgUpdateChallenger,
  MsgUpdateMetadata,
  MsgUpdateOracleConfig,
  MsgUpdateProposer,
  MsgUpdateParams,
} from '@initia/opinit.proto/opinit/ophost/v1/tx'

import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgCreateBridgeAmino,
  MsgDeleteOutputAmino,
  MsgFinalizeTokenWithdrawalAmino,
  MsgInitiateTokenDepositAmino,
  MsgProposeOutputAmino,
  MsgRecordBatchAmino,
  MsgUpdateBatchInfoAmino,
  MsgUpdateChallengerAmino,
  MsgUpdateMetadataAmino,
  MsgUpdateOracleConfigAmino,
  MsgUpdateParamsAmino,
  MsgUpdateProposerAmino,
} from './tx.aminoTypes'
import { Coin } from '../../../cosmos/base/v1beta1/coin'
import { Coin as Coin_pb } from '@initia/initia.proto/cosmos/base/v1beta1/coin'
import { base64ToBytes, bytesToBase64 } from '../../../utils'
import { BatchInfo, BridgeConfig, Params } from './types'
import {
  BatchInfo as BatchInfo_pb,
  BridgeConfig as BridgeConfig_pb,
  Params as Params_pb,
} from '@initia/opinit.proto/opinit/ophost/v1/types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/opinit.ophost.v1.MsgRecordBatch', MsgRecordBatch],
  ['/opinit.ophost.v1.MsgCreateBridge', MsgCreateBridge],
  ['/opinit.ophost.v1.MsgProposeOutput', MsgProposeOutput],
  ['/opinit.ophost.v1.MsgDeleteOutput', MsgDeleteOutput],
  ['/opinit.ophost.v1.MsgInitiateTokenDeposit', MsgInitiateTokenDeposit],
  ['/opinit.ophost.v1.MsgFinalizeTokenWithdrawal', MsgFinalizeTokenWithdrawal],
  ['/opinit.ophost.v1.MsgUpdateProposer', MsgUpdateProposer],
  ['/opinit.ophost.v1.MsgUpdateChallenger', MsgUpdateChallenger],
  ['/opinit.ophost.v1.MsgUpdateBatchInfo', MsgUpdateBatchInfo],
  ['/opinit.ophost.v1.MsgUpdateOracleConfig', MsgUpdateOracleConfig],
  ['/opinit.ophost.v1.MsgUpdateMetadata', MsgUpdateMetadata],
  ['/opinit.ophost.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/opinit.ophost.v1.MsgRecordBatch': {
    aminoType: 'ophost/MsgRecordBatch',
    toAmino: (msg: MsgRecordBatch): MsgRecordBatchAmino => ({
      submitter: msg.submitter,
      bridge_id: msg.bridgeId.toString(),
      batch_bytes:
        msg.batchBytes.length === 0 ? undefined : bytesToBase64(msg.batchBytes),
    }),
    fromAmino: (msg: MsgRecordBatchAmino): MsgRecordBatch => ({
      submitter: msg.submitter,
      bridgeId: BigInt(msg.bridge_id),
      batchBytes: msg.batch_bytes
        ? base64ToBytes(msg.batch_bytes)
        : new Uint8Array([]),
    }),
  },

  '/opinit.ophost.v1.MsgCreateBridge': {
    aminoType: 'ophost/MsgCreateBridge',
    toAmino: (msg: MsgCreateBridge): MsgCreateBridgeAmino => ({
      creator: msg.creator,
      config: BridgeConfig.toAmino(msg.config as BridgeConfig_pb),
    }),
    fromAmino: (msg: MsgCreateBridgeAmino): MsgCreateBridge => ({
      creator: msg.creator,
      config: BridgeConfig.fromAmino(msg.config),
    }),
  },

  '/opinit.ophost.v1.MsgProposeOutput': {
    aminoType: 'ophost/MsgProposeOutput',
    toAmino: (msg: MsgProposeOutput): MsgProposeOutputAmino => ({
      proposer: msg.proposer,
      bridge_id: msg.bridgeId.toString(),
      output_index: msg.outputIndex.toString(),
      l2_block_number: msg.l2BlockNumber.toString(),
      output_root:
        msg.outputRoot.length === 0 ? undefined : bytesToBase64(msg.outputRoot),
    }),
    fromAmino: (msg: MsgProposeOutputAmino): MsgProposeOutput => ({
      proposer: msg.proposer,
      bridgeId: BigInt(msg.bridge_id),
      outputIndex: BigInt(msg.output_index),
      l2BlockNumber: BigInt(msg.l2_block_number),
      outputRoot: msg.output_root
        ? base64ToBytes(msg.output_root)
        : new Uint8Array([]),
    }),
  },

  '/opinit.ophost.v1.MsgDeleteOutput': {
    aminoType: 'ophost/MsgDeleteOutput',
    toAmino: (msg: MsgDeleteOutput): MsgDeleteOutputAmino => ({
      challenger: msg.challenger,
      bridge_id: msg.bridgeId.toString(),
      output_index: msg.outputIndex.toString(),
    }),
    fromAmino: (msg: MsgDeleteOutputAmino): MsgDeleteOutput => ({
      challenger: msg.challenger,
      bridgeId: BigInt(msg.bridge_id),
      outputIndex: BigInt(msg.output_index),
    }),
  },

  '/opinit.ophost.v1.MsgInitiateTokenDeposit': {
    aminoType: 'ophost/MsgInitiateTokenDeposit',
    toAmino: (msg: MsgInitiateTokenDeposit): MsgInitiateTokenDepositAmino => ({
      sender: msg.sender,
      bridge_id: msg.bridgeId.toString(),
      to: msg.to,
      amount: Coin.toAmino(msg.amount as Coin_pb),
      data: msg.data.length === 0 ? undefined : bytesToBase64(msg.data),
    }),
    fromAmino: (
      msg: MsgInitiateTokenDepositAmino
    ): MsgInitiateTokenDeposit => ({
      sender: msg.sender,
      bridgeId: BigInt(msg.bridge_id),
      to: msg.to,
      amount: Coin.fromAmino(msg.amount),
      data: msg.data ? base64ToBytes(msg.data) : new Uint8Array([]),
    }),
  },

  '/opinit.ophost.v1.MsgFinalizeTokenWithdrawal': {
    aminoType: 'ophost/MsgFinalizeTokenWithdrawal',
    toAmino: (
      msg: MsgFinalizeTokenWithdrawal
    ): MsgFinalizeTokenWithdrawalAmino => ({
      sender: msg.sender,
      bridge_id: msg.bridgeId.toString(),
      output_index: msg.outputIndex.toString(),
      withdrawal_proofs: msg.withdrawalProofs.map((proof) =>
        bytesToBase64(proof)
      ),
      from: msg.from,
      to: msg.to,
      sequence: msg.sequence.toString(),
      amount: Coin.toAmino(msg.amount as Coin_pb),
      version: bytesToBase64(msg.version),
      storage_root: bytesToBase64(msg.storageRoot),
      last_block_hash: bytesToBase64(msg.lastBlockHash),
    }),
    fromAmino: (
      msg: MsgFinalizeTokenWithdrawalAmino
    ): MsgFinalizeTokenWithdrawal => ({
      sender: msg.sender,
      bridgeId: BigInt(msg.bridge_id),
      outputIndex: BigInt(msg.output_index),
      withdrawalProofs: msg.withdrawal_proofs.map((proof) =>
        base64ToBytes(proof)
      ),
      from: msg.from,
      to: msg.to,
      sequence: BigInt(msg.sequence),
      amount: Coin.fromAmino(msg.amount),
      version: base64ToBytes(msg.version),
      storageRoot: base64ToBytes(msg.storage_root),
      lastBlockHash: base64ToBytes(msg.last_block_hash),
    }),
  },

  '/opinit.ophost.v1.MsgUpdateProposer': {
    aminoType: 'ophost/MsgUpdateProposer',
    toAmino: (msg: MsgUpdateProposer): MsgUpdateProposerAmino => ({
      authority: msg.authority,
      bridge_id: msg.bridgeId.toString(),
      new_proposer: msg.newProposer,
    }),
    fromAmino: (msg: MsgUpdateProposerAmino): MsgUpdateProposer => ({
      authority: msg.authority,
      bridgeId: BigInt(msg.bridge_id),
      newProposer: msg.new_proposer,
    }),
  },

  '/opinit.ophost.v1.MsgUpdateChallenger': {
    aminoType: 'ophost/MsgUpdateChallenger',
    toAmino: (msg: MsgUpdateChallenger): MsgUpdateChallengerAmino => ({
      authority: msg.authority,
      bridge_id: msg.bridgeId.toString(),
      challenger: msg.challenger,
    }),
    fromAmino: (msg: MsgUpdateChallengerAmino): MsgUpdateChallenger => ({
      authority: msg.authority,
      bridgeId: BigInt(msg.bridge_id),
      challenger: msg.challenger,
    }),
  },

  '/opinit.ophost.v1.MsgUpdateBatchInfo': {
    aminoType: 'ophost/MsgUpdateBatchInfo',
    toAmino: (msg: MsgUpdateBatchInfo): MsgUpdateBatchInfoAmino => ({
      authority: msg.authority,
      bridge_id: msg.bridgeId.toString(),
      new_batch_info: BatchInfo.toAmino(msg.newBatchInfo as BatchInfo_pb),
    }),
    fromAmino: (msg: MsgUpdateBatchInfoAmino): MsgUpdateBatchInfo => ({
      authority: msg.authority,
      bridgeId: BigInt(msg.bridge_id),
      newBatchInfo: BatchInfo.fromAmino(msg.new_batch_info),
    }),
  },

  '/opinit.ophost.v1.MsgUpdateOracleConfig': {
    aminoType: 'ophost/MsgUpdateOracleConfig',
    toAmino: (msg: MsgUpdateOracleConfig): MsgUpdateOracleConfigAmino => ({
      authority: msg.authority,
      bridge_id: msg.bridgeId.toString(),
      oracle_enabled: msg.oracleEnabled,
    }),
    fromAmino: (msg: MsgUpdateOracleConfigAmino): MsgUpdateOracleConfig => ({
      authority: msg.authority,
      bridgeId: BigInt(msg.bridge_id),
      oracleEnabled: msg.oracle_enabled,
    }),
  },

  '/opinit.ophost.v1.MsgUpdateMetadata': {
    aminoType: 'ophost/MsgUpdateMetadata',
    toAmino: (msg: MsgUpdateMetadata): MsgUpdateMetadataAmino => ({
      authority: msg.authority,
      bridge_id: msg.bridgeId.toString(),
      metadata: bytesToBase64(msg.metadata),
    }),
    fromAmino: (msg: MsgUpdateMetadataAmino): MsgUpdateMetadata => ({
      authority: msg.authority,
      bridgeId: BigInt(msg.bridge_id),
      metadata: base64ToBytes(msg.metadata),
    }),
  },

  '/opinit.ophost.v1.MsgUpdateParams': {
    aminoType: 'ophost/MsgUpdateParams',
    toAmino: (msg: MsgUpdateParams): MsgUpdateParamsAmino => ({
      authority: msg.authority,
      params: Params.toAmino(msg.params as Params_pb),
    }),
    fromAmino: (msg: MsgUpdateParamsAmino): MsgUpdateParams => ({
      authority: msg.authority,
      params: Params.fromAmino(msg.params),
    }),
  },
}
