# Staking

## Introduction

This specification briefly introduces the functionality of stake and what user should do with the provided commands.

## Concepts

### Voting power

Voting power is a consensus concept. INT Chain is an IPBFT blockchain network. 
During the consensus process, a set of validators will vote the proposal block. 
If a validator thinks the proposal block is valid, it will vote `yes`, otherwise, it will vote nil. 
The votes from different validator don't have the same weight. 

### Validator

Validator is a full INT Chain node. If its voting power is zero, it is just a normal full node or a validator candidate. 
Once its voting power is positive, then it is a real validator.

### Delegator && Delegation

People that cannot, or do not want to run validator nodes, can still participate in the staking process as delegators. 
After delegating some tokens to validators, delegators will gain shares from corresponding validators. 
Delegating tokens is also called bonding tokens to validators. Later we will have detailed description on it. 
Besides, a validator operator is also a delegator. 
Usually, a validator operator not only has delegation on its own validator, but also can have delegation on other validators.


### Validator Candidates

The quantity of validators can't increase infinitely. Too many validators may result in low efficient consensus which slows down the blockchain TPS. So IPBFT blockchain network will have a limiation to the validator quantity. Usually, the value is 100. If more than 100 full nodes apply to join validator set. Then only these nodes with top 100 most bonded tokens will be real validators. Others will be validator candidates and will be descending sorted according to their bonded token amount. Once the one or more validators are kicked out from validator set, then the top candidates will be added into validator set at next epoch.

### Delegate && UnDelegate && UnDelegating Period

Validator operators must bond their liquid tokens to their validators. 
The validator voting power is proportional to the delegated tokens including both self-delegate tokens and tokens from other delegators. 
Validator operators can lower their own bonded tokens by sending cancel delegate transactions. 
Delegators can also lower delegated token by sending [undelegate](../json-rpc/2-int.md#int_undelegate) transactions. 
However, these undelegated token won't become liquid tokens immediately. 
After the undelegate transactions are executed. Usually the undelegating period is 2 hours. 
Once the undelegating period is end, the undelegate token will become liquid token automatically. 
The undelegating period mechanism makes great contribution to the security of IPBFT blockchain network. 
Besides, if the self-delegate token equals to zero, then the corresponding validator will be removed out of validator set.


### Rewards
  
As a delegator, the more bonded tokens it has on validator, the more rewards it will earn. 
For a validator operator, it will have extra rewards: validator commission. 
The rewards come from token inflation and transaction fee. As for how to calculate the rewards and how to get the rewards, please refer to [mint](mint.md).

## What Users Can Do

- Create a full node

  Please refer to [Run a Full Node](../getting-started/3-mainnet.md#full-node).

- Register to be a candidate

  Please refer to [Upgrade to Validator Node](../getting-started/3-mainnet.md#become-a-candidate).

- Edit validator 

  Please refer to [Edit validator](../json-rpc/2-int.md#int_editvalidator).

- Increase self-delegation
  
  Please refer to [Delegate](../json-rpc/2-int.md#int_delegate), the candidate should be yourself.

- Delegate tokens to other validators

  If you just want to be a delegator, you can skip the above steps.

  Please refer to [Delegate](../json-rpc/2-int.md#int_delegate).

- Undelegate tokens from a validator

  Please refer to [UnDelegate](../json-rpc/2-int.md#int_undelegate).
