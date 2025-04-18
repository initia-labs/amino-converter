import { GeneratedType } from '@cosmjs/proto-signing'
import {
  MsgPublish,
  MsgExecute,
  MsgExecuteJSON,
  MsgScript,
  MsgScriptJSON,
  MsgGovPublish,
  MsgGovExecute,
  MsgGovExecuteJSON,
  MsgGovScript,
  MsgGovScriptJSON,
  MsgWhitelist,
  MsgDelist,
  MsgUpdateParams,
} from '@initia/initia.proto/initia/move/v1/tx'
import { base64ToBytes, bytesToBase64 } from '../../../utils'
import {
  MsgDelistAmino,
  MsgExecuteAmino,
  MsgExecuteJSONAmino,
  MsgGovExecuteAmino,
  MsgGovExecuteJSONAmino,
  MsgGovPublishAmino,
  MsgGovScriptAmino,
  MsgGovScriptJSONAmino,
  MsgPublishAmino,
  MsgScriptAmino,
  MsgScriptJSONAmino,
  MsgUpdateParamsAmino,
  MsgWhitelistAmino,
} from './tx.aminoTypes'
import { AminoConverters } from '@cosmjs/stargate'
import { Params } from './types'
import {
  Params as Params_pb,
  UpgradePolicy,
} from '@initia/initia.proto/initia/move/v1/types'

// registry

export const registry: readonly [string, GeneratedType][] = [
  ['/initia.move.v1.MsgPublish', MsgPublish],
  ['/initia.move.v1.MsgExecute', MsgExecute],
  ['/initia.move.v1.MsgExecuteJSON', MsgExecuteJSON],
  ['/initia.move.v1.MsgScript', MsgScript],
  ['/initia.move.v1.MsgScriptJSON', MsgScriptJSON],
  ['/initia.move.v1.MsgGovPublish', MsgGovPublish],
  ['/initia.move.v1.MsgGovExecute', MsgGovExecute],
  ['/initia.move.v1.MsgGovExecuteJSON', MsgGovExecuteJSON],
  ['/initia.move.v1.MsgGovScript', MsgGovScript],
  ['/initia.move.v1.MsgGovScriptJSON', MsgGovScriptJSON],
  ['/initia.move.v1.MsgWhitelist', MsgWhitelist],
  ['/initia.move.v1.MsgDelist', MsgDelist],
  ['/initia.move.v1.MsgUpdateParams', MsgUpdateParams],
]

// amino converters
export const aminoConverters: AminoConverters = {
  '/initia.move.v1.MsgPublish': {
    aminoType: 'move/MsgPublish',
    toAmino: (msg: MsgPublish): MsgPublishAmino => ({
      sender: msg.sender,
      code_bytes:
        msg.codeBytes.length === 0
          ? undefined
          : msg.codeBytes.map((bytes) => bytesToBase64(bytes)),
      upgrade_policy:
        msg.upgradePolicy === UpgradePolicy.UNSPECIFIED
          ? undefined
          : msg.upgradePolicy,
    }),
    fromAmino: (msg: MsgPublishAmino): MsgPublish => ({
      sender: msg.sender,
      codeBytes: msg.code_bytes
        ? msg.code_bytes.map((str) => base64ToBytes(str))
        : [],
      upgradePolicy: msg.upgrade_policy ?? UpgradePolicy.UNSPECIFIED,
    }),
  },
  '/initia.move.v1.MsgExecute': {
    aminoType: 'move/MsgExecute',
    toAmino: (msg: MsgExecute): MsgExecuteAmino => ({
      sender: msg.sender,
      module_address: msg.moduleAddress,
      module_name: msg.moduleName,
      function_name: msg.functionName,
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args:
        msg.args.length === 0
          ? undefined
          : msg.args.map((bytes) => bytesToBase64(bytes)),
    }),
    fromAmino: (msg: MsgExecuteAmino): MsgExecute => ({
      sender: msg.sender,
      moduleAddress: msg.module_address,
      moduleName: msg.module_name,
      functionName: msg.function_name,
      typeArgs: msg.type_args ?? [],
      args: msg.args ? msg.args.map((arg) => base64ToBytes(arg)) : [],
    }),
  },
  '/initia.move.v1.MsgExecuteJSON': {
    aminoType: 'move/MsgExecuteJSON',
    toAmino: (msg: MsgExecuteJSON): MsgExecuteJSONAmino => ({
      sender: msg.sender,
      module_address: msg.moduleAddress,
      module_name: msg.moduleName,
      function_name: msg.functionName,
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args: msg.args.length === 0 ? undefined : msg.args,
    }),
    fromAmino: (msg: MsgExecuteJSONAmino): MsgExecuteJSON => ({
      sender: msg.sender,
      moduleAddress: msg.module_address,
      moduleName: msg.module_name,
      functionName: msg.function_name,
      typeArgs: msg.type_args ?? [],
      args: msg.args ?? [],
    }),
  },
  '/initia.move.v1.MsgScript': {
    aminoType: 'move/MsgScript',
    toAmino: (msg: MsgScript): MsgScriptAmino => ({
      sender: msg.sender,
      code_bytes: bytesToBase64(msg.codeBytes),
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args:
        msg.args.length === 0
          ? undefined
          : msg.args.map((bytes) => bytesToBase64(bytes)),
    }),
    fromAmino: (msg: MsgScriptAmino): MsgScript => ({
      sender: msg.sender,
      codeBytes: base64ToBytes(msg.code_bytes),
      typeArgs: msg.type_args ?? [],
      args: msg.args ? msg.args.map((arg) => base64ToBytes(arg)) : [],
    }),
  },
  '/initia.move.v1.MsgScriptJSON': {
    aminoType: 'move/MsgScriptJSON',
    toAmino: (msg: MsgScriptJSON): MsgScriptJSONAmino => ({
      sender: msg.sender,
      code_bytes: bytesToBase64(msg.codeBytes),
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args: msg.args.length === 0 ? undefined : msg.args,
    }),
    fromAmino: (msg: MsgScriptJSONAmino): MsgScriptJSON => ({
      sender: msg.sender,
      codeBytes: base64ToBytes(msg.code_bytes),
      typeArgs: msg.type_args ?? [],
      args: msg.args ?? [],
    }),
  },
  '/initia.move.v1.MsgGovPublish': {
    aminoType: 'move/MsgGovPublish',
    toAmino: (msg: MsgGovPublish): MsgGovPublishAmino => ({
      authority: msg.authority,
      sender: msg.sender,
      code_bytes:
        msg.codeBytes.length === 0
          ? undefined
          : msg.codeBytes.map((bytes) => bytesToBase64(bytes)),
      upgrade_policy:
        msg.upgradePolicy === UpgradePolicy.UNSPECIFIED
          ? undefined
          : msg.upgradePolicy,
    }),
    fromAmino: (msg: MsgGovPublishAmino): MsgGovPublish => ({
      authority: msg.authority,
      sender: msg.sender,
      codeBytes: msg.code_bytes
        ? msg.code_bytes.map((str) => base64ToBytes(str))
        : [],
      upgradePolicy: msg.upgrade_policy ?? UpgradePolicy.UNSPECIFIED,
    }),
  },
  '/initia.move.v1.MsgGovExecute': {
    aminoType: 'move/MsgGovExecute',
    toAmino: (msg: MsgGovExecute): MsgGovExecuteAmino => ({
      authority: msg.authority,
      sender: msg.sender,
      module_address: msg.moduleAddress,
      module_name: msg.moduleName,
      function_name: msg.functionName,
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args:
        msg.args.length === 0
          ? undefined
          : msg.args.map((bytes) => bytesToBase64(bytes)),
    }),
    fromAmino: (msg: MsgGovExecuteAmino): MsgGovExecute => ({
      authority: msg.authority,
      sender: msg.sender,
      moduleAddress: msg.module_address,
      moduleName: msg.module_name,
      functionName: msg.function_name,
      typeArgs: msg.type_args ?? [],
      args: msg.args ? msg.args.map((arg) => base64ToBytes(arg)) : [],
    }),
  },
  '/initia.move.v1.MsgGovExecuteJSON': {
    aminoType: 'move/MsgGovExecuteJSON',
    toAmino: (msg: MsgGovExecuteJSON): MsgGovExecuteJSONAmino => ({
      authority: msg.authority,
      sender: msg.sender,
      module_address: msg.moduleAddress,
      module_name: msg.moduleName,
      function_name: msg.functionName,
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args: msg.args.length === 0 ? undefined : msg.args,
    }),
    fromAmino: (msg: MsgGovExecuteJSONAmino): MsgGovExecuteJSON => ({
      authority: msg.authority,
      sender: msg.sender,
      moduleAddress: msg.module_address,
      moduleName: msg.module_name,
      functionName: msg.function_name,
      typeArgs: msg.type_args ?? [],
      args: msg.args ?? [],
    }),
  },
  '/initia.move.v1.MsgGovScript': {
    aminoType: 'move/MsgGovScript',
    toAmino: (msg: MsgGovScript): MsgGovScriptAmino => ({
      authority: msg.authority,
      sender: msg.sender,
      code_bytes: bytesToBase64(msg.codeBytes),
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args:
        msg.args.length === 0
          ? undefined
          : msg.args.map((bytes) => bytesToBase64(bytes)),
    }),
    fromAmino: (msg: MsgGovScriptAmino): MsgGovScript => ({
      authority: msg.authority,
      sender: msg.sender,
      codeBytes: base64ToBytes(msg.code_bytes),
      typeArgs: msg.type_args ?? [],
      args: msg.args ? msg.args.map((arg) => base64ToBytes(arg)) : [],
    }),
  },
  '/initia.move.v1.MsgGovScriptJSON': {
    aminoType: 'move/MsgGovScriptJSON',
    toAmino: (msg: MsgGovScriptJSON): MsgGovScriptJSONAmino => ({
      authority: msg.authority,
      sender: msg.sender,
      code_bytes: bytesToBase64(msg.codeBytes),
      type_args: msg.typeArgs.length === 0 ? undefined : msg.typeArgs,
      args: msg.args.length === 0 ? undefined : msg.args,
    }),
    fromAmino: (msg: MsgGovScriptJSONAmino): MsgGovScriptJSON => ({
      authority: msg.authority,
      sender: msg.sender,
      codeBytes: base64ToBytes(msg.code_bytes),
      typeArgs: msg.type_args ?? [],
      args: msg.args ?? [],
    }),
  },
  '/initia.move.v1.MsgWhitelist': {
    aminoType: 'move/MsgWhitelist',
    toAmino: (msg: MsgWhitelist): MsgWhitelistAmino => ({
      authority: msg.authority,
      metadata_lp: msg.metadataLp,
      reward_weight: msg.rewardWeight,
    }),
    fromAmino: (msg: MsgWhitelistAmino): MsgWhitelist => ({
      authority: msg.authority,
      metadataLp: msg.metadata_lp,
      rewardWeight: msg.reward_weight,
    }),
  },
  '/initia.move.v1.MsgDelist': {
    aminoType: 'move/MsgDelist',
    toAmino: (msg: MsgDelist): MsgDelistAmino => ({
      authority: msg.authority,
      metadata_lp: msg.metadataLp,
    }),
    fromAmino: (msg: MsgDelistAmino): MsgDelist => ({
      authority: msg.authority,
      metadataLp: msg.metadata_lp,
    }),
  },
  '/initia.move.v1.MsgUpdateParams': {
    aminoType: 'move/MsgUpdateParams',
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
