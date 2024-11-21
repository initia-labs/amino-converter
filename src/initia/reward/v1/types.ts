import { Params as Params_pb } from '@initia/initia.proto/initia/reward/v1/types'
import { Duration, DurationAmino } from '../../../google/protobuf/duration'
import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'

export interface ParamsAmino {
  reward_denom: string
  dilution_period: DurationAmino
  release_rate: string
  dilution_rate: string
  release_enabled: boolean
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    reward_denom: params.rewardDenom,
    dilution_period: Duration.toAmino(params.dilutionPeriod as Duration_pb),
    release_rate: params.releaseRate,
    dilution_rate: params.dilutionRate,
    release_enabled: params.releaseEnabled,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    rewardDenom: params.reward_denom,
    dilutionPeriod: Duration.fromAmino(params.dilution_period),
    releaseRate: params.release_rate,
    dilutionRate: params.dilution_rate,
    releaseEnabled: params.release_enabled,
  }),
}
