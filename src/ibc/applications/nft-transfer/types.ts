import { Params as Params_pb } from '@initia/initia.proto/ibc/applications/nft_transfer/v1/types'

export interface ParamsAmino {
  send_enabled: boolean
  receive_enabled: boolean
}

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    send_enabled: params.sendEnabled,
    receive_enabled: params.receiveEnabled,
  }),
  fromAmino: (params: ParamsAmino): Params_pb => ({
    sendEnabled: params.send_enabled,
    receiveEnabled: params.receive_enabled,
  }),
}
