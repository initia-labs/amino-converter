import { Params as Params_pb } from '@initia/initia.proto/initia/distribution/v1/distribution'

export interface ParamsAmino {
  community_tax: string
  withdraw_addr_enabled: boolean
  reward_weights: RewardWeightAmino[]
}

export interface RewardWeightAmino {
  denom: string
  weight: string
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    community_tax: params.communityTax,
    withdraw_addr_enabled: params.withdrawAddrEnabled,
    reward_weights: params.rewardWeights,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    communityTax: params.community_tax,
    withdrawAddrEnabled: params.withdraw_addr_enabled,
    rewardWeights: params.reward_weights,
  }),
}
