import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgUpdateParams } from '@initia/initia.proto/initia/reward/v1/tx'
import { Params as Params_pb } from '@initia/initia.proto/initia/reward/v1/types'
import { Params } from './types'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgUpdateParamsAmino } from './tx.aminoTypes'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.reward.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.reward.v1.MsgUpdateParams': {
    aminoType: 'reward/MsgUpdateParams',
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
