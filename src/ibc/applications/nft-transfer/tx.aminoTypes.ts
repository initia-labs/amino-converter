import { HeightAmino } from '../../core/client/v1/height'
import { ParamsAmino } from './types'

export interface MsgNftTransferAmino {
  source_port: string
  source_channel: string
  class_id: string
  token_ids: string[]
  sender: string
  receiver: string
  timeout_height: HeightAmino
  timeout_timestamp?: string
  memo?: string
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
