import { AllowanceAmino } from './feegrant'

export interface MsgGrantAllowanceAmino {
  granter: string
  grantee: string
  allowance: AllowanceAmino
}

export interface MsgRevokeAllowanceAmino {
  granter: string
  grantee: string
}

export interface MsgPruneAllowancesAmino {
  pruner: string
}
