import {
  StoreCodeAuthorization as StoreCodeAuthorization_pb,
  CodeGrant as CodeGrant_pb,
  ContractGrant as ContractGrant_pb,
  ContractExecutionAuthorization as ContractExecutionAuthorization_pb,
  ContractMigrationAuthorization as ContractMigrationAuthorization_pb,
  MaxCallsLimit,
  MaxFundsLimit,
  CombinedLimit,
  AllowAllMessagesFilter,
  AcceptedMessageKeysFilter,
  AcceptedMessagesFilter,
} from '@initia/initia.proto/cosmwasm/wasm/v1/authz'
import { AccessConfig, AccessConfigAmino } from './types'
import { base64ToBytes, bytesToBase64 } from '../../../utils'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'
import { Any } from '@initia/initia.proto/google/protobuf/any'

export const StoreCodeAuthorization = {
  toAmino: (msg: StoreCodeAuthorization_pb): StoreCodeAuthorizationAmino => ({
    grants:
      msg.grants.length === 0
        ? null
        : msg.grants.map((grant) => CodeGrant.toAmino(grant)),
  }),
  fromAmino: (msg: StoreCodeAuthorizationAmino): StoreCodeAuthorization_pb => ({
    grants: msg.grants
      ? msg.grants.map((grant) => CodeGrant.fromAmino(grant))
      : [],
  }),
}

export interface StoreCodeAuthorizationAmino {
  grants: CodeGrantAmino[] | null
}

export const ContractExecutionAuthorization = {
  toAmino: (
    msg: ContractExecutionAuthorization_pb
  ): ContractExecutionAuthorizationAmino => ({
    grants:
      msg.grants.length === 0
        ? null
        : msg.grants.map((grant) => ContractGrant.toAmino(grant)),
  }),
  fromAmino: (
    msg: ContractExecutionAuthorizationAmino
  ): ContractExecutionAuthorization_pb => ({
    grants:
      msg.grants === null
        ? []
        : msg.grants.map((grant) => ContractGrant.fromAmino(grant)),
  }),
}

export interface ContractExecutionAuthorizationAmino {
  grants: ContractGrantAmino[] | null
}

export const ContractMigrationAuthorization = {
  toAmino: (
    msg: ContractMigrationAuthorization_pb
  ): ContractMigrationAuthorizationAmino => ({
    grants:
      msg.grants.length === 0
        ? null
        : msg.grants.map((grant) => ContractGrant.toAmino(grant)),
  }),
  fromAmino: (
    msg: ContractMigrationAuthorizationAmino
  ): ContractMigrationAuthorization_pb => ({
    grants:
      msg.grants === null
        ? []
        : msg.grants.map((grant) => ContractGrant.fromAmino(grant)),
  }),
}

export interface ContractMigrationAuthorizationAmino {
  grants: ContractGrantAmino[] | null
}

export const CodeGrant = {
  toAmino: (msg: CodeGrant_pb): CodeGrantAmino => ({
    code_hash: bytesToBase64(msg.codeHash),
    instantiate_permission: msg.instantiatePermission
      ? AccessConfig.toAmino(msg.instantiatePermission)
      : undefined,
  }),
  fromAmino: (msg: CodeGrantAmino): CodeGrant_pb => ({
    codeHash: base64ToBytes(msg.code_hash),
    instantiatePermission: msg.instantiate_permission
      ? AccessConfig.fromAmino(msg.instantiate_permission)
      : undefined,
  }),
}

export interface CodeGrantAmino {
  code_hash: string
  instantiate_permission?: AccessConfigAmino
}

export const ContractGrant = {
  toAmino: (msg: ContractGrant_pb): ContractGrantAmino => ({
    contract: msg.contract,
    limit: ContractLimit.toAmino(msg.limit as Any),
    filter: ContractFilter.toAmino(msg.filter as Any),
  }),
  fromAmino: (msg: ContractGrantAmino): ContractGrant_pb => ({
    contract: msg.contract,
    limit: ContractLimit.fromAmino(msg.limit),
    filter: ContractFilter.fromAmino(msg.filter),
  }),
}

export interface ContractGrantAmino {
  contract: string
  limit: ContractLimitAmino
  filter: ContractFilterAmino
}

type ContractLimitAmino =
  | MaxCallsLimitAmino
  | MaxFundsLimitAmino
  | CombinedLimitAmino

namespace ContractLimit {
  export function toAmino(msg: Any): ContractLimitAmino {
    switch (msg.typeUrl) {
      case '/cosmwasm.wasm.v1.MaxCallsLimit': {
        const maxCallsLimit = MaxCallsLimit.decode(msg.value)
        return {
          type: 'wasm/MaxCallsLimit',
          value: { remaining: maxCallsLimit.remaining.toString() },
        }
      }

      case '/cosmwasm.wasm.v1.MaxFundsLimit': {
        const maxFundsLimit = MaxFundsLimit.decode(msg.value)
        return {
          type: 'wasm/MaxFundsLimit',
          value: {
            amounts: maxFundsLimit.amounts.map((coin) => Coin.toAmino(coin)),
          },
        }
      }

      case '/cosmwasm.wasm.v1.CombinedLimit': {
        const combinedLimit = CombinedLimit.decode(msg.value)
        return {
          type: 'wasm/CombinedLimit',
          value: {
            calls_remaining: combinedLimit.callsRemaining.toString(),
            amounts: combinedLimit.amounts.map((coin) => Coin.toAmino(coin)),
          },
        }
      }

      default:
        throw new Error(`Unsupported typeUrl: ${msg.typeUrl}`)
    }
  }

  export function fromAmino(msg: ContractLimitAmino): Any {
    switch (msg.type) {
      case 'wasm/MaxCallsLimit':
        return {
          typeUrl: '/cosmwasm.wasm.v1.MaxCallsLimit',
          value: MaxCallsLimit.encode({
            remaining: BigInt(msg.value.remaining),
          }).finish(),
        }

      case 'wasm/MaxFundsLimit':
        return {
          typeUrl: '/cosmwasm.wasm.v1.MaxFundsLimit',
          value: MaxFundsLimit.encode({
            amounts: msg.value.amounts.map((coin) => Coin.fromAmino(coin)),
          }).finish(),
        }

      case 'wasm/CombinedLimit':
        return {
          typeUrl: '/cosmwasm.wasm.v1.CombinedLimit',
          value: CombinedLimit.encode({
            callsRemaining: BigInt(msg.value.calls_remaining),
            amounts: msg.value.amounts.map((coin) => Coin.fromAmino(coin)),
          }).finish(),
        }

      default:
        throw new Error(`Unsupported type`)
    }
  }
}

interface MaxCallsLimitAmino {
  type: 'wasm/MaxCallsLimit'
  value: { remaining: string }
}

interface MaxFundsLimitAmino {
  type: 'wasm/MaxFundsLimit'
  value: { amounts: CoinAmino[] }
}

interface CombinedLimitAmino {
  type: 'wasm/CombinedLimit'
  value: { calls_remaining: string; amounts: CoinAmino[] }
}

type ContractFilterAmino =
  | AllowAllMessagesFilterAmino
  | AcceptedMessageKeysFilterAmino
  | AcceptedMessagesFilterAmino

namespace ContractFilter {
  export function toAmino(msg: Any): ContractFilterAmino {
    switch (msg.typeUrl) {
      case '/cosmwasm.wasm.v1.AllowAllMessagesFilter': {
        return {
          type: 'wasm/AllowAllMessagesFilter',
          value: {},
        }
      }

      case '/cosmwasm.wasm.v1.AcceptedMessageKeysFilter': {
        const maxFundsLimit = AcceptedMessageKeysFilter.decode(msg.value)
        return {
          type: 'wasm/AcceptedMessageKeysFilter',
          value: {
            keys: maxFundsLimit.keys,
          },
        }
      }

      case '/cosmwasm.wasm.v1.AcceptedMessagesFilter': {
        const acceptedMessagesFilter = AcceptedMessagesFilter.decode(msg.value)
        return {
          type: 'wasm/AcceptedMessagesFilter',
          value: {
            messages: acceptedMessagesFilter.messages.map((message) =>
              bytesToBase64(message)
            ),
          },
        }
      }

      default:
        throw new Error(`Unsupported typeUrl: ${msg.typeUrl}`)
    }
  }

  export function fromAmino(msg: ContractFilterAmino): Any {
    switch (msg.type) {
      case 'wasm/AllowAllMessagesFilter':
        return {
          typeUrl: '/cosmwasm.wasm.v1.AllowAllMessagesFilter',
          value: AllowAllMessagesFilter.encode({}).finish(),
        }

      case 'wasm/AcceptedMessageKeysFilter':
        return {
          typeUrl: '/cosmwasm.wasm.v1.AcceptedMessageKeysFilter',
          value: AcceptedMessageKeysFilter.encode({
            keys: msg.value.keys,
          }).finish(),
        }

      case 'wasm/AcceptedMessagesFilter':
        return {
          typeUrl: '/cosmwasm.wasm.v1.AcceptedMessagesFilter',
          value: AcceptedMessagesFilter.encode({
            messages: msg.value.messages.map((message) =>
              base64ToBytes(message)
            ),
          }).finish(),
        }

      default:
        throw new Error(`Unsupported type`)
    }
  }
}

interface AllowAllMessagesFilterAmino {
  type: 'wasm/AllowAllMessagesFilter'
  value: object // {}
}

interface AcceptedMessageKeysFilterAmino {
  type: 'wasm/AcceptedMessageKeysFilter'
  value: { keys: string[] }
}

interface AcceptedMessagesFilterAmino {
  type: 'wasm/AcceptedMessagesFilter'
  value: { messages: string[] }
}
