import { AccessTupleAmino, ParamsAmino } from './types'

export interface MsgCreateAmino {
  sender: string
  code: string
  value: string
  access_list: AccessTupleAmino[]
}

export interface MsgCreate2Amino {
  sender: string
  code: string
  salt: string
  value: string
  access_list: AccessTupleAmino[]
}

export interface MsgCallAmino {
  sender: string
  contract_addr: string
  input: string
  value: string
  access_list: AccessTupleAmino[]
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
