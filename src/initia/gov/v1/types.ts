import { Params as Params_pb } from '@initia/initia.proto/initia/ibchooks/v1/types'

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    default_allowed: params.defaultAllowed,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    defaultAllowed: params.default_allowed,
  }),
}

export interface ParamsAmino {
  default_allowed: boolean
}
