import { PubKey as PubKey_pb } from '@initia/initia.proto/cosmos/crypto/ed25519/keys'
import { fromBase64, toBase64 } from '@cosmjs/encoding'

export const PubKey = {
  toAmino: (pubKey: PubKey_pb): PubKeyAmino => ({
    key: toBase64(pubKey.key),
  }),
  fromAmino: (pubKey: PubKeyAmino): PubKey_pb => ({
    key: fromBase64(pubKey.key),
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
    key: fromBase64(pubKey.value),
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
