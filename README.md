# @initia/amino-converter

Amino types and proto registry for initia chains

---

## Installation

```bash
npm install @initia/amino-converter
```

## Included Types

- [Cosmos Types](https://github.com/cosmos/cosmos-sdk/tree/main/proto)
- [Cosmwasm Types](https://github.com/cosmos/wasmd/tree/master/proto)
- [Initia Types](https://github.com/initia-labs/initia/tree/main/proto)
- [Evm Types](https://github.com/initia-labs/minievm/tree/main/proto)
- [Opinit Types](https://github.com/initia-labs/OPinit/tree/main/proto)

## Usage

### With Signing Stargate Client

```typescript
import { SigningStargateClient } from '@cosmjs/stargate'
import { registry, aminoTypes } from '@initia/amino-converter'

const signingClient = SigningStargateClient.connectWithSigner(
  '[RPC-URL]',
  signer, // Offline signer
  {
    registry,
    aminoTypes,
  }
)
```

### Add Custom Types

```typescript
import { Registry } from '@cosmjs/proto-signing'
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate'
import { protoRegistry, aminoConverters } from '@initia/amino-converter'

const registry = new Registry([...protoRegistry, ...customRegistry])

const aminoTypes = new AminoTypes({
  ...aminoConverters,
  ...customAminoConverters,
})

const signingClient = SigningStargateClient.connectWithSigner(
  '[RPC-URL]',
  signer, // Offline signer
  {
    registry,
    aminoTypes,
  }
)
```

### Generate Amino Converter With Custom Msg

If you need to use `MsgExecuteMessages`, `MsgSubmitProposal` and `MsgSubmitTx` with your custom messages, you need to register your custom messages to thier amino converter.

```typescript
import { Registry } from '@cosmjs/proto-signing'
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate'
import {
  protoRegistry,
  aminoConverters,
  generateMsgExecuteMessagesAminoConverter,
  generateMsgSubmitProposalAminoConverter,
  generateMsgSubmitTxAminoConverter,
} from '@initia/amino-converter'

const registry = new Registry([...protoRegistry, ...customRegistry])

const msgExecuteMessagesAminoConverter =
  generateMsgExecuteMessagesAminoConverter(
    [...protoRegistry, ...customRegistry],
    {
      ...aminoConverters,
      ...customAminoConverters,
    }
  ) // register custom msg

const aminoTypes = new AminoTypes({
  ...aminoConverters,
  ...customAminoConverters,
  msgExecuteMessagesAminoConverter,
})

const signingClient = SigningStargateClient.connectWithSigner(
  '[RPC-URL]',
  signer, // Offline signer
  {
    registry,
    aminoTypes,
  }
)
```
