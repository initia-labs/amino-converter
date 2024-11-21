import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgSetDenomMetadata } from '@initia/initia.proto/initia/bank/v1/tx'
import { Metadata as Metadata_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgSetDenomMetadataAmino } from './tx.aminoTypes'
import { Metadata } from '../../../cosmos/bank/v1beta1/metadata'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.bank.v1.MsgSetDenomMetadata', MsgSetDenomMetadata],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.bank.v1.MsgSetDenomMetadata': {
    aminoType: 'bank/MsgSetDenomMetadata',
    toAmino: (msg: MsgSetDenomMetadata): MsgSetDenomMetadataAmino => ({
      authority: msg.authority,
      metadata: Metadata.toAmino(msg.metadata as Metadata_pb),
    }),
    fromAmino: (msg: MsgSetDenomMetadataAmino): MsgSetDenomMetadata => ({
      authority: msg.authority,
      metadata: Metadata.fromAmino(msg.metadata),
    }),
  },
}
