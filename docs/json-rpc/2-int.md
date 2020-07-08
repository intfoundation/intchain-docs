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

## int_syncing

Returns an object with data about the sync status or `false`.

#### Parameters
None

#### Returns

`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:
  - `startingBlock`: `QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)
  - `currentBlock`: `QUANTITY` - The current block, same as int_blockNumber
  - `highestBlock`: `QUANTITY` - The estimated highest block

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_syncing","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "currentBlock":"0x1ba70c",
        "highestBlock":"0x1ba832",
        "knownStates":"0x0",
        "pulledStates":"0x0",
        "startingBlock":"0x1ba6e7"
    }
}
// Or when not syncing
{"id":1, "jsonrpc": "2.0", "result": false}
```


## int_coinbase

Returns the client coinbase address.

#### Parameters
None

#### Returns

`STRING`, 32 bytes - the current coinbase address.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_coinbase","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU"
}
// Or error when the node is not a validator node
{"jsonrpc":"2.0","id":1,"error":{"code":-32000,"message":"private validator missing"}}
```

## int_mining

Returns `true` if client is actively mining new blocks.

#### Parameters
none

#### Returns

`Boolean` - returns `true` of the client is mining, otherwise `false`.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_mining","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":71,"result":true}
```


## int_gasPrice

Returns the current price per gas in int-atto.

#### Parameters
None

#### Returns

`QUANTITY` - integer of the current gas price in int-atto.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_gasPrice","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x3b9aca00"}   // 1000000000
```

## int_accounts
Returns a list of addresses owned by client.

#### Parameters
None

#### Returns

`Array of STRING`, 32 Bytes - addresses owned by the client.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_accounts","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        "INT3CpFuk2cJ1te9WZV1w8Y3wkQCcA5Z",
        "INT3MMzkukxhiPwDLqkexCxzuYief4Js",
        "INT39iewq2jAyREvwqAZX4Wig5GVmSsc",
        "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs"
    ]
}
```

## int_blockNumber
Returns the number of most recent block.

#### Parameters
None

#### Returns
`QUANTITY` - Integer of the current block number the client is on.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_blockNumber","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x1baeba"} // 1814202
```


## int_getBalance
Returns the balance of the account of given address.

#### Parameters
1. `STRING`, 32 Bytes - address to check for balance.
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#the-default-block-parameter)

#### Example Parameters
```
params: [
   'INT3HGH5oAByC1ni3yccBKrrLcNTZry7',
   'latest'
]
```

#### Returns
`QUANTITY` - integer of the current balance in wei.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBalance","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "latest"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0x152cef117a45ad48f1ac" // 9.999857956399511e+22
}
```

## int_getBalanceDetail

Returns the balance of the account of given address.

#### Parameters

1. `STRING`, 32 Bytes - address to check for balance.
2. `QUANTITY|TAG` - Integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#the-default-block-parameter)
3. `BOOL` - If true it returns the full detail of proxied/reward object under this address.

#### Example Parameters
```
params: [
   'INT3HGH5oAByC1ni3yccBKrrLcNTZry7',
   'latest',
   true
]
```

#### Returns
`Object` - Balance and reward detail object:
- `balance`: `QUANTITY` - Integer of the current balance in int-atto.
- `proxiedDetail`: `Object` - Detail record of each address's proxied data, including proxied balance, deposit proxied balance and pending refund balance.
- `rewardDetail`: `Object` - Detail record of each delegate address and reward balance in int-atto.
- `delegateBalance`: `QUANTITY` - Total delegate balance in int-atto to other address.
- `depositBalance`: `QUANTITY` - Deposit balance in int-atto for validator stake.
- `depositProxiedBalance`: `QUANTITY` - Total deposit proxied balance in int-atto for validator stake.
- `pendingRefundBalance`: `QUANTITY` - Total pending refund balance in int-atto which will be return to delegate at the end of current epoch.
- `proxiedBalance`: `QUANTITY` - Total proxied balance in int-atto delegate from other address.
- `rewardBalance`: `QUANTITY` - Total pending reward balance in int-atto of this address.


#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBalanceDetail","params":["INT39NQ6EoRUqK6ypvmqPx7j7ZsskGN4", "latest", true],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "balance":"0x23c8f89ec521a046a34e1",
        "proxied_detail":{
            "INT39NQ6EoRUqK6ypvmqPx7j7ZsskGN4":{
                "ProxiedBalance":"0x21e19e0c9bab2400000",
                "DepositProxiedBalance":"0x0",
                "PendingRefundBalance":"0x0"
            }
        },
        "reward_detail":{
            "INT32YViqoXKLjRnp2rB7F8dXWUQMFhN":"0x2fb9bf3131752c86f3c",
            "INT385MNAM44dwVJ4GUaqUbUTZqrMdHZ":"0x2fcaf8eb900a5a49de2",
            "INT39iewq2jAyREvwqAZX4Wig5GVmSsc":"0x2fba5dd2e0852b7f930",
            "INT3AV2Z33g3vcFz8n7jEKWsns8RbV6o":"0x2fece18054cd37ab5f2",
            "INT3D4sNnoM4NcLJeosDKUjxgwhofDdi":"0x2fb3c378ea83674a435",
            "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU":"0x11a2b93829fcf4bec7",
            "INT3ETpxfNquuFa2czSHuFJTyhuepgXa":"0x3003ecf8bc25e26c292",
            "INT3FLSfrYVyxeeJZBvoNcJiMzAbbc2i":"0x2f902022eb867cca1ae",
            "INT3FcSg4P5NQsd8GhYRjXY76Tt9Q2Lr":"0x2faef163ab229a1c5ac",
            "INT3H49CRxuaThaDzH1r2X4VSkmWkbo6":"0x2fb56e48b206f4ca6f2",
            "INT3JqvEfW7eTymfA6mfruwipcc1dAEi":"0x2fdf81ec18db76cac28",
            "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL":"0x3029c0826d2f12dc115",
            "INT3MjFkyK3bZ6oSCK8i38HVxbbsiRTY":"0x2f8d5435137bdefc4b6"
        },
        "total_delegateBalance":"0x115673e073a8936c00000",
        "total_depositBalance":"0x0",
        "total_depositProxiedBalance":"0x0",
        "total_pendingRefundBalance":"0x0",
        "total_proxiedBalance":"0x21e19e0c9bab2400000",
        "total_rewardBalance":"0x23e88e9e80251775220d"
    }
}
```

## int_getTransactionCount

Returns the number of transactions *sent* from an address.


#### Parameters

1. `STRING`, 32 Bytes - address.
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#the-default-block-parameter)

#### Example Parameters
```bash
params: [
   'INT3HGH5oAByC1ni3yccBKrrLcNTZry7',
   'latest' // state at the latest block
]
```

#### Returns

`QUANTITY` - integer of the number of transactions send from this address.


#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getTransactionCount","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7","latest"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xa" // 10
}
```


## int_getBlockTransactionCountByHash

Returns the number of transactions in a block from a block matching the given block hash.


#### Parameters

1. `DATA`, 32 Bytes - hash of a block.

#### Example Parameters
```
params: [
   '0x91f0cc7960cd07397a1f3d73480090110111d761a2e759dd22a5f9ffd0fb4512'
]
```

#### Returns

`QUANTITY` - integer of the number of transactions in this block.


#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBlockTransactionCountByHash","params":["0x91f0cc7960cd07397a1f3d73480090110111d761a2e759dd22a5f9ffd0fb4512"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xcc" // 204
}
```


## int_getBlockTransactionCountByNumber

Returns the number of transactions in a block matching the given block number.


#### Parameters

1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"` or `"pending"`, as in the [default block parameter](#the-default-block-parameter).

#### Example Parameters
```
params: [
   '0x108f', // 4239
]
```

#### Returns

`QUANTITY` - Integer of the number of transactions in this block.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBlockTransactionCountByNumber","params":["0x108f"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xcc" // 204
}
```


## int_getCode

Returns code at a given address.


#### Parameters

1. `DATA`, 20 Bytes - address.
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#the-default-block-parameter).

#### Example Parameters
```
params: [
   'INT3HGH5oAByC1ni3yccBKrrLcNTZry7',
   '0x2'  // 2
]
```

#### Returns

`DATA` - the code from the given address.


#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getCode","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x2"],"id":1}' -H 'content-type: application/json;'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```


## int_sign

The sign method calculates an INT Chain specific signature with: `sign(keccak256("\x19INT Chain Signed Message:\n" + len(message) + message)))`.

By adding a prefix to the message makes the calculated signature recognisable as an INT Chain specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

**Note** the address to sign with must be unlocked. 

#### Parameters
account, message

1. `STRING`, 32 Bytes - address.
2. `DATA`, N Bytes - message to sign.

#### Returns

`DATA`: Signature

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_sign","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x696e74636861696e"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xe002de1607932aead14e85c9a7be83744ccc82197e8d1a73757a370c2096858e0258de3eb02d57ed49bc2a7c2e15e329d4a2db22e365c16a384e8f78c149521c1b"
}
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
* `data`: `DATA` - The compiled code of a contract or the hash of the invoked method signature and encoded parameters.
* `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

```
params: [{
    "from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
    "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs",
    "gas": "0x76c0", // 30400
    "gasPrice": "0x9184e72a000", // 10000000000000
    "value": "0xde0b6b3a7640000", // 1000000000000000000
    "data": ""
}]
```    
    
#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

Use [int_getTransactionReceipt](#int_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_sendTransaction","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0xde0b6b3a7640000", "data": ""}],"id":1}' -H 'content-type: application/json;'

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

Use [int_getTransactionReceipt](#int_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_sendRawTransaction","params":["0xf870808502540be400825208a0494e5433506b72317a4d6d6b336d6e467a6968483546346b4e784661764a6f34018027a0c7ccd8d71e29886601c7e026902c1e869a40097f4791886c97e97f692b179d44a03cba826c07b6e34a7681d7222a12c3c1e662fce8e23e4d4332eac627f6d3b294"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x8434141d5e5a66c97e29f8ec693d2d0d284cee7b312b30f28e6a1a94b2e6f5c5"}
```


## int_call

Executes a new message call immediately without creating a transaction on the block chain.


#### Parameters

1. `Object` - The transaction call object
  - `from`: `STRING`, 32 Bytes - (optional) The address the transaction is sent from.
  - `to`: `STRING`, 32 Bytes  - The address the transaction is directed to.
  - `gas`: `QUANTITY`  - (optional) Integer of the gas provided for the transaction execution. int_call consumes zero gas, but this parameter may be needed by some executions.
  - `gasPrice`: `QUANTITY`  - (optional) Integer of the gasPrice used for each paid gas
  - `value`: `QUANTITY`  - (optional) Integer of the value sent with this transaction
  - `data`: `DATA`  - (optional) Hash of the method signature and encoded parameters.
2. `QUANTITY|TAG` - Integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#the-default-block-parameter)

```
params: [{
    "from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
    "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs",
    "gas": "0x76c0", // 30400
    "gasPrice": "0x9184e72a000", // 10000000000000
    "value": "0xde0b6b3a7640000", // 1000000000000000000
    "data": ""
}, "latest"]
``` 

#### Returns

`DATA` - the return value of executed contract.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_call","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0xde0b6b3a7640000", "data": ""}, "latest"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x"}
```

## int_estimateGas

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

#### Parameters

See [int_call](#int_call) parameters, expect that all properties are optional. If no gas limit is specified `intchain` uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

#### Returns

`QUANTITY` - the amount of gas used.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_estimateGas","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0xde0b6b3a7640000", "data": ""}],"id":1}' -H 'content-type: application/json;'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```

## int_getBlockByHash

Returns information about a block by hash.


##### Parameters

1. `DATA`, 32 Bytes - Hash of a block.
2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### Example Parameters
```
params: [
   '0x83d0251895e93a22871b7ff39c559f7135300de14f8f2b47ef49cedf43f38122',
   true
]
```

#### Returns

`Object` - A block object, or `null` when no block was found:

  - `number`: `QUANTITY` - the block number. `null` when its pending block.
  - `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
  - `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
  - `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending block.
  - `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
  - `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null` when its pending block.
  - `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
  - `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
  - `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
  - `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - `difficulty`: `QUANTITY` - integer of the difficulty for this block.
  - `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this block.
  - `extraData`: `DATA` - the "extra data" field of this block.
  - `size`: `QUANTITY` - integer the size of this block in bytes.
  - `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
  - `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
  - `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
  - `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
  - `uncles`: `Array` - Array of uncle hashes.


#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBlockByHash","params":["0x83d0251895e93a22871b7ff39c559f7135300de14f8f2b47ef49cedf43f38122", true],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "difficulty":"0x1",
        "extraData":"0x0107746573746e65740000000000197bbf160807896ba5298000000000000000000111011465b989fcf3a4c3a81c57f1c30072f2faaeb8a0330114fb1d40704356268a4897994d88cbda1d2239d354010114724ff2be7b2b108590165c0e3c1cc760426953f9000000000000000101146dbd1fb627a22640a5a858c68cee3bac13fee3090000000000197bbf00014088a8648ef8d16fa2c400b705bb25c4de3cc95bd129906cff6c0078a7aaeba18d4aaf781406ea5a6158a066367e73db7268dc9cbbe3580f37953ea3cc97684b2901000000000000000d010100000000000013e700",
        "gasLimit":"0x4c4b400",
        "gasUsed":"0x5208",
        "hash":"0x83d0251895e93a22871b7ff39c559f7135300de14f8f2b47ef49cedf43f38122",
        "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mainchainNumber":"0x0",
        "miner":"INT32YViqoXKLjRnp2rB7F8dXWUQMFhN",
        "mixHash":"0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",
        "nonce":"0x0000000000000000",
        "number":"0x197bbf",
        "parentHash":"0xf614a2ff900ed61ec1b7517f5fba80e0bfffbf084a7e6eea9419b99459b1c649",
        "receiptsRoot":"0x056b23fbba480696b65fe5a59b8f2148a1299103c4f57df839233af2cf4ca2d2",
        "sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size":"0x4ed",
        "stateRoot":"0x09a3b02d46188759efe7d3044f540ae3800cc26bcef5140ae8005433949e9035",
        "timestamp":"0x5e9fbdf2",
        "totalDifficulty":"0x197bc0",
        "transactions":[
            {
                "blockHash":"0x83d0251895e93a22871b7ff39c559f7135300de14f8f2b47ef49cedf43f38122",
                "blockNumber":"0x197bbf",
                "from":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
                "gas":"0x5208",
                "gasPrice":"0x3b9aca00",
                "hash":"0x30a555d3707e03da13680228d076d996d4f32ff533d69f565dc13587333e45bb",
                "input":"0x91e8537e000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000013494e542053757065722056616c696461746f7200000000000000000000000000000000000000000000000000000000000000000000000000000000000000001368747470733a2f2f696e74636861696e2e696f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000104531353733453236384138313835303300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f494e5420746f20746865206d6f6f6e0000000000000000000000000000000000",
                "nonce":"0x9",
                "to":"INT3FFFFFFFFFFFFFFFFFFFFFFFFFFFF",
                "transactionIndex":"0x0",
                "value":"0x0",
                "v":"0x28",
                "r":"0xcb6a33a5598c6b3ca679a6e582006c4d668b9dab2c36907b7568486c30260c44",
                "s":"0x40f18184b7cc72d6fc4e50f106fb23cac9b6059362d7421bc73680b700b99dcb"
            }
        ],
        "transactionsRoot":"0x920686a7d982a3b2520bd6583043491f6d5f583c96ec4293a155d2ba065ca666",
        "uncles":[

        ]
    }
}
```


## int_getBlockByNumber

Returns information about a block by block number.

#### Parameters

1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"` or `"pending"`, as in the [default block parameter](#the-default-block-parameter).
2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### Example Parameters
```
params: [
   '0x197bbf', // 1670079
   true
]
```

#### Returns

See [int_getBlockByHash](#int_getblockbyhash)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getBlockByNumber","params":["0x197bbf", true],"id":1}' -H 'content-type: application/json;'
```

Result see [int_getBlockByHash](#int_getblockbyhash)


## int_getTransactionByHash

Returns the information about a transaction requested by transaction hash.


#### Parameters

1. `DATA`, 32 Bytes - hash of a transaction

#### Example Parameters
```
params: [
   "0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8"
]
```

#### Returns

`Object` - A transaction object, or `null` when no transaction was found:

  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. `null` when its pending.
  - `blockNumber`: `QUANTITY` - block number where this transaction was in. `null` when its pending.
  - `from`: `STRING`, 32 Bytes - address of the sender.
  - `gas`: `QUANTITY` - gas provided by the sender.
  - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
  - `hash`: `DATA`, 32 Bytes - hash of the transaction.
  - `input`: `DATA` - the data send along with the transaction.
  - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
  - `to`: `STRING`, 32 Bytes - address of the receiver. `null` when its a contract creation transaction.
  - `transactionIndex`: `QUANTITY` - integer of the transaction's index position in the block. `null` when its pending.
  - `value`: `QUANTITY` - value transferred in Wei.
  - `v`: `QUANTITY` - ECDSA recovery id
  - `r`: `QUANTITY` - ECDSA signature r
  - `s`: `QUANTITY` - ECDSA signature s

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getTransactionByHash","params":["0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "blockHash":"0x7e74a89eb3d27100ad2bf85dfc8f4c80089034921fb68bc1d5ffafcb05ca454b",
        "blockNumber":"0x142c9e",
        "from":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
        "gas":"0x76c0",
        "gasPrice":"0x2540be400",
        "hash":"0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8",
        "input":"0x",
        "nonce":"0x6d8a0",
        "to":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "transactionIndex":"0x0",
        "value":"0x152d02c7e14af6800000",
        "v":"0x28",
        "r":"0x8748a96e71986b8fbbd26856428908121fa27fa1281e4b5d94265e291a2c7e7f",
        "s":"0x7b3ce3e42bc0e5a9bfe3eabd5c55e7d93ff117b530e83bfdbc1dbd46b4008c6f"
    }
}
```


## int_getTransactionByBlockHashAndIndex

Returns information about a transaction by block hash and transaction index position.


##### Parameters

1. `DATA`, 32 Bytes - hash of a block.
2. `QUANTITY` - integer of the transaction index position.

#### Example Parameters
```
params: [
   '0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8',
   '0x0' // 0
]
```

#### Returns

See [int_getTransactionByHash](#int_gettransactionbyhash)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getTransactionByBlockHashAndIndex","params":["0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8", "0x0"],"id":1}' -H 'content-type: application/json;'
```

Result see [int_getTransactionByHash](#int_gettransactionbyhash)


## int_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index position.


#### Parameters

1. `QUANTITY|TAG` - a block number, or the string `"earliest"`, `"latest"` or `"pending"`, as in the [default block parameter](#the-default-block-parameter).
2. `QUANTITY` - the transaction index position.

#### Example Parameters
```
params: [
   '0x142c9e', // 1322142
   '0x0' // 0
]
```

#### Returns

See [int_getTransactionByHash](#int_gettransactionbyhash)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getTransactionByBlockNumberAndIndex","params":["0x142c9e", "0x0"],"id":1}' -H 'content-type: application/json;'
```

Result see [int_getTransactionByHash](#int_gettransactionbyhash)


## int_getTransactionReceipt

Returns the receipt of a transaction by transaction hash.

**Note** That the receipt is not available for pending transactions.


##### Parameters

1. `DATA`, 32 Bytes - hash of a transaction

##### Example Parameters
```
params: [
   '0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8'
]
```

##### Returns

`Object` - A transaction receipt object, or `null` when no receipt was found:

  - `transactionHash `: `DATA`, 32 Bytes - hash of the transaction.
  - `transactionIndex`: `QUANTITY` - integer of the transaction's index position in the block.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
  - `blockNumber`: `QUANTITY` - block number where this transaction was in.
  - `from`: `STRING`, 32 Bytes - address of the sender.
  - `to`: `STRING`, 32 Bytes - address of the receiver. null when it's a contract creation transaction.
  - `cumulativeGasUsed `: `QUANTITY ` - The total amount of gas used when this transaction was executed in the block.
  - `gasUsed `: `QUANTITY ` - The amount of gas used by this specific transaction alone.
  - `contractAddress `: `STRING`, 32 Bytes - The contract address created, if the transaction was a contract creation, otherwise `null`.
  - `logs`: `Array` - Array of log objects, which this transaction generated.
  - `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
  - `status`: `QUANTITY` either `1` (success) or `0` (failure) 


#### Example
```
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getTransactionReceipt","params":["0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "blockHash":"0x7e74a89eb3d27100ad2bf85dfc8f4c80089034921fb68bc1d5ffafcb05ca454b",
        "blockNumber":"0x142c9e",
        "contractAddress":null,
        "cumulativeGasUsed":"0x5208",
        "from":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
        "gasUsed":"0x5208",
        "logs":[

        ],
        "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status":"0x1",
        "to":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "transactionHash":"0xa0b5dba5dc1a197e3b92aeecb697863d751f1d829111fb03b48b7d4f63f8f8e8",
        "transactionIndex":"0x0"
    }
}
```


## int_pendingTransactions

Returns the pending transactions list.

#### Parameters
None

#### Returns

`Array` - A list of pending transactions.

#### Example
```
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_pendingTransactions","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        {
            "blockHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
            "blockNumber":null,
            "from":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
            "gas":"0x76c0",
            "gasPrice":"0x2540be400",
            "hash":"0xa22424e8fad4bab906fa69d5354e6330d4758da6625547a47e9cf607088bcf8e",
            "input":"0x",
            "nonce":"0x6d8a2",
            "to":"INT39NQ6EoRUqK6ypvmqPx7j7ZsskGN4",
            "transactionIndex":"0x0",
            "value":"0x1",
            "v":"0x28",
            "r":"0xf31a56c51fa62ecb25f2758fe8c56fe02a914b6323481dfeb23135e1bad65473",
            "s":"0x52b31f5807c4215b69ca96870e479f4669dce97df3aaa2a38e4545e662edb3e7"
        },
        {
            "blockHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
            "blockNumber":null,
            "from":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
            "gas":"0x76c0",
            "gasPrice":"0x2540be400",
            "hash":"0x6484bf419cf5bfc9cc7cdd9ee0ce28e49e6c443b4cdaa9733f3fcd1cbd459954",
            "input":"0x",
            "nonce":"0x6d8a3",
            "to":"INT39NQ6EoRUqK6ypvmqPx7j7ZsskGN4",
            "transactionIndex":"0x0",
            "value":"0x1",
            "v":"0x28",
            "r":"0xbba776982de1e6f6b724db2b78561d5ce6f70b37d04b16ebfd3723abd5e2bdfd",
            "s":"0x37ee40cfecdb3352c8224597ad417db1ba728c5ee0df13b105be732f4e167374"
        },
        ...
        {
            "blockHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
            "blockNumber":null,
            "from":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
            "gas":"0x76c0",
            "gasPrice":"0x2540be400",
            "hash":"0xb4f8a35220c278bc830d01358192cd085dd0368a5b85f0c6f17bcc8e9dc240a6",
            "input":"0x",
            "nonce":"0x6d8ad",
            "to":"INT39NQ6EoRUqK6ypvmqPx7j7ZsskGN4",
            "transactionIndex":"0x0",
            "value":"0x1",
            "v":"0x28",
            "r":"0x70ef59598e9d4d284ae14ff471069802b3e282e6e4baca31e1007ea8cbe605ef",
            "s":"0x3feb6dd08f3ec024ee472de956562b93453e87d45ad4d42329b32957e02a0f28"
        }
    ]
}
```

## int_newFilter

Creates a filter object, based on filter options, to notify when the state changes (logs).
To check if the state has changed, call [int_getFilterChanges](#int_getfilterchanges).

#### A note on specifying topic filters:
Topics are order-dependent. A transaction with a log with topics [A, B] will be matched by the following topic filters:
* `[]` "anything"
* `[A]` "A in first position (and anything after)"
* `[null, B]` "anything in first position AND B in second position (and anything after)"
* `[A, B]` "A in first position AND B in second position (and anything after)"
* `[[A, B], [A, B]]` "(A OR B) in first position AND (A OR B) in second position (and anything after)"

#### Parameters

1. `Object` - The filter options:
  - `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined transactions.
  - `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined transactions.
  - `address`: `STRING|Array`, 32 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
  - `topics`: `Array of DATA`,  - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.

#### Example Parameters
```
params: [{
  "fromBlock": "0x1",
  "toBlock": "0x2",
  "address": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", null, ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"]]
}]
```

#### Returns

`QUANTITY` - A filter id.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_newFilter","params":[{"topics":["0x0000000000000000000000000000000000000000000000000000000012341234"]}],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0x74e390eea91f84bbc08f211d4803a2aa"
}
```


## int_newBlockFilter

Creates a filter in the node, to notify when a new block arrives.
To check if the state has changed, call [int_getFilterChanges](#int_getfilterchanges).

#### Parameters
None

#### Returns

`QUANTITY` - A filter id.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_newBlockFilter","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0x97e24900c149f753432add26917c1a60"
}
```


## int_newPendingTransactionFilter

Creates a filter in the node, to notify when new pending transactions arrive.
To check if the state has changed, call [int_getFilterChanges](#int_getfilterchanges).

#### Parameters
None

#### Returns

`QUANTITY` - A filter id.

#### Example
```
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_newPendingTransactionFilter","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xa104a22d8e0437dc96d2b6d554ffdb17"
}
```


## int_uninstallFilter

Uninstalls a filter with given id. Should always be called when watch is no longer needed.
Additonally Filters timeout when they aren't requested with [int_getFilterChanges](#int_getfilterchanges) for a period of time.


#### Parameters

1. `QUANTITY` - The filter id.

#### Example Parameters
```
params: [
  "0xa104a22d8e0437dc96d2b6d554ffdb17"
]
```

#### Returns

`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_uninstallFilter","params":["0xa104a22d8e0437dc96d2b6d554ffdb17"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":true}
```


## int_getFilterChanges

Polling method for a filter, which returns an array of logs which occurred since last poll.


#### Parameters

1. `QUANTITY` - the filter id.

#### Example Parameters
```
params: [
  "0x84924d69f949a3fdde4f971008157a70"
]
```

#### Returns

`Array` - Array of log objects, or an empty array if nothing has changed since last poll.

- For filters created with `int_newBlockFilter` the return are block hashes (`DATA`, 32 Bytes), e.g. `["0x3454645634534..."]`.
- For filters created with `int_newPendingTransactionFilter ` the return are transaction hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
- For filters created with `int_newFilter` logs are objects with following params:

  - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization. `false` if its a valid log.
  - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when its pending log.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was created from. `null` when its pending log.
  - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created from. `null` when its pending log.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when its pending. `null` when its pending log.
  - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its pending. `null` when its pending log.
  - `address`: `STRING`, 32 Bytes - address from which this log originated.
  - `data`: `DATA` - contains the non-indexed arguments of the log.
  - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments. (In *solidity*: The first topic is the *hash* of the signature of the event (e.g. `Deposit(address,bytes32,uint256)`), except you declared the event with the `anonymous` specifier.)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getFilterChanges","params":["0x84924d69f949a3fdde4f971008157a70"],"id":1}' -H 'content-type: application/json;'

// Result
{
  "id":1,
  "jsonrpc":"2.0",
  "result": [{
    "logIndex": "0x1", // 1
    "blockNumber":"0x1b4", // 436
    "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "transactionHash":  "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
    "transactionIndex": "0x0", // 0
    "address": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
    "data":"0x0000000000000000000000000000000000000000000000000000000000000000",
    "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },{
      ...
    }]
}
```


## int_getFilterLogs

Returns an array of all logs matching filter with given id.


#### Parameters

1. `QUANTITY` - The filter id.

#### Example Parameters
```
params: [
  "0x84924d69f949a3fdde4f971008157a70"
]
```

#### Returns

See [int_getFilterChanges](#int_getfilterchanges)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getFilterLogs","params":["0x84924d69f949a3fdde4f971008157a70"],"id":1}' -H 'content-type: application/json;'
```

Result see [int_getFilterChanges](#int_getfilterchanges)


## int_getLogs

Returns an array of all logs matching a given filter object.

#### Parameters

1. `Object` - The filter options:
  - `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined transactions.
  - `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined transactions.
  - `address`: `STRING|Array`, 32 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
  - `topics`: `Array of DATA`,  - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
  - `blockhash`:  `DATA`, 32 Bytes - (optional) `blockHash` is a new filter option which restricts the logs returned to the single block with the 32-byte hash `blockHash`.  Using `blockHash` is equivalent to `fromBlock` = `toBlock` = the block number with hash `blockHash`.  If `blockHash` is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.

#### Example Parameters
```
params: [{
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]
}]
```

#### Returns

See [int_getFilterChanges](#int_getfilterchanges)

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}' -H 'content-type: application/json;'
```

Result see [int_getFilterChanges](#int_getfilterchanges)


## int_getWork

Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target").

#### Parameters
None

#### Returns

`Array` - Array with the following properties:
  1. `DATA`, 32 Bytes - current block header ipbft-hash
  2. `DATA`, 32 Bytes - the seed hash used for the DAG.
  3. `DATA`, 32 Bytes - the boundary condition ("target"), 2^256 / difficulty.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getWork","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        "0x431e116cf31dc6518a46b1aaaa1e55cf5f9c28b8923d0d519d659c7104df1429",
        "",
        "0x0000000000000000000000000000000000000000000000000000000000000000"
    ]
}
```



## int_signAddress
Sign the address with BLS private key, return the BLS signature to proof you are the owner of the BLS public key.

#### Parameters
   1. `from`: `STRING`, 32 Bytes - The address which will be signed.
   2. `privateKey`: `DATA`, 32 Bytes - The BLS private key.

    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "0x9306FCB9C4B16E18044AC41F4E9E0460B4DABAF1BDA4E26053F2A57587CF6F3F"
    ]

#### Returns
`Signature`, `DATA`, 64 Bytes - The BLS signature for the address.


#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_signAddress","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x9306FCB9C4B16E18044AC41F4E9E0460B4DABAF1BDA4E26053F2A57587CF6F3F"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x77d81859783226eb1dd5193484b8ea0a77c947bc1b3b225194c5e4ddc064e5455b30c7c5a05879b70f32bb44c6cb192d63c1ccaec8b2817b1b9e18cee8749e4b"}
```


## int_register
Register to become a validator candidate.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The address the transaction is send from.
2. `registerAmount`: `QUANTITY` - Integer of the register amount of INT (minimum 10,000 INT `0x21e19e0c9bab2400000`).
3. `pubkey`: `DATA`, 128 Bytes - The BLS public key.
4. `signature`: `DATA`, 64 Bytes - The BLS signature for the from address.
5. `commission`: `QUANTITY` - Integer of commission fee percentage (between 0 ~ 100) of each block reward be charged from delegator, when candidate become a validator.
6. `gasPrice`: `QUANTITY` - (optional, default: To be determined) Integer of the gasPrice used for each paid gas.


```bash
    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "0x21e19e0c9bab2400000",
        "6390......7771C",
        "0x77d81859783226eb1dd5193484b8ea0a77c947bc1b3b225194c5e4ddc064e5455b30c7c5a05879b70f32bb44c6cb192d63c1ccaec8b2817b1b9e18cee8749e4b",
        10
    ]
```

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_register","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x21e19e0c9bab2400000", "6390CF50585CD26D2B32D118080C05AF7F5263B4142F3D0D0A77201DA2B26DBA0AB68FF2A54C678F2B6C732D3AF71FF03AF6810C547DFE2F7063BB4B4C9A51903BA76BCFF37ED203A3107701F01D5D3E4445ACF0D199198E4666D435CD624EE567B8601A906C65596F6558339A8201F915C3EFE30EE0C770C91D83738FC7771C", "0x77d81859783226eb1dd5193484b8ea0a77c947bc1b3b225194c5e4ddc064e5455b30c7c5a05879b70f32bb44c6cb192d63c1ccaec8b2817b1b9e18cee8749e4b", 10],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xb0b72c93e315133e9573219333c0a60de146398dff5bf8ba2c90dcc5c3391b7c"}
```


## int_checkCandidate
Returns the validator candidate status of given address.

#### Parameters
1. `address`: `STRING`, 32 Bytes - The address to check .
2. `blockNumber`: `QUANTITY|TAG` - Integer block number, or the string "latest", "earliest" or "pending"

#### Returns
`Object` - The validator candidate status object
* `candidate`: `BOOL` - Validator candidate flag of given address.
* `commission`: `QUANTITY` - Commission percentage of validator candidate.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_checkCandidate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "latest"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"candidate":true,"commission":10}}
```


## int_unRegister
Create a new transaction to cancel the validator candidate qualification, if the address has deposited proxied balance, it will be refund at the end of epoch, otherwise will be refund immediately.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The validator candidate address.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_unRegister","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x36e71e25dfdafbf0bdf19b9714152c1e484fd0b8115d18cdd16a0f98a72ad893"}
```


## int_delegate
Create a new transaction to delegate your balance to validator candidate.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The address who want to delegate.
2. `candidate`: `STRING`, 32 Bytes - The address of validator candidate.
3. `amount`: `QUANTITY` - Amount of the delegate INT (minimum 1,000 INT `0x3635c9adc5dea00000`).
4. `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas.

```bash
    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", 
        "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL", 
        "0x3635c9adc5dea00000"
    ]
```
    
    
#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_delegate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL", "0x3635c9adc5dea00000"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x38abd4a9ed9b3925c2523aace34069b5b9c672f449d74c28391b07686dd3e1df"}
```


## int_unDelegate
Create a new transaction to cancel your delegation from validator candidate, these unbonded token won't become liquid tokens immediately,After the undelegate transactions are executed. Usually the undelegate period is 2 hours. Once the undelegate period is end, the unbonded token will become liquid token automatically

#### Parameters
1. `from`: `STRING`, 32 Bytes - The address who want to cancel delegate.
2. `candidate`: `STRING`, 32 Bytes - The address of validator candidate.
3. `amount`: `QUANTITY` - Amount of the delegate INT.
4. `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_unDelegate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL", "0x3635c9adc5dea00000"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x234ff1d87ee437ed0882166e8b7210d6e9de2ddc7746e155b3b074b81277f84c"}
```


## int_setCommission
Create a new transaction to reset the commission percentage of validator candidate.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The validator candidate address.
2. `commission`: `QUANTITY` - Commission percentage of validator candidate.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_setCommission","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", 50],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x0c96e71e100006b08f78ed4cf12a034bd96df49023cee5ad8a565389e2b2707c"}
```

## int_withdrawReward
Withdraw the staking reward from delegate address.

#### Parameters
   1. `from`: `STRING`, 32 Bytes - The address has voted.
   2. `delegateAddress`: `STRING`, 32 Bytes - The delegate address.

    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU"
    ]

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.


#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_withdrawReward","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xcb92a3c46995d009f2d9721290366a4bb8f4f780ebf65aa04d9ff51fa9b92f3b"}
```


## int_getCurrentEpochNumber
Returns the current epoch number.

#### Parameters
None

#### Returns
`EpochNumber`, `QUANTITY` - Integer of current epoch number.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getCurrentEpochNumber","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xd8"}
```

## int_getEpoch
Returns the epoch detail. 

#### Parameters
1. `epochNumber`, `QUANTITY` - The epoch number.

#### Returns
`Object` - An epoch object
* `number`: `QUANTITY` - Integer of the epoch number.
* `rewardPerBlock`: `QUANTITY` - Integer of the block reward.
* `startBlock`: `QUANTITY` - The start block number of the epoch.
* `endBlock`: `QUANTITY` - The end block number of the epoch.
* `startTime`: `QUANTITY` - The start time of the epoch.
* `endTime`: `QUANTITY` - The end time of the epoch.
* `validators`: `ARRAY` - List of current epoch validators.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getEpoch","params":["0xd8"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "number":"0xd8",
        "rewardPerBlock":"0xa628b52a2dfef63",
        "startBlock":"0x1426a9",
        "endBlock":"0x143e7e",
        "startTime":"2020-04-17T17:26:09.416+08:00",
        "endTime":"2020-04-17T19:26:21.475+08:00",
        "validators":[
            {
                "address":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
                "publicKey":"0x2F08524FC0D366716CE915C084B51F4D08018671CC8CA4C70A4F95C84E1920AC8BBB0CACF9E7EEBE6BDFBD836650D6EF257FBC6F713003BB116F0800BD04B1FA3140746CE6551F9F9F482766FA1ED327AE05A43577D1DE4558E3502F0F0DA18B2BDE90FA204DEE1ECA1F7CBD88E7F9FC6AE7A6C68F9F2921C6E27377340E30B5",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            },
            {
                "address":"INT3FLSfrYVyxeeJZBvoNcJiMzAbbc2i",
                "publicKey":"0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            },
            ...
            {
                "address":"INT385MNAM44dwVJ4GUaqUbUTZqrMdHZ",
                "publicKey":"0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            }
        ]
    }
}
```

## int_getNextEpochVote
Returns the next epoch votes, empty if the next epoch vote is nil.

#### Parameters
None

#### Returns
`Object` - Next epoch votes object
* `voteForEpoch`: `QUANTITY` - Integer of next epoch number.
* `startBlock`: `QUANTITY` - The start block number of next epoch.
* `endBlock`: `QUANTITY` - The end block number of next epoch.
* `votes`: `ARRAY` - The votes list of next epoch.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getNextEpochVote","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"voteForEpoch":"0x107","startBlock":"0x188d62","endBlock":"0x18a540","votes":[]}}
```

## int_getNextEpochValidators
Returns the next epoch votes, empty if the next epoch vote is nil.

#### Parameters
None

#### Returns
`Validators` - The validator list of next epoch.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getNextEpochValidators","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        {
            "address":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
            "publicKey":"0x2F08524FC0D366716CE915C084B51F4D08018671CC8CA4C70A4F95C84E1920AC8BBB0CACF9E7EEBE6BDFBD836650D6EF257FBC6F713003BB116F0800BD04B1FA3140746CE6551F9F9F482766FA1ED327AE05A43577D1DE4558E3502F0F0DA18B2BDE90FA204DEE1ECA1F7CBD88E7F9FC6AE7A6C68F9F2921C6E27377340E30B5",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        },
        {
            "address":"INT3FLSfrYVyxeeJZBvoNcJiMzAbbc2i",
            "publicKey":"0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        },
        ...
        {
            "address":"INT385MNAM44dwVJ4GUaqUbUTZqrMdHZ",
            "publicKey":"0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        }
    ]
}
```

## int_createValidator
Returns the validator object which contains the address, conseusus public key.

#### Parameters
None

#### Returns
`Object` - The validator object
* `address`: `STRING`, 32 Bytes - The private validator address.
* `consensus_pub_key`: `DATA`, 128 Bytes - The BLS public key.
* `consensus_priv_key`: `DATA`, 32 Bytes - The BLS private key.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_createValidator","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "address":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "consensus_pub_key":"4DA0B409FD27FFA96ABC02A10374BDD2E5B1A110CE407D4392027FE12FD5A3F9037E71BF53F540EE67BE08F9CF0F90C27A9926E0F572FF50ACBD0B6DFCC17CC43195F5DF62874AF5FC9E40A43258627458D9BF68309CB65B53249A15E23C0342541B0C31CC8161DD1FB45C9715D35A6FE8B7A785E97F7292333C76FE7DBC25D1",
        "consensus_priv_key":"E3C3841A85FAF083B5FB91DED748E477D5B790737257201EC6080AE418FD4485"
    }
}
```

## int_getValidatorStatus
Returns the validator forbidden status.

#### Parameters
1. `address`: `STRING`, 32 Bytes - The validator address.

#### Returns
`Object` - Validator forbidden status
* `isForbidden`: `BOOL` - True if the validator is forbidden, otherwise false.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getValidatorStatus","params":["INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"isForbidden":false}}
```

## int_unForbid
Remove the forbidden validator from the forbidden list, if the validator has benn forbidden for 24 hours.

#### Parameters
1. `address`: `STRING`, 32 Bytes - The validator address.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or error if the validator is not forbidden.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_unForbid","params":["INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xf461b38a5e4e4a6634b16626b317911c85db513d36aa91f67d117666eafc9a44"}
```

## int_editValidator
Edit validator information.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The validator address.
2. `moniker`: `STRING` - The validator name.
3. `website`: `STRING` - The validator website.
4. `identity`: `STRING` - The identity signature.
5. `details`: `STRING` - The validator introduction (maximum 100 Bytes).

```bash
    params: [
        "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", 
        "INT Super Validator", 
        "https://intchain.io", 
        "E1573E268A818503", 
        "INT to the moon"
    ]
```

#### Returns
`DATA`, 32 Bytes - The transaction hash, or error if the validator is not forbidden.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_editValidator","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT Super Validator", "https://intchain.io", "E1573E268A818503", "INT to the moon"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x30a555d3707e03da13680228d076d996d4f32ff533d69f565dc13587333e45bb"}
```

## int_getConsensusPublicKey
Returns the list of BLS public keys were participating in the consensus of the block which contains the extra data.

#### Parameters
1. `extraData`: `DATA` - The block extra data.

#### Returns
`ARRAY`- List of BLS public keys.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getConsensusPublicKey","params":["0x0107746573746e65740000000000197d6d160807fe8506c1c0000000000000000001110114c43db8cb1117fee1771d7a3c3e950bad13295b440114fb1d40704356268a4897994d88cbda1d2239d35401011439c51fd961217a63e16e1b6984dad2b67904666700000000000000010114dcb198f9ad7dba9a535884c11fdf3041bbab04930000000000197d6d0001406023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f01000000000000000d0101000000000000167e00"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        "0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
        "0x8EC5B0B7196B8588E42A27071748580CFC72B982053715BFEB9484C59C91E20833AAEC7243D1F521E264D4695769E7D0C8F2557FB4037129E183BEF6491538814D6AB26E4DF07D32EB1EB5E57E6A59DC06DC06E69E432106CD08AF74081EAD6D5A5BF4E34E9BAB12AEB8DADCD284FF3DC64E1760EBAE83B887C06526E6FEEFA6",
        "0x4859FFB4178DFF632BD5390E353DC067EAE3BD66F0285C988225B8E2FC93138E2DDF4FABFB6688A2D265F098224D971862C130261438E7645A0E3C1463C5546301645C3454CEA16A93AF921664CA10D91FD6962D2E8124B9511A0A294BD3658A381466D8A14DF4C0DD77501513974D4065110EA828675EC4F067B4CC0B306B63",
        "0x17FD8B2C90FE77F0A6B298F5F54FF6D707933F33737F0A3CDA2F5546D7E7E02827AAA20B7CD7A290FE7E7BF799854CB956C266601AAF9C42995A36D36143F8ED67785EF0D3E16DBA921397AF1E1054D0C6B1E8BE22BCA1FFA14AED45624741008B971B7E1689A0D2729DB2F41A0A89FB4E2BF8F7DA9EC14457B66AEBFD2BAF51",
        "0x3199D128AB26004165C0F873AB6327A15B824DAF8CB49233F89C11D365E33F156817717FBF7BDBD90C8A238FFF5A19BB3920E97907D87C9273E0B492C16B22C03F165765B5CAE8E218B3404DEBFD2F854B9D6C4C8572A9D27845D2CD40528BAC865DAA985E6EC55408F268AAB34E25AA9EEB8E4621AF4D40EE333BE7409E6B5D",
        "0x23FEB284728C346ED14BE1EF326851CD726ADC74D09C7CA42E376FFDF4136D17127C18E9FB5C9163C9B3CBE5C30AB8E6E308952628E345825DC0A56411C648A202A4E1782769746643A98BA390665BE0F6DF1E0535F72E0BEAADEDB4213F86C65FC46C647E8CCFAF08ABE816154EBB23BF66DDFE3C973F3FA2861788559530D4",
        "0x6B4B348F3257D0CE174D862FEB38D68F10580999C56CC82E2FA6CF51EC68E29A82F27A9F316570150CACA41A23A3B0D38D9EB3E13E725198CDA8214886ADA4D365F1C2ACB713A0D13E561909E3B0C278E50873F22D19AAC33B45928EAAEE240B15048E61A115094A30F6E792990B103DC8CB3B7D0A3A18B20FB0A029A7756EF9",
        "0x7987BDC25172011C739BDB98164798BB404A6DE732E090453F85585F726D115D66350656BD7DDB173960E05EB05DCFA4D57FE609856651B99E842CE0E22B201B8152B443C05C72828A069BFCDA23C7F52AD86FCA2BA8F5B234183C89B86544DD8E17424AFB37EDA2B3FB90F9235EABCF9900E9FC0307D9A98FF3436CC964DA16",
        "0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10"
    ]
}
```


## int_decodeExtraData
Returns the extra data object.

#### Parameters
1. `extraData`: `DATA` - The block extra data.

#### Returns
`Object`- Extra data object
* `chainId`: `STRING` - The chain id.
* `height`: `QUANTITY` - Integer of block number.
* `time`: `QUANTITY` - The timestamp of consensus.
* `needToSave`: `BOOL` - Need to save.
* `needToBroadcast`: `BOOL` - Need to broadcast.
* `epochNumber`: `QUANYITY` - Integer of epoch number.
* `lastCommitHash`: `DATA` - Hash of last commit.
* `validatorsHash`: `DATA` - Hash of validator set.
* `seenCommit`: `OBJECT` - Seen commit.
* `epochBytes`: `DATA` - Epoch bytes.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_decodeExtraData","params":["0x0107746573746e65740000000000197d6d160807fe8506c1c0000000000000000001110114c43db8cb1117fee1771d7a3c3e950bad13295b440114fb1d40704356268a4897994d88cbda1d2239d35401011439c51fd961217a63e16e1b6984dad2b67904666700000000000000010114dcb198f9ad7dba9a535884c11fdf3041bbab04930000000000197d6d0001406023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f01000000000000000d0101000000000000167e00"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "chainId":"testnet",
        "height":"0x197d6d",
        "time":"2020-04-22T11:54:18.383+08:00",
        "needToSave":false,
        "needToBroadcast":false,
        "epochNumber":"0x111",
        "lastCommitHash":"0xc43db8cb1117fee1771d7a3c3e950bad13295b44",
        "validatorsHash":"0xfb1d40704356268a4897994d88cbda1d2239d354",
        "seenCommit":{
            "blockID":{
                "hash":"0x39c51fd961217a63e16e1b6984dad2b679046667",
                "parts":{
                    "total":"0x1",
                    "hash":"0xdcb198f9ad7dba9a535884c11fdf3041bbab0493"
                }
            },
            "height":"0x197d6d",
            "round":0,
            "signAggr":"0x6023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f",
            "bitArray":{
                "bits":13,
                "elems":[
                    5758
                ]
            }
        },
        "epochBytes":""
    }
}
```

## int_getCandidateList
Returns the validator candidate list.

#### Parameters
None

#### Returns
`Object`- Validator candidate data object
* `candidateList`: `ARRAY` - The validator candidate list.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getCandidateList","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"candidateList":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"]}}
```


## int_getForbiddenList
Returns the forbidden validator list.

#### Parameters
None

#### Returns
`Object`- Forbidden data object
* `forbiddenList`: `ARRAY` - The forbidden validator list.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getForbiddenList","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"forbiddenList":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"]}}
```

## the default block parameter

The following methods have an extra default block parameter:

- [int_getBalance](#int_getbalance)
- [int_getCode](#int_getcode)
- [int_getTransactionCount](#int_gettransactioncount)
- [int_call](#int_call)

When requests are made that act on the state of intchain, the last default block parameter determines the height of the block.

The following options are possible for the defaultBlock parameter:

- `HEX String` - an integer block number
- `String "earliest"` for the earliest/genesis block
- `String "latest"` - for the latest mined block
- `String "pending"` - for the pending state/transactions
