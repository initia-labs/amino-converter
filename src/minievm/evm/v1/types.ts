import {
  AccessTuple as AccessTuple_pb,
  Params as Params_pb,
} from '@initia/initia.proto/minievm/evm/v1/types'

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    extra_eips: params.extraEips.map((eip) => eip.toString()),
    allowed_publishers: params.allowedPublishers,
    allow_custom_erc20: params.allowCustomErc20,
    allowed_custom_erc20s: params.allowedCustomErc20s,
    fee_denom: params.feeDenom,
    gas_refund_ratio: params.gasRefundRatio,
    num_retain_block_hashes: params.numRetainBlockHashes.toString(),
  }),

  fromAmino: (params: ParamsAmino): Params_pb => ({
    extraEips: params.extra_eips.map((eip) => BigInt(eip)),
    allowedPublishers: params.allowed_publishers,
    allowCustomErc20: params.allow_custom_erc20,
    allowedCustomErc20s: params.allowed_custom_erc20s,
    feeDenom: params.fee_denom,
    gasRefundRatio: params.gas_refund_ratio,
    numRetainBlockHashes: BigInt(params.num_retain_block_hashes),
  }),
}

export const AccessTuple = {
  toAmino: (accessTuple: AccessTuple_pb): AccessTupleAmino => ({
    address: accessTuple.address,
    storage_keys: accessTuple.storageKeys,
  }),

  fromAmino: (accessTuple: AccessTupleAmino): AccessTuple_pb => ({
    address: accessTuple.address,
    storageKeys: accessTuple.storage_keys,
  }),
}

export interface ParamsAmino {
  extra_eips: string[]
  allowed_publishers: string[]
  allow_custom_erc20: boolean
  allowed_custom_erc20s: string[]
  fee_denom: string
  gas_refund_ratio: string
  num_retain_block_hashes: string
}

export interface AccessTupleAmino {
  address: string
  storage_keys: string[]
}
