import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgUpdateACLAmino, MsgUpdateParamsAmino } from './tx.aminoTypes'
import {
  MsgUpdateACL,
  MsgUpdateParams,
} from '@initia/initia.proto/initia/ibchooks/v1/tx'
import { Params } from './types'
import { Params as Params_pb } from '@initia/initia.proto/initia/ibchooks/v1/types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.ibchooks.v1.MsgUpdateACL', MsgUpdateACL],
  ['/initia.ibchooks.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.ibchooks.v1.MsgUpdateACL': {
    aminoType: 'ibchooks/MsgUpdateACL',
    toAmino: (msg: MsgUpdateACL): MsgUpdateACLAmino => ({
      authority: msg.authority,
      address: msg.address,
      allowed: msg.allowed,
    }),
    fromAmino: (msg: MsgUpdateACLAmino): MsgUpdateACL => ({
      authority: msg.authority,
      address: msg.address,
      allowed: msg.allowed,
    }),
  },
  '/initia.ibchooks.v1.MsgUpdateParams': {
    aminoType: 'ibchooks/MsgUpdateParams',
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
