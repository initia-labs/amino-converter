import { AminoConverters } from '@cosmjs/stargate'
import { GeneratedType } from '@cosmjs/proto-signing'
import { initiaBankAminoConverters, initiaBankRegistry } from './bank'
import {
  initiaDistributionAminoConverters,
  initiaDistributionRegistry,
} from './distribution'
import { initiaGovAminoConverters, initiaGovRegistry } from './gov'
import {
  initiaIbchooksAminoConverters,
  initiaIbchooksRegistry,
} from './ibchooks'
import { initiaIntertxAminoConverters, initiaIntertxRegistry } from './intertx'
import { initiaMoveAminoConverters, initiaMoveRegistry } from './move'
import {
  initiaMstakingAminoConverters,
  initiaMstakingRegistry,
} from './mstaking'
import { initiaRewardAminoConverters, initiaRewardRegistry } from './reward'

export { generateMsgSubmitTxAminoConverter } from './intertx'

export const initiaRegistry: readonly [string, GeneratedType][] = [
  ...initiaBankRegistry,
  ...initiaDistributionRegistry,
  ...initiaGovRegistry,
  ...initiaIbchooksRegistry,
  ...initiaIntertxRegistry,
  ...initiaMoveRegistry,
  ...initiaMoveRegistry,
  ...initiaMstakingRegistry,
  ...initiaRewardRegistry,
]

export const initiaAminoConverters: AminoConverters = {
  ...initiaBankAminoConverters,
  ...initiaDistributionAminoConverters,
  ...initiaGovAminoConverters,
  ...initiaIbchooksAminoConverters,
  ...initiaIntertxAminoConverters,
  ...initiaMoveAminoConverters,
  ...initiaMstakingAminoConverters,
  ...initiaRewardAminoConverters,
}
