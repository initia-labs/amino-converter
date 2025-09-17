import { GrantAmino } from './authz'

export interface MsgGrantAmino {
  granter: string
  grantee: string
  grant: GrantAmino
}
