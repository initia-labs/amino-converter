import { PubKey as PubKey_pb } from '@initia/initia.proto/cosmos/crypto/ed25519/keys'
import { base64ToBytes, bytesToBase64 } from '../../../utils'

export const PubKey = {
  toAmino: (pubKey: PubKey_pb): PubKeyAmino => ({
    key: bytesToBase64(pubKey.key),
  }),
  fromAmino: (pubKey: PubKeyAmino): PubKey_pb => ({
    key: base64ToBytes(pubKey.key),
  }),
  toProtoMsg: (pubKey: PubKey_pb): PubKeyProtoMsg => ({
    typeUrl: '/cosmos.crypto.ed25519.PubKey',
    value: pubKey.key,
  }),
  fromProtoMsg: (pubKey: PubKeyProtoMsg): PubKey_pb => ({
    key: pubKey.value,
  }),
  toAminoMsg: (pubKey: PubKey_pb): PubKeyAminoMsg => ({
    type: 'tendermint/PubKeySecp256k1',
    value: PubKey.toAmino(pubKey).key,
  }),
  fromAminoMsg: (pubKey: PubKeyAminoMsg): PubKey_pb => ({
    key: base64ToBytes(pubKey.value),
  }),
}

export interface PubKeyAminoMsg {
  type: 'tendermint/PubKeySecp256k1'
  value: string
}

export interface PubKeyAmino {
  key: string
}

export interface PubKeyProtoMsg {
  typeUrl: '/cosmos.crypto.ed25519.PubKey'
  value: Uint8Array
}
