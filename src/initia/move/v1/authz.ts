import {
  ExecuteAuthorization as ExecuteAuthorization_pb,
  PublishAuthorization as PublishAuthorization_pb,
} from '@initia/initia.proto/initia/move/v1/authz'
import {
  ExecuteAuthorizationItem,
  ExecuteAuthorizationItemAmino,
} from './types'

export const ExecuteAuthorization = {
  toAmino: (msg: ExecuteAuthorization_pb): ExecuteAuthorizationAmino => ({
    items: msg.items.map((item) => ExecuteAuthorizationItem.toAmino(item)),
  }),
  fromAmino: (msg: ExecuteAuthorizationAmino): ExecuteAuthorization_pb => ({
    items: msg.items.map((item) => ExecuteAuthorizationItem.fromAmino(item)),
  }),
}

export interface ExecuteAuthorizationAmino {
  items: ExecuteAuthorizationItemAmino[]
}

export const PublishAuthorization = {
  toAmino: (msg: PublishAuthorization_pb): PublishAuthorizationAmino => ({
    module_names: msg.moduleNames,
  }),
  fromAmino: (msg: PublishAuthorizationAmino): PublishAuthorization_pb => ({
    moduleNames: msg.module_names,
  }),
}

export interface PublishAuthorizationAmino {
  module_names: string[]
}
