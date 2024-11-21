import { Any } from '@initia/initia.proto/google/protobuf/any'

export interface MsgAmino {
  type: string
  value: any
}

export interface MsgConverter {
  toAminoMsg: (msg: Any) => MsgAmino
  toProtoMsg: (msg: MsgAmino) => Any
}
