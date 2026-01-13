import {
  AccessTuple as AccessTuple_pb,
  Params as Params_pb,
  SetCodeAuthorization as SetCodeAuthorization_pb,
} from '@initia/initia.proto/minievm/evm/v1/types'
import { LegacyDec } from '../../../cosmos/base/v1beta1/coin'
import { base64ToBytes, bytesToBase64 } from '../../../utils'

export const Params = {
  toAmino: (params: Params_pb): ParamsAmino => ({
    extra_eips:
      params.extraEips.length === 0
        ? undefined
        : params.extraEips.map((eip) => eip.toString()),
    allowed_publishers:
      params.allowedPublishers.length === 0 ? null : params.allowedPublishers,
    allow_custom_erc20: params.allowCustomErc20 ? true : undefined,
    allowed_custom_erc20s:
      params.allowedCustomErc20s.length === 0
        ? null
        : params.allowedCustomErc20s,
    fee_denom: params.feeDenom,
    gas_refund_ratio: LegacyDec.toAmino(params.gasRefundRatio),
    num_retain_block_hashes: params.numRetainBlockHashes.toString(),
  }),

  fromAmino: (params: ParamsAmino): Params_pb => ({
    extraEips: params.extra_eips
      ? params.extra_eips.map((eip) => BigInt(eip))
      : [],
    allowedPublishers: params.allowed_publishers ?? [],
    allowCustomErc20: params.allow_custom_erc20 ?? false,
    allowedCustomErc20s: params.allowed_custom_erc20s ?? [],
    feeDenom: params.fee_denom,
    gasRefundRatio: LegacyDec.fromAmino(params.gas_refund_ratio),
    numRetainBlockHashes: BigInt(params.num_retain_block_hashes),
  }),
}

export const SetCodeAuthorization = {
  toAmino: (
    setCodeAuthorization: SetCodeAuthorization_pb
  ): SetCodeAuthorizationAmino => ({
    chain_id: setCodeAuthorization.chainId,
    address: setCodeAuthorization.address,
    nonce: setCodeAuthorization.nonce.toString(),
    signature: bytesToBase64(setCodeAuthorization.signature),
  }),

  fromAmino: (
    setCodeAuthorization: SetCodeAuthorizationAmino
  ): SetCodeAuthorization_pb => ({
    chainId: setCodeAuthorization.chain_id,
    address: setCodeAuthorization.address,
    nonce: BigInt(setCodeAuthorization.nonce),
    signature: base64ToBytes(setCodeAuthorization.signature),
  }),
}

export const AccessTuple = {
  toAmino: (accessTuple: AccessTuple_pb): AccessTupleAmino => ({
    address: accessTuple.address,
    storage_keys: accessTuple.storageKeys.length === 0 ? undefined : [],
  }),

  fromAmino: (accessTuple: AccessTupleAmino): AccessTuple_pb => ({
    address: accessTuple.address,
    storageKeys: accessTuple.storage_keys ?? [],
  }),
}

export interface ParamsAmino {
  extra_eips?: string[]
  allowed_publishers: string[] | null
  allow_custom_erc20?: boolean
  allowed_custom_erc20s: string[] | null
  fee_denom: string
  gas_refund_ratio: string
  num_retain_block_hashes: string
}

export interface AccessTupleAmino {
  address: string
  storage_keys?: string[]
}

export interface SetCodeAuthorizationAmino {
  chain_id: string
  address: string
  nonce: string
  signature: string
}
