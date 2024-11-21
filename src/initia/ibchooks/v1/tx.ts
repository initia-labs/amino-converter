import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgUpdateParamsAmino } from './tx.aminoTypes'
import { MsgUpdateParams } from '@initia/initia.proto/initia/gov/v1/tx'
import { Params } from './types'
import { Params as Params_pb } from '@initia/initia.proto/initia/gov/v1/gov'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.gov.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.gov.v1.MsgUpdateParams': {
    aminoType: 'gov/MsgUpdateParams',
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
