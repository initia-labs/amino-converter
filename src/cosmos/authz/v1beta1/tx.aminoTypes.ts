import { MsgAmino } from '../../../types'
import { GrantAmino } from './authz'

export interface MsgGrantAmino {
  granter: string
  grantee: string
  grant: GrantAmino
}

export interface MsgExecAmino {
  grantee: string
  msgs: MsgAmino[]
}

export interface MsgRevokeAmino {
  granter: string
  grantee: string
  msg_type_url: string
}
