import { Height as Height_pb } from '@initia/initia.proto/ibc/core/client/v1/client'

export interface HeightAmino {
  revision_number?: string
  revision_height?: string
}

export const Height = {
  toAmino: (height: Height_pb): HeightAmino => {
    if (height.revisionNumber === 0n && height.revisionHeight === 0n) {
      return {}
    }

    return {
      revision_number: height.revisionNumber.toString(),
      revision_height: height.revisionHeight.toString(),
    }
  },
  fromAmino: (height: HeightAmino): Height_pb | undefined => {
    if (
      height.revision_height === undefined &&
      height.revision_height === undefined
    ) {
      return {
        revisionHeight: 0n,
        revisionNumber: 0n,
      }
    }

    if (
      height.revision_height === undefined ||
      height.revision_number === undefined
    ) {
      throw new Error(
        'Both revision_height and revision_number must exist or neither must exist.'
      )
    }

    return {
      revisionHeight: BigInt(height.revision_height),
      revisionNumber: BigInt(height.revision_number),
    }
  },
}
