import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgCall,
  MsgCreate,
  MsgCreate2,
  MsgUpdateParams,
} from '@initia/initia.proto/minievm/evm/v1/tx'

import { AminoConverters } from '@cosmjs/stargate'
import {
  MsgCallAmino,
  MsgCreate2Amino,
  MsgCreateAmino,
  MsgUpdateParamsAmino,
} from './tx.aminoTypes'
import { Params as Params_pb } from '@initia/initia.proto/minievm/evm/v1/types'
import { AccessTuple, Params } from './types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/minievm.evm.v1.MsgCreate', MsgCreate],
  ['/minievm.evm.v1.MsgCreate2', MsgCreate2],
  ['/minievm.evm.v1.MsgCall', MsgCall],
  ['/minievm.evm.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/minievm.evm.v1.MsgCreate': {
    aminoType: 'evm/MsgCreate',
    toAmino: (msg: MsgCreate): MsgCreateAmino => ({
      sender: msg.sender,
      code: msg.code,
      value: msg.value,
      access_list: msg.accessList.map((accessTuple) =>
        AccessTuple.toAmino(accessTuple)
      ),
    }),
    fromAmino: (msg: MsgCreateAmino): MsgCreate => ({
      sender: msg.sender,
      code: msg.code,
      value: msg.value,
      accessList: msg.access_list.map((accessTuple) =>
        AccessTuple.fromAmino(accessTuple)
      ),
    }),
  },

  '/minievm.evm.v1.MsgCreate2': {
    aminoType: 'evm/MsgCreate2',
    toAmino: (msg: MsgCreate2): MsgCreate2Amino => ({
      sender: msg.sender,
      code: msg.code,
      value: msg.value,
      salt: msg.salt.toString(),
      access_list: msg.accessList.map((accessTuple) =>
        AccessTuple.toAmino(accessTuple)
      ),
    }),
    fromAmino: (msg: MsgCreate2Amino): MsgCreate2 => ({
      sender: msg.sender,
      code: msg.code,
      value: msg.value,
      salt: BigInt(msg.salt),
      accessList: msg.access_list.map((accessTuple) =>
        AccessTuple.fromAmino(accessTuple)
      ),
    }),
  },

  '/minievm.evm.v1.MsgCall': {
    aminoType: 'evm/MsgCall',
    toAmino: (msg: MsgCall): MsgCallAmino => ({
      sender: msg.sender,
      contract_addr: msg.contractAddr,
      input: msg.input,
      value: msg.value,
      access_list: msg.accessList.map((accessTuple) =>
        AccessTuple.toAmino(accessTuple)
      ),
    }),
    fromAmino: (msg: MsgCallAmino): MsgCall => ({
      sender: msg.sender,
      contractAddr: msg.contract_addr,
      input: msg.input,
      value: msg.value,
      accessList: msg.access_list.map((accessTuple) =>
        AccessTuple.fromAmino(accessTuple)
      ),
    }),
  },

  '/minievm.evm.v1.MsgUpdateParams': {
    aminoType: 'evm/MsgUpdateParams',
    toAmino: (msg: MsgUpdateParams): MsgUpdateParamsAmino => ({
      authority: msg.authority,
      params: Params.toAmino(msg.params as Params_pb),
    }),
    fromAmino: (msg: MsgUpdateParamsAmino): MsgUpdateParams => ({
      authority: msg.authority,
      params: Params.fromAmino(msg.params),
    }),
  },
}
