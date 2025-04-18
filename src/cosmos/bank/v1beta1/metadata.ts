import { Metadata as Metadata_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank'
import { DenomUnit, DenomUnitAmino } from './denomUnit'

export interface MetadataAmino {
  description: string
  denom_units?: DenomUnitAmino[]
  base: string
  display: string
  name: string
  symbol: string
  uri: string
  uri_hash: string
}

export const Metadata = {
  toAmino: (metadata: Metadata_pb): MetadataAmino => ({
    description: metadata.description,
    denom_units:
      metadata.denomUnits.length === 0
        ? undefined
        : metadata.denomUnits.map((denomUint) => DenomUnit.toAmino(denomUint)),
    base: metadata.base,
    display: metadata.display,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    uri_hash: metadata.uriHash,
  }),
  fromAmino: (metadata: MetadataAmino): Metadata_pb => ({
    description: metadata.description,
    denomUnits: metadata.denom_units
      ? metadata.denom_units.map((denomUnit) => DenomUnit.fromAmino(denomUnit))
      : [],
    base: metadata.base,
    display: metadata.display,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    uriHash: metadata.uri_hash,
  }),
}
