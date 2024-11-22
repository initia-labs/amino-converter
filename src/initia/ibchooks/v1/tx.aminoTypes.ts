import { ParamsAmino } from './types'

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}

export interface MsgUpdateACLAmino {
  authority: string
  address: string
  allowed: boolean
}
