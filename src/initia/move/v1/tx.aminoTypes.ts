import { UpgradePolicy } from '@initia/initia.proto/initia/move/v1/types'
import { ParamsAmino } from './types'

export interface MsgPublishAmino {
  sender: string
  code_bytes: string[]
  upgrade_policy?: UpgradePolicy
}

export interface MsgExecuteAmino {
  sender: string
  module_address: string
  module_name: string
  function_name: string
  type_args?: string[]
  args?: string[]
}

export interface MsgExecuteJSONAmino {
  sender: string
  module_address: string
  module_name: string
  function_name: string
  type_args?: string[]
  args?: string[]
}

export interface MsgScriptAmino {
  sender: string
  code_bytes: string
  type_args?: string[]
  args?: string[]
}

export interface MsgScriptJSONAmino {
  sender: string
  code_bytes: string
  type_args?: string[]
  args?: string[]
}

export interface MsgGovPublishAmino {
  authority: string
  sender: string
  code_bytes: string[]
  upgrade_policy?: UpgradePolicy
}

export interface MsgGovExecuteAmino {
  authority: string
  sender: string
  module_address: string
  module_name: string
  function_name: string
  type_args?: string[]
  args?: string[]
}

export interface MsgGovExecuteJSONAmino {
  authority: string
  sender: string
  module_address: string
  module_name: string
  function_name: string
  type_args?: string[]
  args?: string[]
}

export interface MsgGovScriptAmino {
  authority: string
  sender: string
  code_bytes: string
  type_args?: string[]
  args?: string[]
}

export interface MsgGovScriptJSONAmino {
  authority: string
  sender: string
  code_bytes: string
  type_args?: string[]
  args?: string[]
}

export interface MsgWhitelistAmino {
  authority: string
  metadata_lp: string
  reward_weight: string
}

export interface MsgDelistAmino {
  authority: string
  metadata_lp: string
}

export interface MsgUpdateParamsAmino {
  authority: string
  params: ParamsAmino
}
