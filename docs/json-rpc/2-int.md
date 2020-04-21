---
order: 2
---

# Namespace `int` 

## int_protocolVersion
Returns the current intchain protocol version.

#### Parameters
None

#### Returns

`STRING` - The current intchain protocol version.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_protocolVersion","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x40"}
```

## int_sendTransaction
Creates new message call transaction or a contract creation, if the data field contains code.

#### Parameters
1. `Object` - The transaction object
* `from`: `STRING`, 32 Bytes - The address the transaction is send from.
* `to`: `STRING`, 32 Bytes - (optional when creating new contract) The address the transaction is directed to.
* `gas`: `QUANTITY` - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.
* `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas.
* `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction.
* `input`: `DATA` - The compiled code of a contract or the hash of the invoked method signature and encoded parameters.
* `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

```
params: [{
    "from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
    "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs",
    "gas": "0x76c0", // 30400
    "gasPrice": "0x9184e72a000", // 10000000000000
    "value": "0xde0b6b3a7640000", // 1000000000000000000
    "input": ""
}]
```    
    
#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_sendTransaction","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0xde0b6b3a7640000", "input": ""}],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x0f6a19c3046c88efd2de590705d6c251a957ebb094a3041f21a426deb7667003"}
```

## int_sendRawTransaction
Creates new message call transaction or a contract creation for signed transactions.

#### Parameters
1. `DATA`, The signed transaction data.

```
params: ["0xf870808502540be400825208a0494e5433506b72317a4d6d6b336d6e467a6968483546346b4e784661764a6f34018027a0c7ccd8d71e29886601c7e026902c1e869a40097f4791886c97e97f692b179d44a03cba826c07b6e34a7681d7222a12c3c1e662fce8e23e4d4332eac627f6d3b294"]
```    
    
#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_sendRawTransaction","params":["0xf870808502540be400825208a0494e5433506b72317a4d6d6b336d6e467a6968483546346b4e784661764a6f34018027a0c7ccd8d71e29886601c7e026902c1e869a40097f4791886c97e97f692b179d44a03cba826c07b6e34a7681d7222a12c3c1e662fce8e23e4d4332eac627f6d3b294"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x8434141d5e5a66c97e29f8ec693d2d0d284cee7b312b30f28e6a1a94b2e6f5c5"}
```
