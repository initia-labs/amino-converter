import {
  BatchInfo as BatchInfo_pb,
  BridgeConfig as BridgeConfig_pb,
  Params as Params_pb,
  batchInfo_ChainTypeFromJSON,
  batchInfo_ChainTypeToJSON,
} from '@initia/opinit.proto/opinit/ophost/v1/types'
import { Duration, DurationAmino } from '../../../google/protobuf/duration'
import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'
import { base64ToBytes, bytesToBase64 } from '../../../utils'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'

export const BridgeConfig = {
  toAmino: (bridgeConfig: BridgeConfig_pb): BridgeConfigAmino => ({
    challenger: bridgeConfig.challenger,
    proposer: bridgeConfig.proposer,
    batch_info: BatchInfo.toAmino(bridgeConfig.batchInfo as BatchInfo_pb),
    submission_interval: Duration.toAmino(
      bridgeConfig.submissionInterval as Duration_pb
    ),
    finalization_period: Duration.toAmino(
      bridgeConfig.finalizationPeriod as Duration_pb
    ),
    submission_start_height: bridgeConfig.submissionStartHeight.toString(),
    oracle_enabled: bridgeConfig.oracleEnabled,
    metadata:
      bridgeConfig.metadata.length === 0
        ? undefined
        : bytesToBase64(bridgeConfig.metadata),
  }),
  fromAmino: (bridgeConfig: BridgeConfigAmino): BridgeConfig_pb => ({
    challenger: bridgeConfig.challenger,
    proposer: bridgeConfig.proposer,
    batchInfo: BatchInfo.fromAmino(bridgeConfig.batch_info),
    submissionInterval: Duration.fromAmino(bridgeConfig.submission_interval),
    finalizationPeriod: Duration.fromAmino(bridgeConfig.finalization_period),
    submissionStartHeight: BigInt(bridgeConfig.submission_start_height),
    oracleEnabled: bridgeConfig.oracle_enabled,
    metadata: bridgeConfig.metadata
      ? base64ToBytes(bridgeConfig.metadata)
      : new Uint8Array([]),
  }),
}

export const BatchInfo = {
  toAmino: (batchInfo: BatchInfo_pb): BatchInfoAmino => ({
    submitter: batchInfo.submitter,
    chain_type: batchInfo_ChainTypeToJSON(batchInfo.chainType),
  }),
  fromAmino: (batchInfo: BatchInfoAmino): BatchInfo_pb => ({
    submitter: batchInfo.submitter,
    chainType: batchInfo_ChainTypeFromJSON(batchInfo.chain_type),
  }),
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    registration_fee:
      params.registrationFee.length === 0
        ? null
        : params.registrationFee.map((coin) => Coin.toAmino(coin)),
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    registrationFee: params.registration_fee
      ? params.registration_fee.map((coin) => Coin.fromAmino(coin))
      : [],
  }),
}

export interface BridgeConfigAmino {
  challenger: string
  proposer: string
  batch_info: BatchInfoAmino
  submission_interval: DurationAmino
  finalization_period: DurationAmino
  submission_start_height: string
  oracle_enabled: boolean
  metadata?: string
}

export interface BatchInfoAmino {
  submitter: string
  chain_type: string
}

export interface ParamsAmino {
  registration_fee: CoinAmino[] | null
}
