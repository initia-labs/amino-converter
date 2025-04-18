import { DenomUnit as DenomUnit_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank'

export interface DenomUnitAmino {
  denom: string
  exponent: string
  aliases?: string[]
}

export const DenomUnit = {
  toAmino: (denomUnit: DenomUnit_pb): DenomUnitAmino => ({
    denom: denomUnit.denom,
    exponent: denomUnit.exponent.toString(),
    aliases: denomUnit.aliases.length === 0 ? undefined : denomUnit.aliases,
  }),
  fromAmino: (denomUnit: DenomUnitAmino): DenomUnit_pb => ({
    denom: denomUnit.denom,
    exponent: Number(denomUnit.exponent),
    aliases: denomUnit.aliases ?? [],
  }),
}
