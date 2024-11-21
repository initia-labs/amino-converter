import { GeneratedType } from '@cosmjs/proto-signing'
import { opinitOpChildAminoConverters, opinitOpchildRegistry } from './opchild'
import { opinitOphostAminoConverters, opinitOphostRegistry } from './ophost'
import { AminoConverters } from '@cosmjs/stargate'

export { generateMsgExecuteMessagesAminoConverter } from './opchild'

export const opinitRegistry: readonly [string, GeneratedType][] = [
  ...opinitOpchildRegistry,
  ...opinitOphostRegistry,
]

export const opinitAminoConverters: AminoConverters = {
  ...opinitOpChildAminoConverters,
  ...opinitOphostAminoConverters,
}
