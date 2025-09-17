import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgGrant } from '@initia/initia.proto/cosmos/authz/v1beta1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgGrantAmino } from './tx.aminoTypes'
import { Grant } from './authz'
import { Grant as Grant_pb } from '@initia/initia.proto/cosmos/authz/v1beta1/authz'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/cosmos.feegrant.v1beta1.MsgGrantAllowance', MsgGrant],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/cosmos.authz.v1beta1.MsgGrant': {
    aminoType: 'cosmos-sdk/MsgGrant',
    toAmino: (msg: MsgGrant): MsgGrantAmino => ({
      granter: msg.granter,
      grantee: msg.grantee,
      grant: Grant.toAmino(msg.grant as Grant_pb),
    }),
    fromAmino: (msg: MsgGrantAmino): MsgGrant => ({
      granter: msg.granter,
      grantee: msg.grantee,
      grant: Grant.fromAmino(msg.grant),
    }),
  },
}
