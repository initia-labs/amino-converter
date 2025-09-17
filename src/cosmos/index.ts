import { GeneratedType } from '@cosmjs/proto-signing'
import { authzAminoConverters, authzRegistry } from './authz'
import { AminoConverters } from '@cosmjs/stargate'
import { feegrantAminoConverters, feegrantRegistry } from './feegrant'

export { generateMsgSubmitProposalAminoConverter } from './gov'

export const cosmosRegistry: readonly [string, GeneratedType][] = [
  ...authzRegistry,
  ...feegrantRegistry,
]
export const cosmosAminoConverters: AminoConverters = {
  ...authzAminoConverters,
  ...feegrantAminoConverters,
}
