import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from '@initia/initia.proto/cosmos/authz/v1beta1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgExecAmino, MsgGrantAmino, MsgRevokeAmino } from './tx.aminoTypes'
import { Grant } from './authz'
import { Grant as Grant_pb } from '@initia/initia.proto/cosmos/authz/v1beta1/authz'
import { createMsgConverter } from '../../../utils'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/cosmos.authz.v1beta1.MsgGrant', MsgGrant],
  ['/cosmos.authz.v1beta1.MsgExec', MsgExec],
  ['/cosmos.authz.v1beta1.MsgRevoke', MsgRevoke],
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

  '/cosmos.authz.v1beta1.MsgRevoke': {
    aminoType: 'cosmos-sdk/MsgRevoke',
    toAmino: (msg: MsgRevoke): MsgRevokeAmino => ({
      granter: msg.granter,
      grantee: msg.grantee,
      msg_type_url: msg.msgTypeUrl,
    }),
    fromAmino: (msg: MsgRevokeAmino): MsgRevoke => ({
      granter: msg.granter,
      grantee: msg.grantee,
      msgTypeUrl: msg.msg_type_url,
    }),
  },
}

export function generateMsgExecAminoConverter(
  registry: readonly [string, GeneratedType][],
  aminoConverters: AminoConverters
): AminoConverters {
  const { toAminoMsg, toProtoMsg } = createMsgConverter(
    registry,
    aminoConverters
  )
  return {
    '/cosmos.authz.v1beta1.MsgExec': {
      aminoType: 'cosmos-sdk/MsgExec',
      toAmino: (msg: MsgExec): MsgExecAmino => ({
        grantee: msg.grantee,
        msgs: msg.msgs.map((msg) => toAminoMsg(msg)),
      }),
      fromAmino: (msg: MsgExecAmino): MsgExec => ({
        grantee: msg.grantee,
        msgs: msg.msgs.map((msg) => toProtoMsg(msg)),
      }),
    },
  }
}
