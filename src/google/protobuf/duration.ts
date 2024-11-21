import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration'

export type DurationAmino = string

export const Duration = {
  toAmino: (duration: Duration_pb): DurationAmino => {
    const { seconds, nanos } = duration

    let str = seconds * BigInt(1_000_000_000) + BigInt(nanos) < 0 ? '-' : ''

    str += seconds < BigInt(0) ? (-seconds).toString() : seconds.toString()

    if (nanos !== 0) {
      const nanosStr = nanos.toString().replace(/0+$/, '') // Trim trailing zeros
      str += '.' + nanosStr
    }

    str += 's'

    return str
  },
  fromAmino: (duration: DurationAmino): Duration_pb => {
    const negative = duration.startsWith('-')
    const [sec, nano = '0'] = duration.slice(negative ? 1 : 0).split('.')
    const paddedNano = nano.padEnd(9, '0')

    return {
      seconds: (negative ? BigInt(-1) : BigInt(1)) * BigInt(sec),
      nanos: (negative ? -1 : 1) * Number(paddedNano),
    }
  },
}
