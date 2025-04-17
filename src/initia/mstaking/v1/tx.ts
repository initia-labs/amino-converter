import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgBeginRedelegateAmino,
  MsgCancelUnbondingDelegationAmino,
  MsgCreateValidatorAmino,
  MsgDelegateAmino,
  MsgUndelegateAmino,
  MsgUpdateParamsAmino,
} from './tx.aminoTypes'
import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgUndelegate,
  MsgUpdateParams,
} from '@initia/initia.proto/initia/mstaking/v1/tx'
import { CommissionRates, Description, Params } from './types'
import {
  Description as Description_pb,
  CommissionRates as CommissionRates_pb,
  Params as Params_pb,
} from '@initia/initia.proto/initia/mstaking/v1/staking'

import { PubKey, PubKeyProtoMsg } from '../../../cosmos/crypto/ed25519/keys'
import { Coin } from '../../../cosmos/base/v1beta1/coin'

// registry
export const registry: readonly [string, GeneratedType][] = [
  ['/initia.mstaking.v1.MsgCreateValidator', MsgCreateValidator],
  ['/initia.mstaking.v1.MsgDelegate', MsgDelegate],
  ['/initia.mstaking.v1.MsgBeginRedelegate', MsgBeginRedelegate],
  ['/initia.mstaking.v1.MsgUndelegate', MsgUndelegate],
  [
    '/initia.mstaking.v1.MsgCancelUnbondingDelegation',
    MsgCancelUnbondingDelegation,
  ],
  ['/initia.mstaking.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.mstaking.v1.MsgCreateValidator': {
    aminoType: 'mstaking/MsgCreateValidator',
    toAmino: (msg: MsgCreateValidator): MsgCreateValidatorAmino => ({
      description: Description.toAmino(msg.description as Description_pb),
      commission: CommissionRates.toAmino(msg.commission as CommissionRates_pb),
      validator_address: msg.validatorAddress,
      pubkey: PubKey.toAminoMsg(
        PubKey.fromProtoMsg(msg.pubkey as PubKeyProtoMsg)
      ),
      amount:
        msg.amount.length === 0
          ? msg.amount.map((coin) => Coin.toAmino(coin))
          : null,
    }),
    fromAmino: (msg: MsgCreateValidatorAmino): MsgCreateValidator => ({
      description: Description.fromAmino(msg.description),
      commission: CommissionRates.fromAmino(msg.commission),
      validatorAddress: msg.validator_address,
      pubkey: PubKey.toProtoMsg(PubKey.fromAminoMsg(msg.pubkey)),
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
    }),
  },

  '/initia.mstaking.v1.MsgDelegate': {
    aminoType: 'mstaking/MsgDelegate',
    toAmino: (msg: MsgDelegate): MsgDelegateAmino => ({
      delegator_address: msg.delegatorAddress,
      validator_address: msg.validatorAddress,
      amount:
        msg.amount.length === 0
          ? msg.amount.map((coin) => Coin.toAmino(coin))
          : null,
    }),
    fromAmino: (msg: MsgDelegateAmino): MsgDelegate => ({
      delegatorAddress: msg.delegator_address,
      validatorAddress: msg.validator_address,
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
    }),
  },

  '/initia.mstaking.v1.MsgBeginRedelegate': {
    aminoType: 'mstaking/MsgBeginRedelegate',
    toAmino: (msg: MsgBeginRedelegate): MsgBeginRedelegateAmino => ({
      delegator_address: msg.delegatorAddress,
      validator_src_address: msg.validatorSrcAddress,
      validator_dst_address: msg.validatorDstAddress,
      amount:
        msg.amount.length === 0
          ? msg.amount.map((coin) => Coin.toAmino(coin))
          : null,
    }),
    fromAmino: (msg: MsgBeginRedelegateAmino): MsgBeginRedelegate => ({
      delegatorAddress: msg.delegator_address,
      validatorSrcAddress: msg.validator_src_address,
      validatorDstAddress: msg.validator_dst_address,
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
    }),
  },

  '/initia.mstaking.v1.MsgUndelegate': {
    aminoType: 'mstaking/MsgUndelegate',
    toAmino: (msg: MsgUndelegate): MsgUndelegateAmino => ({
      delegator_address: msg.delegatorAddress,
      validator_address: msg.validatorAddress,
      amount:
        msg.amount.length === 0
          ? msg.amount.map((coin) => Coin.toAmino(coin))
          : null,
    }),
    fromAmino: (msg: MsgUndelegateAmino): MsgUndelegate => ({
      delegatorAddress: msg.delegator_address,
      validatorAddress: msg.validator_address,
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
    }),
  },

  '/initia.mstaking.v1.MsgCancelUnbondingDelegation': {
    aminoType: 'mstaking/MsgCancelUnbondingDelegation',
    toAmino: (
      msg: MsgCancelUnbondingDelegation
    ): MsgCancelUnbondingDelegationAmino => ({
      delegator_address: msg.delegatorAddress,
      validator_address: msg.validatorAddress,
      amount:
        msg.amount.length === 0
          ? msg.amount.map((coin) => Coin.toAmino(coin))
          : null,
      creation_height: msg.creationHeight.toString(),
    }),
    fromAmino: (
      msg: MsgCancelUnbondingDelegationAmino
    ): MsgCancelUnbondingDelegation => ({
      delegatorAddress: msg.delegator_address,
      validatorAddress: msg.validator_address,
      amount: msg.amount ? msg.amount.map((coin) => Coin.fromAmino(coin)) : [],
      creationHeight: BigInt(msg.creation_height),
    }),
  },

  '/initia.mstaking.v1.MsgUpdateParams': {
    aminoType: 'mstaking/MsgUpdateParams',
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
