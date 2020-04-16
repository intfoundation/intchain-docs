# Staking

## Introduction

This specification briefly introduces the functionality of stake and what user should do with the provided commands.

## Concepts

### Voting power

Voting power is a consensus concept. INT Chain is an IPBFT blockchain network. During the consensus process, a set of validators will vote the proposal block. If a validator thinks the proposal block is valid, it will vote `yes`, otherwise, it will vote nil. The votes from different validator don't have the same weight. 

### Validator

Validator is a full INT Chain node. If its voting power is zero, it is just a normal full node or a validator candidate. Once its voting power is positive, then it is a real validator.

### Delegator && Delegation

People that cannot, or do not want to run validator nodes, can still participate in the staking process as delegators. After delegating some tokens to validators, delegators will gain shares from corresponding validators. Delegating tokens is also called bonding tokens to validators. Later we will have detailed description on it. Besides, a validator operator is also a delegator. Usually, a validator operator not only has delegation on its own validator, but also can have delegation on other validators.


### Validator Candidates

The quantity of validators can't increase infinitely. Too many validators may result in low efficient consensus which slows down the blockchain TPS. So IPBFT blockchain network will have a limiation to the validator quantity. Usually, the value is 100. If more than 100 full nodes apply to join validator set. Then only these nodes with top 100 most bonded tokens will be real validators. Others will be validator candidates and will be descending sorted according to their bonded token amount. Once the one or more validators are kicked out from validator set, then the top candidates will be added into validator set at next epoch.

### Bond && Unbond && Unbonding Period

Validator operators must bond their liquid tokens to their validators. The validator voting power is proportional to the bonded tokens including both self-bonded tokens and tokens from other delegators. Validator operators can lower their own bonded tokens by sending cancel delegate transactions. Delegators can also lower bonded token by sending cancel delegate transactions. However, these unbonded token won't become liquid tokens immediately. After the unbond transactions are executed. Usually the unbonding period is 2 hours. Once the unbonding period is end, the unbonded token will become liquid token automatically. The unbonding period mechanism makes great contribution to the security of IPBFT blockchain network. Besides, if the self-bonded token equals to zero, then the corresponding validator will be removed out of validator set.


### Rewards
  
As a delegator, the more bonded tokens it has on validator, the more rewards it will earn. For a validator operator, it will have extra rewards: validator commission. The rewards come from token inflation and transaction fee. As for how to calculate the rewards and how to get the rewards, please refer to [mint](mint.md).

## What Users Can Do

- Create a full node
  Please refer to [Run a Full Node](../getting-started/3-mainnet.md#full-node).

- Apply to be validator

  Please refer to [Upgrade to Validator Node](../getting-started/3-mainnet.md#become-a-validator).

- Edit validator 

  ```bash
  curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_editValidator","params":["INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU", "INT Super Validator", "https://intchain.io", "E1573E268A818503", "INT to the moon"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
  ```

- Increase self-delegation

  ```bash
  curl -X POST --data '{"jsonrpc":"2.0","method":"del_delegate","params":["INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU", "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU", "0x152d02c7e14af6800000"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
  ```

- Delegate tokens to other validators

  If you just want to be a delegator, you can skip the above steps.

  ```bash
  curl -X POST --data '{"jsonrpc":"2.0","method":"del_delegate","params":["INT3CpFuk2cJ1te9WZV1w8Y3wkQCcA5Z", "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU", "0x152d02c7e14af6800000"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
  ```

- Unbond tokens from a validator

  Use amount for Unbonding

  ```bash
  curl -X POST --data '{"jsonrpc":"2.0","method":"del_cancelDelegate","params":["INT3CpFuk2cJ1te9WZV1w8Y3wkQCcA5Z", "INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU", "0x152d02c7e14af6800000"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
  ```
