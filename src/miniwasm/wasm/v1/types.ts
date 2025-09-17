import {
  AccessConfig as AccessConfig_pb,
  accessTypeFromJSON,
  accessTypeToJSON,
} from '@initia/initia.proto/cosmwasm/wasm/v1/types'

export const AccessConfig = {
  toAmino: (msg: AccessConfig_pb): AccessConfigAmino => ({
    permission: accessTypeToJSON(msg.permission),
    addresses: msg.addresses,
  }),
  fromAmino: (msg: AccessConfigAmino): AccessConfig_pb => ({
    permission: accessTypeFromJSON(msg.permission),
    addresses: msg.addresses,
  }),
}

export interface AccessConfigAmino {
  permission: string
  addresses: string[]
}
