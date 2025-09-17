import { Any } from '@initia/initia.proto/google/protobuf/any'
import {
  ExecuteAuthorizationAmino,
  PublishAuthorizationAmino,
} from '../../../initia/move/v1/authz'
import { StakeAuthorizationAmino } from '../../../initia/mstaking/v1/authz'
import {
  CodeGrant,
  ContractExecutionAuthorizationAmino,
  ContractGrant,
  ContractMigrationAuthorizationAmino,
  StoreCodeAuthorizationAmino,
} from '../../../miniwasm/wasm/v1/authz'
import { SendAuthorizationAmino } from '../../bank/v1beta1/authz'
import { GenericAuthorizationAmino } from './authz'

import { GenericAuthorization } from '@initia/initia.proto/cosmos/authz/v1beta1/authz'
import { SendAuthorization } from '@initia/initia.proto/cosmos/bank/v1beta1/authz'
import { Coin } from '../../base/v1beta1/coin'
import {
  authorizationTypeFromJSON,
  authorizationTypeToJSON,
  StakeAuthorization,
} from '@initia/initia.proto/initia/mstaking/v1/authz'
import {
  ExecuteAuthorization,
  PublishAuthorization,
} from '@initia/initia.proto/initia/move/v1/authz'
import { ExecuteAuthorizationItem } from '../../../initia/move/v1/types'
import {
  ContractExecutionAuthorization,
  ContractMigrationAuthorization,
  StoreCodeAuthorization,
} from '@initia/initia.proto/cosmwasm/wasm/v1/authz'

export const AuthorizationMsg = {
  toAmino: (msg: Any): AuthorizationMsgAmino => {
    switch (msg.typeUrl) {
      case '/cosmos.authz.v1beta1.GenericAuthorization': {
        const genericAuthorization = GenericAuthorization.decode(msg.value)
        return {
          type: 'cosmos-sdk/GenericAuthorization',
          value: { msg: genericAuthorization.msg },
        }
      }

      case '/cosmos.bank.v1beta1.SendAuthorization': {
        const sendAuthorization = SendAuthorization.decode(msg.value)
        return {
          type: 'cosmos-sdk/SendAuthorization',
          value: {
            spend_lmit: sendAuthorization.spendLimit.map((coin) =>
              Coin.toAmino(coin)
            ),
            allow_list: sendAuthorization.allowList,
          },
        }
      }

      case '/initia.mstaking.v1.StakeAuthorization': {
        const stakeAuthorization = StakeAuthorization.decode(msg.value)
        return {
          type: 'mstaking/StakeAuthorization',
          value: {
            max_tokens: stakeAuthorization.maxTokens.map((coin) =>
              Coin.toAmino(coin)
            ),
            allow_list: stakeAuthorization.allowList,
            deny_list: stakeAuthorization.denyList,
            authorization_type: authorizationTypeToJSON(
              stakeAuthorization.authorizationType
            ),
          },
        }
      }

      case '/initia.move.v1.PublishAuthorization': {
        const publishAuthorization = PublishAuthorization.decode(msg.value)
        return {
          type: 'move/PublishAuthorization',
          value: {
            module_names: publishAuthorization.moduleNames,
          },
        }
      }

      case '/initia.move.v1.ExecuteAuthorization': {
        const executeAuthorization = ExecuteAuthorization.decode(msg.value)
        return {
          type: 'move/ExecuteAuthorization',
          value: {
            items: executeAuthorization.items.map((item) =>
              ExecuteAuthorizationItem.toAmino(item)
            ),
          },
        }
      }

      case '/initia.wasm.v1.StoreCodeAuthorization': {
        const storeCodeAuthorization = StoreCodeAuthorization.decode(msg.value)
        return {
          type: 'wasm/StoreCodeAuthorization',
          value: {
            grants:
              storeCodeAuthorization.grants.length === 0
                ? null
                : storeCodeAuthorization.grants.map((grant) =>
                    CodeGrant.toAmino(grant)
                  ),
          },
        }
      }

      case '/initia.wasm.v1.ContractExecutionAuthorization': {
        const contractExecutionAuthorization =
          ContractExecutionAuthorization.decode(msg.value)
        return {
          type: 'wasm/ContractExecutionAuthorization',
          value: {
            grants:
              contractExecutionAuthorization.grants.length === 0
                ? null
                : contractExecutionAuthorization.grants.map((grant) =>
                    ContractGrant.toAmino(grant)
                  ),
          },
        }
      }

      case '/initia.wasm.v1.ContractMigrationAuthorization': {
        const contractMigrationAuthorization =
          ContractMigrationAuthorization.decode(msg.value)
        return {
          type: 'wasm/ContractMigrationAuthorization',
          value: {
            grants:
              contractMigrationAuthorization.grants.length === 0
                ? null
                : contractMigrationAuthorization.grants.map((grant) =>
                    ContractGrant.toAmino(grant)
                  ),
          },
        }
      }

      default:
        throw new Error(`Unsupported typeUrl: ${msg.typeUrl}`)
    }
  },
  fromAmino: (msg: AuthorizationMsgAmino): Any => {
    switch (msg.type) {
      case 'cosmos-sdk/GenericAuthorization': {
        const value = GenericAuthorization.fromPartial({
          msg: msg.value.msg,
        })
        return {
          typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
          value: GenericAuthorization.encode(value).finish(),
        }
      }

      case 'cosmos-sdk/SendAuthorization': {
        const value = SendAuthorization.fromPartial({
          spendLimit: msg.value.spend_lmit.map((coin) => Coin.fromAmino(coin)),
          allowList: msg.value.allow_list,
        })
        return {
          typeUrl: '/cosmos.bank.v1beta1.SendAuthorization',
          value: SendAuthorization.encode(value).finish(),
        }
      }

      case 'mstaking/StakeAuthorization': {
        const value = StakeAuthorization.fromPartial({
          maxTokens: msg.value.max_tokens.map((coin) => Coin.fromAmino(coin)),
          allowList: msg.value.allow_list,
          denyList: msg.value.deny_list,
          authorizationType: authorizationTypeFromJSON(
            msg.value.authorization_type
          ),
        })
        return {
          typeUrl: '/initia.mstaking.v1.StakeAuthorization',
          value: StakeAuthorization.encode(value).finish(),
        }
      }

      case 'move/PublishAuthorization': {
        const value = PublishAuthorization.fromPartial({
          moduleNames: msg.value.module_names,
        })
        return {
          typeUrl: '/initia.move.v1.PublishAuthorization',
          value: PublishAuthorization.encode(value).finish(),
        }
      }

      case 'move/ExecuteAuthorization': {
        const value = ExecuteAuthorization.fromPartial({
          items: msg.value.items.map((item) =>
            ExecuteAuthorizationItem.fromAmino(item)
          ),
        })
        return {
          typeUrl: '/initia.move.v1.ExecuteAuthorization',
          value: ExecuteAuthorization.encode(value).finish(),
        }
      }

      case 'wasm/StoreCodeAuthorization': {
        const value = StoreCodeAuthorization.fromPartial({
          grants: msg.value.grants
            ? msg.value.grants.map((grant) => CodeGrant.fromAmino(grant))
            : [],
        })
        return {
          typeUrl: '/initia.wasm.v1.StoreCodeAuthorization',
          value: StoreCodeAuthorization.encode(value).finish(),
        }
      }

      case 'wasm/ContractExecutionAuthorization': {
        const value = ContractExecutionAuthorization.fromPartial({
          grants: msg.value.grants
            ? msg.value.grants.map((grant) => ContractGrant.fromAmino(grant))
            : [],
        })
        return {
          typeUrl: '/initia.wasm.v1.ContractExecutionAuthorization',
          value: ContractExecutionAuthorization.encode(value).finish(),
        }
      }

      case 'wasm/ContractMigrationAuthorization': {
        const value = ContractMigrationAuthorization.fromPartial({
          grants: msg.value.grants
            ? msg.value.grants.map((grant) => ContractGrant.fromAmino(grant))
            : [],
        })
        return {
          typeUrl: '/initia.wasm.v1.ContractMigrationAuthorization',
          value: ContractMigrationAuthorization.encode(value).finish(),
        }
      }

      default:
        throw new Error(`Unsupported type`)
    }
  },
}

export type AuthorizationMsgAmino =
  | SendAuthorizationMsgAmino
  | GenericAuthorizationMsgAmino
  | StakeAuthorizationMsgAmino
  | PublishAuthorizationMsgAmino
  | ExecuteAuthorizationMsgAmino
  | StoreCodeAuthorizationMsgAmino
  | ContractExecutionAuthorizationMsgAmino
  | ContractMigrationAuthorizationMsgAmino

export interface SendAuthorizationMsgAmino {
  type: 'cosmos-sdk/SendAuthorization'
  value: SendAuthorizationAmino
}

export interface GenericAuthorizationMsgAmino {
  type: 'cosmos-sdk/GenericAuthorization'
  value: GenericAuthorizationAmino
}

export interface StakeAuthorizationMsgAmino {
  type: 'mstaking/StakeAuthorization'
  value: StakeAuthorizationAmino
}

export interface PublishAuthorizationMsgAmino {
  type: 'move/PublishAuthorization'
  value: PublishAuthorizationAmino
}

export interface ExecuteAuthorizationMsgAmino {
  type: 'move/ExecuteAuthorization'
  value: ExecuteAuthorizationAmino
}

export interface StoreCodeAuthorizationMsgAmino {
  type: 'wasm/StoreCodeAuthorization'
  value: StoreCodeAuthorizationAmino
}

export interface ContractExecutionAuthorizationMsgAmino {
  type: 'wasm/ContractExecutionAuthorization'
  value: ContractExecutionAuthorizationAmino
}

export interface ContractMigrationAuthorizationMsgAmino {
  type: 'wasm/ContractMigrationAuthorization'
  value: ContractMigrationAuthorizationAmino
}
