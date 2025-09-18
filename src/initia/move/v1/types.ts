import {
  Params as Params_pb,
  ExecuteAuthorizationItem as ExecuteAuthorizationItem_pb,
} from '@initia/initia.proto/initia/move/v1/types'

export const Params = {
  toAmino: (msg: Params_pb): ParamsAmino => ({
    base_denom: msg.baseDenom,
    base_min_gas_price: msg.baseMinGasPrice,
    contract_shared_revenue_ratio: msg.contractSharedRevenueRatio,
    script_enabled: msg.scriptEnabled,
    allowed_publishers:
      msg.allowedPublishers.length === 0 ? null : msg.allowedPublishers,
  }),
  fromAmino: (msg: ParamsAmino): Params_pb => ({
    baseDenom: msg.base_denom,
    baseMinGasPrice: msg.base_min_gas_price,
    contractSharedRevenueRatio: msg.contract_shared_revenue_ratio,
    scriptEnabled: msg.script_enabled,
    allowedPublishers: msg.allowed_publishers ?? [],
  }),
}

export interface ParamsAmino {
  base_denom: string
  base_min_gas_price: string
  contract_shared_revenue_ratio: string
  script_enabled: boolean
  allowed_publishers: string[] | null
}

export const ExecuteAuthorizationItem = {
  toAmino: (
    msg: ExecuteAuthorizationItem_pb
  ): ExecuteAuthorizationItemAmino => ({
    module_address: msg.moduleAddress,
    module_name: msg.moduleName,
    function_name:
      msg.functionNames.length === 0 ? undefined : msg.functionNames,
  }),
  fromAmino: (
    msg: ExecuteAuthorizationItemAmino
  ): ExecuteAuthorizationItem_pb => ({
    moduleAddress: msg.module_address,
    moduleName: msg.module_name,
    functionNames: msg.function_name ?? [],
  }),
}

export interface ExecuteAuthorizationItemAmino {
  module_address: string
  module_name: string
  function_name?: string[]
}
