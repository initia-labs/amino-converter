import { GeneratedType } from '@cosmjs/proto-signing'
import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
} from '@initia/initia.proto/cosmos/gov/v1/tx'
import {
  MsgDepositAmino,
  MsgSubmitProposalAmino,
  MsgVoteAmino,
} from './tx.aminoTypes'
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
        messages:
          msg.messages.length === 0
            ? undefined
            : msg.messages.map((msg) => toAminoMsg(msg)),
        initial_deposit: msg.initialDeposit.map((coin) => Coin.toAmino(coin)),
        proposer: msg.proposer,
        metadata: msg.metadata === '' ? undefined : msg.metadata,
        title: msg.title,
        summary: msg.summary,
        expedited: msg.expedited,
      }),
      fromAmino: (msg: MsgSubmitProposalAmino): MsgSubmitProposal => ({
        messages: msg.messages
          ? msg.messages.map((msg) => toProtoMsg(msg))
          : [],
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

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/cosmos.gov.v1.MsgVote', MsgVote],
  ['/cosmos.gov.v1.MsgDeposit', MsgDeposit],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/cosmos.gov.v1.MsgVote': {
    aminoType: 'cosmos-sdk/v1/MsgVote',
    toAmino: (msg: MsgVote): MsgVoteAmino => ({
      proposal_id: msg.proposalId.toString(),
      voter: msg.voter,
      option: msg.option,
      metadata: msg.metadata,
    }),
    fromAmino: (msg: MsgVoteAmino): MsgVote => ({
      proposalId: BigInt(msg.proposal_id),
      voter: msg.voter,
      option: msg.option,
      metadata: msg.metadata,
    }),
  },

  '/cosmos.gov.v1.MsgDeposit': {
    aminoType: 'cosmos-sdk/v1/MsgDeposit',
    toAmino: (msg: MsgDeposit): MsgDepositAmino => ({
      proposal_id: msg.proposalId.toString(),
      depositor: msg.depositor,
      amount: msg.amount.map((coin) => Coin.toAmino(coin)),
    }),
    fromAmino: (msg: MsgDepositAmino): MsgDeposit => ({
      proposalId: BigInt(msg.proposal_id),
      depositor: msg.depositor,
      amount: msg.amount.map((coin) => Coin.fromAmino(coin)),
    }),
  },
}
