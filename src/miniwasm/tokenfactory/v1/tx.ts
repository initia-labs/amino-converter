import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgBurn,
  MsgChangeAdmin,
  MsgCreateDenom,
  MsgMint,
  MsgSetBeforeSendHook,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from '@initia/initia.proto/miniwasm/tokenfactory/v1/tx'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgBurnAmino,
  MsgChangeAdminAmino,
  MsgCreateDenomAmino,
  MsgMintAmino,
  MsgSetBeforeSendHookAmino,
  MsgSetDenomMetadataAmino,
  MsgUpdateParamsAmino,
} from './tx.aminoTypes'
import { Params as Params_pb } from '@initia/initia.proto/miniwasm/tokenfactory/v1/params'
import { Params } from './types'
import { Coin } from '../../../cosmos/base/v1beta1/coin'
import { Coin as Coin_pb } from '@initia/initia.proto/cosmos/base/v1beta1/coin'
import { Metadata } from '../../../cosmos/bank/v1beta1/metadata'
import { Metadata as Metadata_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/miniwasm.tokenfactory.v1.MsgCreateDenom', MsgCreateDenom],
  ['/miniwasm.tokenfactory.v1.MsgMint', MsgMint],
  ['/miniwasm.tokenfactory.v1.MsgBurn', MsgBurn],
  ['/miniwasm.tokenfactory.v1.MsgChangeAdmin', MsgChangeAdmin],
  ['/miniwasm.tokenfactory.v1.MsgSetBeforeSendHook', MsgSetBeforeSendHook],
  ['/miniwasm.tokenfactory.v1.MsgSetDenomMetadata', MsgSetDenomMetadata],
  ['/miniwasm.tokenfactory.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/miniwasm.tokenfactory.v1.MsgCreateDenom': {
    aminoType: 'tokenfactory/MsgCreateDenom',
    toAmino: (msg: MsgCreateDenom): MsgCreateDenomAmino => ({
      sender: msg.sender,
      subdenom: msg.subdenom,
    }),
    fromAmino: (msg: MsgCreateDenomAmino): MsgCreateDenom => ({
      sender: msg.sender,
      subdenom: msg.subdenom,
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgMint': {
    aminoType: 'tokenfactory/MsgMint',
    toAmino: (msg: MsgMint): MsgMintAmino => ({
      sender: msg.sender,
      amount: Coin.toAmino(msg.amount as Coin_pb),
      mint_to_address: msg.mintToAddress,
    }),
    fromAmino: (msg: MsgMintAmino): MsgMint => ({
      sender: msg.sender,
      amount: Coin.fromAmino(msg.amount),
      mintToAddress: msg.mint_to_address,
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgBurn': {
    aminoType: 'tokenfactory/MsgBurn',
    toAmino: (msg: MsgBurn): MsgBurnAmino => ({
      sender: msg.sender,
      amount: Coin.toAmino(msg.amount as Coin_pb),
    }),
    fromAmino: (msg: MsgBurnAmino): MsgBurn => ({
      sender: msg.sender,
      amount: Coin.fromAmino(msg.amount),
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgChangeAdmin': {
    aminoType: 'tokenfactory/MsgChangeAdmin',
    toAmino: (msg: MsgChangeAdmin): MsgChangeAdminAmino => ({
      sender: msg.sender,
      denom: msg.denom,
      new_admin: msg.newAdmin,
    }),
    fromAmino: (msg: MsgChangeAdminAmino): MsgChangeAdmin => ({
      sender: msg.sender,
      denom: msg.denom,
      newAdmin: msg.new_admin,
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgSetBeforeSendHook': {
    aminoType: 'tokenfactory/MsgSetBeforeSendHook',
    toAmino: (msg: MsgSetBeforeSendHook): MsgSetBeforeSendHookAmino => ({
      sender: msg.sender,
      denom: msg.denom,
      cosmwasm_address: msg.cosmwasmAddress,
    }),
    fromAmino: (msg: MsgSetBeforeSendHookAmino): MsgSetBeforeSendHook => ({
      sender: msg.sender,
      denom: msg.denom,
      cosmwasmAddress: msg.cosmwasm_address,
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgSetDenomMetadata': {
    aminoType: 'tokenfactory/MsgSetDenomMetadata',
    toAmino: (msg: MsgSetDenomMetadata): MsgSetDenomMetadataAmino => ({
      sender: msg.sender,
      metadata: Metadata.toAmino(msg.metadata as Metadata_pb),
    }),
    fromAmino: (msg: MsgSetDenomMetadataAmino): MsgSetDenomMetadata => ({
      sender: msg.sender,
      metadata: Metadata.fromAmino(msg.metadata),
    }),
  },

  '/miniwasm.tokenfactory.v1.MsgUpdateParams': {
    aminoType: 'tokenfactory/MsgUpdateParams',
    toAmino: (msg: MsgUpdateParams): MsgUpdateParamsAmino => ({
      authority: msg.authority,
      params: Params.toAmino(msg.params as Params_pb),
    }),
    fromAmino: (msg: MsgUpdateParamsAmino): MsgUpdateParams => ({
      authority: msg.authority,
      params: Params.fromAmino(msg.params),
    }),
  },
}
