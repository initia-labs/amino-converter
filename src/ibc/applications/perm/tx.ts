import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgUpdateAdmin,
  MsgUpdatePermissionedRelayers,
} from '@initia/initia.proto/ibc/applications/perm/v1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgUpdateAdminAmino,
  MsgUpdatePermissionedRelayersAmino,
} from './tx.aminoTypes'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/ibc.applications.perm.v1.MsgUpdateAdmin', MsgUpdateAdmin],
  [
    '/ibc.applications.perm.v1.MsgUpdatePermissionedRelayers',
    MsgUpdatePermissionedRelayers,
  ],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/ibc.applications.perm.v1.MsgUpdateAdmin': {
    aminoType: 'ibc-perm/MsgUpdateAdmin',
    toAmino: (msg: MsgUpdateAdmin): MsgUpdateAdminAmino => ({
      authority: msg.authority,
      channel_id: msg.channelId,
      port_id: msg.portId,
      admin: msg.admin,
    }),
    fromAmino: (msg: MsgUpdateAdminAmino): MsgUpdateAdmin => ({
      authority: msg.authority,
      channelId: msg.channel_id,
      portId: msg.port_id,
      admin: msg.admin,
    }),
  },
  '/ibc.applications.perm.v1.MsgUpdatePermissionedRelayers': {
    aminoType: 'ibc-perm/MsgUpdatePermissionedRelayers',
    toAmino: (
      msg: MsgUpdatePermissionedRelayers
    ): MsgUpdatePermissionedRelayersAmino => ({
      authority: msg.authority,
      channel_id: msg.channelId,
      port_id: msg.portId,
      relayers: msg.relayers.length === 0 ? undefined : msg.relayers,
    }),
    fromAmino: (
      msg: MsgUpdatePermissionedRelayersAmino
    ): MsgUpdatePermissionedRelayers => ({
      authority: msg.authority,
      channelId: msg.channel_id,
      portId: msg.port_id,
      relayers: msg.relayers ?? [],
    }),
  },
}
