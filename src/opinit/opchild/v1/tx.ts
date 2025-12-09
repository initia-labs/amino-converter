import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgExecuteMessages,
  MsgFinalizeTokenDeposit,
  MsgInitiateTokenWithdrawal,
  MsgSetBridgeInfo,
  MsgSpendFeePool,
  MsgUpdateOracle,
  MsgUpdateParams,
  MsgMigrateToken,
} from '@initia/opinit.proto/opinit/opchild/v1/tx'

import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgExecuteMessagesAmino,
  MsgFinalizeTokenDepositAmino,
  MsgInitiateTokenWithdrawalAmino,
  MsgMigrateTokenAmino,
  MsgSetBridgeInfoAmino,
  MsgSpendFeePoolAmino,
  MsgUpdateOracleAmino,
  MsgUpdateParamsAmino,
} from './tx.aminoTypes'
import { Coin } from '../../../cosmos/base/v1beta1/coin'
import { Coin as Coin_pb } from '@initia/initia.proto/cosmos/base/v1beta1/coin'
import {
  base64ToBytes,
  bytesToBase64,
  createMsgConverter,
} from '../../../utils'
import {
  BridgeInfo as BridgeInfo_pb,
  Params as Params_pb,
} from '@initia/opinit.proto/opinit/opchild/v1/types'
import { BridgeInfo, Params } from './types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/opinit.opchild.v1.MsgExecuteMessages', MsgExecuteMessages],
  ['/opinit.opchild.v1.MsgFinalizeTokenDeposit', MsgFinalizeTokenDeposit],
  ['/opinit.opchild.v1.MsgInitiateTokenWithdrawal', MsgInitiateTokenWithdrawal],
  ['/opinit.opchild.v1.MsgSetBridgeInfo', MsgSetBridgeInfo],
  ['/opinit.opchild.v1.MsgSpendFeePool', MsgSpendFeePool],
  ['/opinit.opchild.v1.MsgUpdateParams', MsgUpdateParams],
  ['/opinit.opchild.v1.MsgUpdateOracle', MsgUpdateOracle],
  ['/opinit.opchild.v1.MsgMigrateToken', MsgMigrateToken],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/opinit.opchild.v1.MsgFinalizeTokenDeposit': {
    aminoType: 'opchild/MsgFinalizeTokenDeposit',
    toAmino: (msg: MsgFinalizeTokenDeposit): MsgFinalizeTokenDepositAmino => ({
      sender: msg.sender,
      from: msg.from,
      to: msg.to,
      amount: Coin.toAmino(msg.amount as Coin_pb),
      sequence: msg.sequence.toString(),
      height: msg.height.toString(),
      base_denom: msg.baseDenom,
      data: msg.data.length === 0 ? undefined : bytesToBase64(msg.data),
    }),
    fromAmino: (
      msg: MsgFinalizeTokenDepositAmino
    ): MsgFinalizeTokenDeposit => ({
      sender: msg.sender,
      from: msg.from,
      to: msg.to,
      amount: Coin.fromAmino(msg.amount),
      sequence: BigInt(msg.sender),
      height: BigInt(msg.height),
      baseDenom: msg.base_denom,
      data: msg.data ? base64ToBytes(msg.data) : new Uint8Array([]),
    }),
  },

  '/opinit.opchild.v1.MsgInitiateTokenWithdrawal': {
    aminoType: 'opchild/MsgInitiateTokenWithdrawal',
    toAmino: (
      msg: MsgInitiateTokenWithdrawal
    ): MsgInitiateTokenWithdrawalAmino => ({
      sender: msg.sender,
      to: msg.to,
      amount: Coin.toAmino(msg.amount as Coin_pb),
    }),
    fromAmino: (
      msg: MsgInitiateTokenWithdrawalAmino
    ): MsgInitiateTokenWithdrawal => ({
      sender: msg.sender,
      to: msg.to,
      amount: Coin.fromAmino(msg.amount),
    }),
  },

  '/opinit.opchild.v1.MsgSetBridgeInfo': {
    aminoType: 'opchild/MsgSetBridgeInfo',
    toAmino: (msg: MsgSetBridgeInfo): MsgSetBridgeInfoAmino => ({
      sender: msg.sender,
      bridge_info: BridgeInfo.toAmino(msg.bridgeInfo as BridgeInfo_pb),
    }),
    fromAmino: (msg: MsgSetBridgeInfoAmino): MsgSetBridgeInfo => ({
      sender: msg.sender,
      bridgeInfo: BridgeInfo.fromAmino(msg.bridge_info),
    }),
  },

  '/opinit.opchild.v1.MsgSpendFeePool': {
    aminoType: 'opchild/MsgSpendFeePool',
    toAmino: (msg: MsgSpendFeePool): MsgSpendFeePoolAmino => ({
      authority: msg.authority,
      recipient: msg.recipient,
      amount:
        msg.amount.length === 0
          ? null
          : msg.amount.map((coin) => Coin.toAmino(coin)),
    }),
    fromAmino: (msg: MsgSpendFeePoolAmino): MsgSpendFeePool => ({
      authority: msg.authority,
      recipient: msg.recipient,
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
    }),
  },

  '/opinit.opchild.v1.MsgUpdateParams': {
    aminoType: 'opchild/MsgUpdateParams',
    toAmino: (msg: MsgUpdateParams): MsgUpdateParamsAmino => ({
      authority: msg.authority,
      params: Params.toAmino(msg.params as Params_pb),
    }),
    fromAmino: (msg: MsgUpdateParamsAmino): MsgUpdateParams => ({
      authority: msg.authority,
      params: Params.fromAmino(msg.params),
    }),
  },

  '/opinit.opchild.v1.MsgUpdateOracle': {
    aminoType: 'opchild/MsgUpdateOracle',
    toAmino: (msg: MsgUpdateOracle): MsgUpdateOracleAmino => ({
      sender: msg.sender,
      height: msg.height.toString(),
      data: msg.data.length === 0 ? undefined : bytesToBase64(msg.data),
    }),
    fromAmino: (msg: MsgUpdateOracleAmino): MsgUpdateOracle => ({
      sender: msg.sender,
      height: BigInt(msg.height),
      data: msg.data ? base64ToBytes(msg.data) : new Uint8Array([]),
    }),
  },

  '/opinit.opchild.v1.MsgMigrateToken': {
    aminoType: 'opchild/MsgMigrateToken',
    toAmino: (msg: MsgMigrateToken): MsgMigrateTokenAmino => ({
      sender: msg.sender,
      amount: Coin.toAmino(msg.amount as Coin_pb),
    }),
    fromAmino: (msg: MsgMigrateTokenAmino): MsgMigrateToken => ({
      sender: msg.sender,
      amount: Coin.fromAmino(msg.amount),
    }),
  },
}

export function generateMsgExecuteMessagesAminoConverter(
  registry: readonly [string, GeneratedType][],
  aminoConverters: AminoConverters
): AminoConverters {
  const { toAminoMsg, toProtoMsg } = createMsgConverter(
    registry,
    aminoConverters
  )
  return {
    '/opinit.opchild.v1.MsgExecuteMessages': {
      aminoType: 'opchild/MsgExecuteMessages',
      toAmino: (msg: MsgExecuteMessages): MsgExecuteMessagesAmino => ({
        sender: msg.sender,
        messages: msg.messages.map((msg) => toAminoMsg(msg)),
      }),
      fromAmino: (msg: MsgExecuteMessagesAmino): MsgExecuteMessages => ({
        sender: msg.sender,
        messages: msg.messages.map((msg) => toProtoMsg(msg)),
      }),
    },
  }
}
