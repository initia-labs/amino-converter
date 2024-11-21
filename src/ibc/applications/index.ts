import { GeneratedType } from '@cosmjs/proto-signing'
import {
  registry as ibcApplicationsNftTransferRegistry,
  aminoConverters as ibcApplicationsNftTransferAminoConverters,
} from './nft-transfer/tx'
import {
  registry as ibcApplicationsPermRegistry,
  aminoConverters as ibcApplicationsPermAminoConverters,
} from './nft-transfer/tx'
import { AminoConverters } from '@cosmjs/stargate'

export {
  registry as ibcApplicationsNftTransferRegistry,
  aminoConverters as ibcApplicationsNftTransferAminoConverters,
} from './nft-transfer/tx'
export {
  registry as ibcApplicationsPermRegistry,
  aminoConverters as ibcApplicationsPermAminoConverters,
} from './nft-transfer/tx'

export const ibcApplicationsRegistry: readonly [string, GeneratedType][] = [
  ...ibcApplicationsNftTransferRegistry,
  ...ibcApplicationsPermRegistry,
]
export const ibcApplicationsAminoConverters: AminoConverters = {
  ...ibcApplicationsNftTransferAminoConverters,
  ...ibcApplicationsPermAminoConverters,
}
