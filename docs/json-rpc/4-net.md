---
order: 4
---

# Namespace `net` 

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
