import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import { MsgSubmitProposal } from '@initia/initia.proto/cosmos/gov/v1/tx'
import { MsgSubmitProposalAmino } from './tx.aminoTypes'
import { createMsgConverter } from '../../../utils'
import { Coin } from '../../base/v1beta1/coin'

export function generateMsgSubmitProposalAminoConverter(
  registry: readonly [string, GeneratedType][],
  aminoConverters: AminoConverters
): AminoConverters {
  const { toAminoMsg, toProtoMsg } = createMsgConverter(
    registry,
    aminoConverters
  )
  return {
    '/cosmos.gov.v1.MsgSubmitProposal': {
      aminoType: 'cosmos-sdk/v1/MsgSubmitProposal',
      toAmino: (msg: MsgSubmitProposal): MsgSubmitProposalAmino => ({
        messages: msg.messages.map((msg) => toAminoMsg(msg)),
        initial_deposit: msg.initialDeposit.map((coin) => Coin.toAmino(coin)),
        proposer: msg.proposer,
        metadata: msg.metadata === '' ? undefined : msg.metadata,
        title: msg.title,
        summary: msg.summary,
        expedited: msg.expedited,
      }),
      fromAmino: (msg: MsgSubmitProposalAmino): MsgSubmitProposal => ({
        messages: msg.messages.map((msg) => toProtoMsg(msg)),
        initialDeposit: msg.initial_deposit.map((coin) => Coin.fromAmino(coin)),
        proposer: msg.proposer,
        metadata: msg.metadata ?? '',
        title: msg.title,
        summary: msg.summary,
        expedited: msg.expedited,
      }),
    },
  }
}
