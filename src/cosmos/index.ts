import { GeneratedType } from '@cosmjs/proto-signing'
import { authzAminoConverters, authzRegistry } from './authz'
import { AminoConverters } from '@cosmjs/stargate'
import { feegrantAminoConverters, feegrantRegistry } from './feegrant'
import { govAminoConverters, govRegistry } from './gov'

export { generateMsgSubmitProposalAminoConverter } from './gov'

export const cosmosRegistry: readonly [string, GeneratedType][] = [
  ...authzRegistry,
  ...feegrantRegistry,
  ...govRegistry,
]
export const cosmosAminoConverters: AminoConverters = {
  ...authzAminoConverters,
  ...feegrantAminoConverters,
  ...govAminoConverters,
}
