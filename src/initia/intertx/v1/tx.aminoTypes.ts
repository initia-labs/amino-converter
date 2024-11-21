import { Order } from '../../../ibc/core/channel/v1/channel'
import { MsgAmino } from '../../../types'

export interface MsgRegisterAccountAmino {
  owner: string
  connection_id: string
  version: string
  ordering: Order
}

export interface MsgSubmitTxAmino {
  owner: string
  connection_id: string
  msg?: MsgAmino
}
