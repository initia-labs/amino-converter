import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgTransfer,
  MsgUpdateParams,
} from '@initia/initia.proto/ibc/applications/nft_transfer/v1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgNftTransferAmino, MsgUpdateParamsAmino } from './tx.aminoTypes'
import { Height } from '../../core/client/v1/height'
import { Params } from './types'
import { Params as Params_pb } from '@initia/initia.proto/ibc/applications/nft_transfer/v1/types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/ibc.applications.nft_transfer.v1.MsgTransfer', MsgTransfer],
  ['/ibc.applications.nft_transfer.v1.Params', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/ibc.applications.nft_transfer.v1.MsgTransfer': {
    aminoType: 'nft_transfer/MsgTransfer',
    toAmino: (msg: MsgTransfer): MsgNftTransferAmino => ({
      source_port: msg.sourcePort,
      source_channel: msg.sourceChannel,
      class_id: msg.classId,
      token_ids: msg.tokenIds.length === 0 ? undefined : msg.tokenIds,
      sender: msg.sender,
      receiver: msg.receiver,
      timeout_height: msg.timeoutHeight
        ? Height.toAmino(msg.timeoutHeight)
        : {},
      timeout_timestamp:
        msg.timeoutTimestamp === BigInt(0)
          ? undefined
          : msg.timeoutTimestamp.toString(),
      memo: msg.memo === '' ? undefined : msg.memo,
    }),
    fromAmino: (msg: MsgNftTransferAmino): MsgTransfer => ({
      sourcePort: msg.source_port,
      sourceChannel: msg.source_channel,
      classId: msg.class_id,
      tokenIds: msg.token_ids ?? [],
      sender: msg.sender,
      receiver: msg.receiver,
      timeoutHeight: Height.fromAmino(msg.timeout_height),
      timeoutTimestamp: msg.timeout_timestamp
        ? BigInt(msg.timeout_timestamp)
        : BigInt(0),
      memo: msg.memo ?? '',
    }),
  },
  '/ibc.applications.nft_transfer.v1.Params': {
    aminoType: 'nft-transfer/Params',
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
