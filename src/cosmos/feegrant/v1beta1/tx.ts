import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgGrantAllowance,
  MsgPruneAllowances,
  MsgRevokeAllowance,
} from '@initia/initia.proto/cosmos/feegrant/v1beta1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgGrantAllowanceAmino,
  MsgPruneAllowancesAmino,
  MsgRevokeAllowanceAmino,
} from './tx.aminoTypes'
import { Allowance } from './feegrant'
import { Any } from '@initia/initia.proto/google/protobuf/any'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/cosmos.feegrant.v1beta1.MsgGrantAllowance', MsgGrantAllowance],
  ['/cosmos.feegrant.v1beta1.MsgRevokeAllowance', MsgRevokeAllowance],
  ['/cosmos.feegrant.v1beta1.MsgPruneAllowances', MsgPruneAllowances],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    aminoType: 'cosmos-sdk/MsgGrantAllowance',
    toAmino: (msg: MsgGrantAllowance): MsgGrantAllowanceAmino => ({
      granter: msg.granter,
      grantee: msg.grantee,
      allowance: Allowance.toAmino(msg.allowance as Any),
    }),
    fromAmino: (msg: MsgGrantAllowanceAmino): MsgGrantAllowance => ({
      granter: msg.granter,
      grantee: msg.grantee,
      allowance: Allowance.fromAmino(msg.allowance),
    }),
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    aminoType: 'cosmos-sdk/MsgRevokeAllowance',
    toAmino: (msg: MsgRevokeAllowance): MsgRevokeAllowanceAmino => ({
      granter: msg.granter,
      grantee: msg.grantee,
    }),
    fromAmino: (msg: MsgRevokeAllowanceAmino): MsgRevokeAllowance => ({
      granter: msg.granter,
      grantee: msg.grantee,
    }),
  },
  '/cosmos.feegrant.v1beta1.MsgPruneAllowances': {
    aminoType: 'cosmos-sdk/MsgPruneAllowances',
    toAmino: (msg: MsgPruneAllowances): MsgPruneAllowancesAmino => ({
      pruner: msg.pruner,
    }),
    fromAmino: (msg: MsgPruneAllowancesAmino): MsgPruneAllowances => ({
      pruner: msg.pruner,
    }),
  },
}
