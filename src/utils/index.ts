import { AminoConverters } from '@cosmjs/stargate'
import { MsgAmino, MsgConverter } from '../types'
import { Any } from '@initia/initia.proto/google/protobuf/any'
import { GeneratedType } from '@cosmjs/proto-signing'

// base64 convert
export function bytesToBase64(uint8Array: Uint8Array) {
  const binaryString = String.fromCharCode(...uint8Array)
  return btoa(binaryString)
}

export function base64ToBytes(base64Str: string) {
  const binaryString = atob(base64Str)

  const uint8Array = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }
  return uint8Array
}

export function createMsgConverter(
  registry: readonly [string, GeneratedType][],
  aminoConverters: AminoConverters
): MsgConverter {
  const toAminoMsgs: Record<string /* type url */, (msg: Any) => MsgAmino> = {}
  const toProtoMsgs: Record<string /* type */, (msg: MsgAmino) => Any> = {}

  for (const [typeUrl, proto] of registry) {
    const aminoConverter = aminoConverters[typeUrl]
    if (aminoConverter === undefined) {
      continue
    }

    toAminoMsgs[typeUrl] = (msg: Any) => {
      return {
        type: aminoConverter.aminoType,
        value: aminoConverter.toAmino(proto.decode(msg.value)),
      }
    }

    toProtoMsgs[aminoConverter.aminoType] = (msg: MsgAmino) => {
      return {
        typeUrl: typeUrl,
        value: proto.encode(aminoConverter.fromAmino(msg.value)).finish(),
      }
    }
  }

  return {
    toAminoMsg: (msg: Any): MsgAmino => {
      const typeUrl = msg.typeUrl
      if (toAminoMsgs[typeUrl] === undefined) {
        throw new Error(`Unknown TypeUrl`)
      }

      return toAminoMsgs[typeUrl](msg)
    },
    toProtoMsg: (msg: MsgAmino): Any => {
      const type = msg.type

      if (toProtoMsgs[type] === undefined) {
        throw new Error(`Unknown Amino Type`)
      }

      return toProtoMsgs[type](msg)
    },
  }
}
