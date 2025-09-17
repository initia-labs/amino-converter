import {
  BasicAllowance as BasicAllowance_pb,
  PeriodicAllowance as PeriodicAllowance_pb,
} from '@initia/initia.proto/cosmos/feegrant/v1beta1/feegrant'
import { Coin, CoinAmino } from '../../base/v1beta1/coin'
import { Duration, DurationAmino } from '../../../google/protobuf/duration'
import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'
import { Any } from '@initia/initia.proto/google/protobuf/any'

export const BasicAllowance = {
  toAmino: (msg: BasicAllowance_pb): BasicAllowanceAmino => ({
    spend_limit: msg.spendLimit.map((coin) => Coin.toAmino(coin)),
    expiration: (msg.expiration as Date).toISOString(),
  }),
  fromAmino: (msg: BasicAllowanceAmino): BasicAllowance_pb => ({
    spendLimit: msg.spend_limit.map((coin) => Coin.fromAmino(coin)),
    expiration: new Date(msg.expiration),
  }),
}

export interface BasicAllowanceAmino {
  spend_limit: CoinAmino[]
  expiration: string
}

export const PeriodicAllowance = {
  toAmino: (msg: PeriodicAllowance_pb): PeriodicAllowanceAmino => ({
    basic: BasicAllowance.toAmino(msg.basic as BasicAllowance_pb),
    period: Duration.toAmino(msg.period as Duration_pb),
    period_spend_limit: msg.periodSpendLimit.map((coin) => Coin.toAmino(coin)),
    period_can_spend: msg.periodCanSpend.map((coin) => Coin.toAmino(coin)),
    period_reset: (msg.periodReset as Date).toISOString(),
  }),
  fromAmino: (msg: PeriodicAllowanceAmino): PeriodicAllowance_pb => ({
    basic: BasicAllowance.fromAmino(msg.basic),
    period: Duration.fromAmino(msg.period),
    periodSpendLimit: msg.period_spend_limit.map((coin) =>
      Coin.fromAmino(coin)
    ),
    periodCanSpend: msg.period_can_spend.map((coin) => Coin.toAmino(coin)),
    periodReset: new Date(msg.period_reset),
  }),
}

export interface PeriodicAllowanceAmino {
  basic: BasicAllowanceAmino
  period: DurationAmino
  period_spend_limit: CoinAmino[]
  period_can_spend: CoinAmino[]
  period_reset: string
}

export namespace Allowance {
  export function toAmino(msg: Any): AllowanceAmino {
    switch (msg.typeUrl) {
      case '/cosmos.feegrant.v1beta1.BasicAllowance': {
        const basicAllowance = BasicAllowance_pb.decode(msg.value)
        return {
          type: 'cosmos-sdk/BasicAllowance',
          value: BasicAllowance.toAmino(basicAllowance),
        }
      }

      case '/cosmos.feegrant.v1beta1.PeriodicAllowance': {
        const periodicAllowance = PeriodicAllowance_pb.decode(msg.value)
        return {
          type: 'cosmos-sdk/PeriodicAllowance',
          value: PeriodicAllowance.toAmino(periodicAllowance),
        }
      }

      default:
        throw new Error(`Unsupported typeUrl: ${msg.typeUrl}`)
    }
  }

  export function fromAmino(msg: AllowanceAmino): Any {
    switch (msg.type) {
      case 'cosmos-sdk/BasicAllowance':
        return {
          typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
          value: BasicAllowance_pb.encode(
            BasicAllowance.fromAmino(msg.value)
          ).finish(),
        }

      case 'cosmos-sdk/PeriodicAllowance':
        return {
          typeUrl: '/cosmos.feegrant.v1beta1.PeriodicAllowance',
          value: PeriodicAllowance_pb.encode(
            PeriodicAllowance.fromAmino(msg.value)
          ).finish(),
        }
    }
  }
}

export type AllowanceAmino = BasicAllowanceMsgAmino | PeriodicAllowanceMsgAmino

export interface BasicAllowanceMsgAmino {
  type: 'cosmos-sdk/BasicAllowance'
  value: BasicAllowanceAmino
}

export interface PeriodicAllowanceMsgAmino {
  type: 'cosmos-sdk/PeriodicAllowance'
  value: PeriodicAllowanceAmino
}
