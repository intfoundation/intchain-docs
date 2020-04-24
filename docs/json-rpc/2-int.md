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


## net_version
Returns the current network id.

#### Parameters
None

#### Returns

`String` - The current network id.
- `"8551"`: INT Chain Mainnet
- `"8552"`: INT Chain Testnet

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"8551"}
```


## net_listening

Returns `true` if client is actively listening for network connections.

#### Parameters
None

#### Returns

`Boolean` - `true` when listening, otherwise `false`.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":true}
```

## net_peerCount

Returns number of peers currently connected to the client.

##### Parameters
none

##### Returns

`QUANTITY` - integer of the number of connected peers.

##### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x1"}
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

## int_estimateGas  // TODO fix rpc handler crashed bug

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

#### Parameters

See [int_call](#int_call) parameters, expect that all properties are optional. If no gas limit is specified `intchain` uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

#### Returns

`QUANTITY` - the amount of gas used.

#### Example
```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_estimateGas","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0xde0b6b3a7640000", "data": ""}, "latest"],"id":1}' -H 'content-type: application/json;'

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


## int_pendingTransactions  //TODO add pending transactions

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


## int_getFilterChanges  // TODO add contract transaction to finish getFilterChanges result

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


## int_getProof  // TODO fix getProof is not available bug

Returns the account- and storage-values of the specified account including the Merkle-proof.

#### getProof-Parameters

1. `STRING`, 32 bytes - address of the account or contract
2. `ARRAY`, 32 Bytes - array of storage-keys which should be proofed and included. See int_getStorageAt
3. `QUANTITY|TAG` - integer block number, or the string "latest" or "earliest", see the default block parameter


#### Example Parameters
```
params: ["INT3HGH5oAByC1ni3yccBKrrLcNTZry7",["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],"latest"]
```

#### getProof-Returns

Returns
`Object` - A account object:

`balance`: `QUANTITY` - the balance of the account. See `int_getBalance`

`codeHash`: `DATA`, 32 Bytes - hash of the code of the account. For a simple Account without code it will return "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"

`nonce`: `QUANTITY`, - nonce of the account. See int_getTransactionCount

`storageHash`: `DATA`, 32 Bytes - SHA3 of the StorageRoot. All storage will deliver a MerkleProof starting with this rootHash.

`accountProof`: `ARRAY` - Array of rlp-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 (address) as key.

`storageProof`: `ARRAY` - Array of storage-entries as requested. Each entry is a object with these properties:

`key`: `QUANTITY` - the requested storage key
`value`: `QUANTITY` - the storage value
`proof`: `ARRAY` - Array of rlp-serialized MerkleTree-Nodes, starting with the storageHash-Node, following the path of the SHA3 (key) as path.

#### getProof-Example
```
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_getProof","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7",["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],"latest"],"id":1}' -H "Content-type:application/json"

// Result

```
