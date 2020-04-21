---
order: 3
---

# Namespace `chain`

## chain_signAddress
Sign the address with BLS private key, return the BLS signature to proof you are the owner of the BLS public key.

#### Parameters
   1. `from`: `STRING`, 32 Bytes - The address which will be signed.
   2. `privateKey`: `DATA`, 32 Bytes - The BLS private key.

    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "0x9A18AC87F0FAB3E99CBC0D2E382063DDA5FD9F1CA951CC2B6CA28EA170A16717"
    ]

#### Returns
`Signature`, `DATA`, 64 Bytes - The BLS signature for the address.


#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"chain_signAddress","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x9A18AC87F0FAB3E99CBC0D2E382063DDA5FD9F1CA951CC2B6CA28EA170A16717"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x4916f71160de68e0a52b49a9dd8fb4cbfb30dd9074b9d0175eabcdab266a14366850d9b0562b7a7a1562d4b0322dba85d145cb087e74b377d58f2e05dc2046f1"}
```

## chain_withdrawReward
Withdraw the staking reward from delegate address.

#### Parameters
   1. `from`: `STRING`, 32 Bytes - The address has voted.
   2. `delegateAddress`: `STRING`, 32 Bytes - The delegate address.

    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU"
    ]

#### Returns
`DATA`, 32 Bytes - The transaction hash.


#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"chain_withdrawReward","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xcb92a3c46995d009f2d9721290366a4bb8f4f780ebf65aa04d9ff51fa9b92f3b"}
```

