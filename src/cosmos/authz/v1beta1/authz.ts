import {
  Grant as Grant_pb,
  GenericAuthorization as GenericAuthorization_pb,
} from '@initia/initia.proto/cosmos/authz/v1beta1/authz'
import { AuthorizationMsg, AuthorizationMsgAmino } from './authorization'
import { Any } from '@initia/initia.proto/google/protobuf/any'

export const Grant = {
  toAmino: (msg: Grant_pb): GrantAmino => ({
    authorization: AuthorizationMsg.toAmino(msg.authorization as Any),
    expiration: (msg.expiration as Date).toISOString(),
  }),
  fromAmino: (msg: GrantAmino): Grant_pb => ({
    authorization: AuthorizationMsg.fromAmino(msg.authorization),
    expiration: new Date(msg.expiration),
  }),
}

export interface GrantAmino {
  authorization: AuthorizationMsgAmino
  expiration: string
}

export const GenericAuthorization = {
  toAmino: (msg: GenericAuthorization_pb): GenericAuthorizationAmino => ({
    msg: msg.msg,
  }),
  fromAmino: (msg: GenericAuthorizationAmino): GenericAuthorization_pb => ({
    msg: msg.msg,
  }),
}

export interface GenericAuthorizationAmino {
  msg: string
}
