import { MetadataAmino } from '../../../cosmos/bank/v1beta1/metadata'

export interface MsgSetDenomMetadataAmino {
  authority: string
  metadata: MetadataAmino
}
