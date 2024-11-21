import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgUpdateParams,
  MsgDepositValidatorRewardsPool,
} from '@initia/initia.proto/initia/distribution/v1/tx'
import { Params as Params_pb } from '@initia/initia.proto/initia/distribution/v1/distribution'
import { Params } from './types'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgDepositValidatorRewardsPoolAmino,
  MsgUpdateParamsAmino,
} from './tx.aminoTypes'
import { Coin } from '../../../cosmos/base/v1beta1/coin'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.distribution.v1.MsgUpdateParams', MsgUpdateParams],
  [
    '/initia.distribution.v1.MsgDepositValidatorRewardsPool',
    MsgDepositValidatorRewardsPool,
  ],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.distribution.v1.MsgUpdateParams': {
    aminoType: 'distribution/MsgUpdateParams',
    toAmino: (msg: MsgUpdateParams): MsgUpdateParamsAmino => ({
      authority: msg.authority,
      params: Params.toAmino(msg.params as Params_pb),
    }),
    fromAmino: (msg: MsgUpdateParamsAmino): MsgUpdateParams => ({
      authority: msg.authority,
      params: Params.fromAmino(msg.params),
    }),
  },
  '/initia.distribution.v1.MsgDepositValidatorRewardsPool': {
    aminoType: 'move/MsgDepositValidatorRewardsPool',
    toAmino: (
      msg: MsgDepositValidatorRewardsPool
    ): MsgDepositValidatorRewardsPoolAmino => ({
      depositor: msg.depositor,
      validator_address: msg.validatorAddress,
      denom: msg.denom,
      amount: msg.amount.map((coin) => Coin.toAmino(coin)),
    }),
    fromAmino: (
      msg: MsgDepositValidatorRewardsPoolAmino
    ): MsgDepositValidatorRewardsPool => ({
      depositor: msg.depositor,
      validatorAddress: msg.validator_address,
      denom: msg.denom,
      amount: msg.amount.map((coin) => Coin.fromAmino(coin)),
    }),
  },
}
