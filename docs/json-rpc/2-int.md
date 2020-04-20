---
order: 2
---

# `int` Namespace

## int_protocolVersion
Returns the current intchain protocol version.

#### Parameters
None

#### Returns

`String` - The current intchain protocol version.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"int_protocolVersion","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x40"}

```


