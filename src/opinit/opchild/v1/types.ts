import {
  BridgeInfo as BridgeInfo_pb,
  Params as Params_pb,
} from '@initia/opinit.proto/opinit/opchild/v1/types'

import { BridgeConfig, BridgeConfigAmino } from '../../ophost/v1/types'
import { BridgeConfig as BridgeConfig_pb } from '@initia/opinit.proto/opinit/ophost/v1/types'
import { Coin, CoinAmino } from '../../../cosmos/base/v1beta1/coin'

export const BridgeInfo = {
  toAmino: (bridgeInfo: BridgeInfo_pb): BridgeInfoAmino => ({
    bridge_id: bridgeInfo.bridgeId.toString(),
    bridge_addr: bridgeInfo.bridgeAddr,
    l1_chain_id: bridgeInfo.l1ChainId,
    l1_client_id: bridgeInfo.l1ClientId,
    bridge_config: BridgeConfig.toAmino(
      bridgeInfo.bridgeConfig as BridgeConfig_pb
    ),
  }),
  fromAmino: (bridgeInfo: BridgeInfoAmino): BridgeInfo_pb => ({
    bridgeId: BigInt(bridgeInfo.bridge_id),
    bridgeAddr: bridgeInfo.bridge_addr,
    l1ChainId: bridgeInfo.l1_chain_id,
    l1ClientId: bridgeInfo.l1_client_id,
    bridgeConfig: BridgeConfig.fromAmino(bridgeInfo.bridge_config),
  }),
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    max_validators: params.maxValidators,
    historical_entries: params.historicalEntries,
    min_gas_prices: params.minGasPrices.map((coin) => Coin.toAmino(coin)),
    bridge_executors: params.bridgeExecutors,
    admin: params.admin,
    fee_whitelist: params.feeWhitelist,
    hook_max_gas: params.hookMaxGas.toString(),
  }),

  fromAmino: (params: ParamsAmino): Params_pb => ({
    maxValidators: params.max_validators,
    historicalEntries: params.historical_entries,
    minGasPrices: params.min_gas_prices.map((coin) => Coin.fromAmino(coin)),
    bridgeExecutors: params.bridge_executors,
    admin: params.admin,
    feeWhitelist: params.fee_whitelist,
    hookMaxGas: BigInt(params.hook_max_gas),
  }),
}

export interface BridgeInfoAmino {
  bridge_id: string
  bridge_addr: string
  l1_chain_id: string
  l1_client_id: string
  bridge_config: BridgeConfigAmino
}

export interface ParamsAmino {
  max_validators: number
  historical_entries: number
  min_gas_prices: CoinAmino[]
  bridge_executors: string[]
  admin: string
  fee_whitelist: string[]
  hook_max_gas: string
}
