import {
  Description as Description_pb,
  CommissionRates as CommissionRates_pb,
  Params as Params_pb,
} from '@initia/initia.proto/initia/mstaking/v1/staking'
import { Duration, DurationAmino } from '../../../google/protobuf/duration'
import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'

export const Description = {
  toAmino: (description: Description_pb): DescriptionAmino => ({
    moniker: description.moniker,
    identity: description.identity,
    website: description.website,
    details: description.details,
    security_contact: description.securityContact,
  }),
  fromAmino: (description: DescriptionAmino): Description_pb => ({
    moniker: description.moniker,
    identity: description.identity,
    website: description.website,
    details: description.details,
    securityContact: description.security_contact,
  }),
}

export const CommissionRates = {
  toAmino: (commissionRates: CommissionRates_pb): CommissionRatesAmino => ({
    rate: commissionRates.rate,
    max_rate: commissionRates.maxRate,
    max_change_rate: commissionRates.maxChangeRate,
  }),
  fromAmino: (commissionRates: CommissionRatesAmino): CommissionRates_pb => ({
    rate: commissionRates.rate,
    maxRate: commissionRates.max_rate,
    maxChangeRate: commissionRates.max_change_rate,
  }),
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    unbonding_time: Duration.toAmino(params.unbondingTime as Duration_pb),
    max_validators: params.maxValidators,
    max_entries: params.maxEntries,
    historical_entries: params.historicalEntries,
    bond_denoms: params.bondDenoms,
    min_voting_power: params.minVotingPower.toString(),
    min_commission_rate: params.minCommissionRate,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    unbondingTime: Duration.fromAmino(params.unbonding_time),
    maxValidators: params.max_validators,
    maxEntries: params.max_entries,
    historicalEntries: params.historical_entries,
    bondDenoms: params.bond_denoms,
    minVotingPower: BigInt(params.min_voting_power),
    minCommissionRate: params.min_commission_rate,
  }),
}

export interface DescriptionAmino {
  moniker: string
  identity: string
  website: string
  details: string
  security_contact: string
}

export interface CommissionRatesAmino {
  rate: string
  max_rate: string
  max_change_rate: string
}

export interface ParamsAmino {
  unbonding_time: DurationAmino
  max_validators: number
  max_entries: number
  historical_entries: number
  bond_denoms: string[]
  min_voting_power: string
  min_commission_rate: string
}
