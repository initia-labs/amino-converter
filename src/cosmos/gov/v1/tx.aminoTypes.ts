import { MsgAmino } from '../../../types'
import { CoinAmino } from '../../base/v1beta1/coin'

export interface MsgSubmitProposalAmino {
  messages?: MsgAmino[]
  initial_deposit: CoinAmino[]
  proposer: string
  metadata?: string
  title: string
  summary: string
  expedited: boolean
}
