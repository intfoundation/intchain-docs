---
order: 4
---

# tdm Namespace

## tdm_getCurrentEpochNumber
Returns the current epoch number.

### Parameters
None

### Returns
`EpochNumber`, `QUANTITY` - Integer of current epoch number.

### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getCurrentEpochNumber","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xd8"}

```
