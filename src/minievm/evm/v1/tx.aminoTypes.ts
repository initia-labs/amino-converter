import {
  AccessTupleAmino,
  ParamsAmino,
  SetCodeAuthorizationAmino,
} from './types'

export interface MsgCreateAmino {
  sender: string
  code: string
  value: string
  access_list: AccessTupleAmino[] | null
}

export interface MsgCreate2Amino {
  sender: string
  code: string
  salt: string
  value: string
  access_list: AccessTupleAmino[] | null
}

export interface MsgCallAmino {
  sender: string
  contract_addr: string
  input: string
  value: string
  access_list: AccessTupleAmino[] | null
  auth_list?: SetCodeAuthorizationAmino[]
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
