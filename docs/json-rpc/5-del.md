---
order: 5
---

# del Namespace

## del_applyCandidate
Apply to become a validator candidate.

#### Parameters
1. `from`: `String`, 32 Bytes - The address the transaction is send from.
2. `securityDeposit`: `QUANTITY` - Integer of the security deposit INT (minimum `0x3635c9adc5dea00000`), if you want to be a validator, but there is nobody can vote for you, you should deposit at least `0x152d02c7e14af6800000` INT.
3. `commission`: `QUANTITY` - Integer of commission fee percentage (between 0 ~ 100) of each block reward be charged from delegator, when candidate become a validator.
4. `gasPrice`: `QUANTITY` - (optional, default: To be determined) Integer of the gasPrice used for each paid gas.

#### Returns
`EpochNumber` - Integer of current epoch number.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"del_applyCandidate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "0x152d02c7e14af6800000", 10],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xb0b72c93e315133e9573219333c0a60de146398dff5bf8ba2c90dcc5c3391b7c"}
```
