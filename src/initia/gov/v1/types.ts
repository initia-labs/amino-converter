import {
  Params as Params_pb,
  Vesting as Vesting_pb,
} from '@initia/initia.proto/initia/gov/v1/gov'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { Duration, DurationAmino } from '../../../google/protobuf/duration'
import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'

export const Vesting = {
  toAmino: (vesting: Vesting_pb): VestingAmino => ({
    module_addr: vesting.moduleAddr,
    module_name: vesting.moduleName,
    creator_addr: vesting.creatorAddr,
  }),
  fromAmino: (vesting: VestingAmino): Vesting_pb => ({
    moduleAddr: vesting.module_addr,
    moduleName: vesting.module_name,
    creatorAddr: vesting.creator_addr,
  }),
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    min_deposit: params.minDeposit.map((coin) => Coin.toAmino(coin)),
    max_deposit_period: Duration.toAmino(
      params.maxDepositPeriod as Duration_pb
    ),
    voting_period: Duration.toAmino(params.votingPeriod as Duration_pb),
    quorum: params.quorum,
    threshold: params.threshold,
    veto_threshold: params.vetoThreshold,
    min_initial_deposit_ratio: params.minInitialDepositRatio,
    proposal_cancel_ratio: params.proposalCancelRatio,
    proposal_cancel_dest: params.proposalCancelDest,
    expedited_voting_period: Duration.toAmino(
      params.expeditedVotingPeriod as Duration_pb
    ),
    expedited_threshold: params.expeditedThreshold,
    expedited_min_deposit: params.expeditedMinDeposit,
    burn_vote_quorum: params.burnVoteQuorum,
    burn_proposal_deposit_prevote: params.burnProposalDepositPrevote,
    burn_vote_veto: params.burnVoteVeto,
    min_deposit_ratio: params.minDepositRatio,
    emergency_min_deposit: params.emergencyMinDeposit.map((coin) =>
      Coin.toAmino(coin)
    ),
    emergency_tally_interval: Duration.toAmino(
      params.emergencyTallyInterval as Duration_pb
    ),
    low_threshold_functions: params.lowThresholdFunctions,
    vesting: params.vesting ? Vesting.toAmino(params.vesting) : undefined,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    minDeposit: params.min_deposit.map((coin) => Coin.fromAmino(coin)),
    maxDepositPeriod: Duration.fromAmino(params.max_deposit_period),
    votingPeriod: Duration.fromAmino(params.voting_period),
    quorum: params.quorum,
    threshold: params.threshold,
    vetoThreshold: params.veto_threshold,
    minInitialDepositRatio: params.min_initial_deposit_ratio,
    proposalCancelRatio: params.proposal_cancel_ratio,
    proposalCancelDest: params.proposal_cancel_dest,
    expeditedVotingPeriod: Duration.fromAmino(params.expedited_voting_period),
    expeditedThreshold: params.expedited_threshold,
    expeditedMinDeposit: params.expedited_min_deposit,
    burnVoteQuorum: params.burn_vote_quorum,
    burnProposalDepositPrevote: params.burn_proposal_deposit_prevote,
    burnVoteVeto: params.burn_vote_veto,
    minDepositRatio: params.min_deposit_ratio,
    emergencyMinDeposit: params.emergency_min_deposit.map((coin) =>
      Coin.fromAmino(coin)
    ),
    emergencyTallyInterval: Duration.fromAmino(params.emergency_tally_interval),
    lowThresholdFunctions: params.low_threshold_functions,
    vesting: params.vesting ? Vesting.fromAmino(params.vesting) : undefined,
  }),
}

export interface ParamsAmino {
  min_deposit: CoinAmino[]
  max_deposit_period: DurationAmino
  voting_period: DurationAmino
  quorum: string
  threshold: string
  veto_threshold: string
  min_initial_deposit_ratio: string
  proposal_cancel_ratio: string
  proposal_cancel_dest: string
  expedited_voting_period: DurationAmino
  expedited_threshold: string
  expedited_min_deposit: CoinAmino[]
  burn_vote_quorum: boolean
  burn_proposal_deposit_prevote: boolean
  burn_vote_veto: boolean
  min_deposit_ratio: string
  emergency_min_deposit: CoinAmino[]
  emergency_tally_interval: DurationAmino
  low_threshold_functions: string[]
  vesting?: VestingAmino
}

export interface VestingAmino {
  module_addr: string
  module_name: string
  creator_addr: string
}
