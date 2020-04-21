---
order: 5
---

# Namespace `del`

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


## del_checkCandidate
Returns the validator candidate status of given address.

#### Parameters
1. `address`: `String`, 32 Bytes - The address to check .
2. `blockNumber`: `QUANTITY|TAG` - Integer block number, or the string "latest", "earliest" or "pending"

#### Returns
`Object` - The validator candidate status object
* `candidate`: `BOOL` - Validator candidate flag of given address.
* `commission`: `QUANTITY` - Commission percentage of validator candidate.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"del_checkCandidate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "latest"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"candidate":true,"commission":10}}
```


## del_cancelCandidate
Create a new transaction to cancel the validator candidate qualification, if the address has deposited proxied balance, it will be refund at the end of epoch, otherwise will be refund immediately.

#### Parameters
1. `address`: `String`, 32 Bytes - The validator candidate address.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"del_cancelCandidate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x36e71e25dfdafbf0bdf19b9714152c1e484fd0b8115d18cdd16a0f98a72ad893"}
```


## del_delegate
Create a new transaction to delegate your balance to validator candidate.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The address who want to delegate.
2. `candidate`: `STRING`, 32 Bytes - The address of validator candidate.
3. `amount`: `QUANTITY` - Amount of the delegate INT (minimum 1,000 INT).
4. `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"del_delegate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL", "0x3635c9adc5dea00000"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x38abd4a9ed9b3925c2523aace34069b5b9c672f449d74c28391b07686dd3e1df"}
```


## del_cancelDelegate
Create a new transaction to cancel your delegation from validator candidate, these unbonded token won't become liquid tokens immediately,After the unbond transactions are executed. Usually the unbonding period is 2 hours. Once the unbonding period is end, the unbonded token will become liquid token automatically

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
curl -X POST --data '{"jsonrpc":"2.0","method":"del_cancelDelegate","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL", "0x3635c9adc5dea00000"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x234ff1d87ee437ed0882166e8b7210d6e9de2ddc7746e155b3b074b81277f84c"}
```


## del_setCommission
Create a new transaction to reset the commission percentage of validator candidate.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The validator candidate address.
2. `commission`: `QUANTITY` - Commission percentage of validator candidate.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"del_setCommission","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", 50],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x0c96e71e100006b08f78ed4cf12a034bd96df49023cee5ad8a565389e2b2707c"}
```



