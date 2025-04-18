export interface MsgUpdateAdminAmino {
  authority: string
  channel_id: string
  port_id: string
  admin: string
}

export interface MsgUpdatePermissionedRelayersAmino {
  authority: string
  channel_id: string
  port_id: string
  relayers?: string[]
}
