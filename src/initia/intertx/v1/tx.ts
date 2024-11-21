import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgRegisterAccountAmino, MsgSubmitTxAmino } from './tx.aminoTypes'
import {
  MsgRegisterAccount,
  MsgSubmitTx,
} from '@initia/initia.proto/initia/intertx/v1/tx'
import { createMsgConverter } from '../../../utils'
import { Any } from '@initia/initia.proto/google/protobuf/any'
import { MsgAmino } from '../../../types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.intertx.v1.MsgRegisterAccount', MsgRegisterAccount],
  ['/initia.intertx.v1.MsgSubmitTx', MsgSubmitTx],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.intertx.v1.MsgRegisterAccount': {
    aminoType: 'intertx/MsgRegisterAccount',
    toAmino: (msg: MsgRegisterAccount): MsgRegisterAccountAmino => ({
      owner: msg.owner,
      connection_id: msg.connectionId,
      version: msg.version,
      ordering: msg.ordering,
    }),
    fromAmino: (msg: MsgRegisterAccountAmino): MsgRegisterAccount => ({
      owner: msg.owner,
      connectionId: msg.connection_id,
      version: msg.version,
      ordering: msg.ordering,
    }),
  },
}

export function generateMsgSubmitTxAminoConverter(
  registry: readonly [string, GeneratedType][],
  aminoConverters: AminoConverters
): AminoConverters {
  const { toAminoMsg, toProtoMsg } = createMsgConverter(
    registry,
    aminoConverters
  )
  return {
    '/initia.intertx.v1.MsgSubmitTx': {
      aminoType: 'intertx/MsgSubmitTx',
      toAmino: (msg: MsgSubmitTx): MsgSubmitTxAmino => ({
        owner: msg.owner,
        connection_id: msg.connectionId,
        msg: toAminoMsg(msg.msg as Any),
      }),
      fromAmino: (msg: MsgSubmitTxAmino): MsgSubmitTx => ({
        owner: msg.owner,
        connectionId: msg.connection_id,
        msg: toProtoMsg(msg.msg as MsgAmino),
      }),
    },
  }
}
