---
order: 1
---

# General Concepts

## Node Types

### Full Node

A full-node should validate all transactions and blocks. It is necessary for the blockchain system.

### Validator Node

 The role of validators is to run a full-node and participate in consensus by broadcasting votes which contain cryptographic signatures signed by their private keys. Validators commit new blocks to the blockchain and receive reward. They must also participate in governance by voting on proposals. Validators are weighted according to their total stake.

### Validator Candidate Node

Only top 25 bonded full nodes can become validator nodes, the rest will become candidates. The situation will change as delegation amount changes.

## User Types

### Validator Operator

A validator operator is the only one who can operate the Validator's information or participate in governance as the validator.

### Delegator

Delegators are INT holders who delegate INT to a validator and obtain some rewards in exchange. They can earn as much as the validators and only need to pay some commission.


## INT Token

The INT Chain has its own native token known as *INT*.  It is designed to serve two purposes in the network.

- **Staking.** Similar to the INT token in the INT Chain 3.0, the INT token will be used as a staking token to secure the IPBFT blockchain.
- **Transaction Fee.** The INT token will also be used to pay fees for all transactions in the INT Chain network.

## Inflation And Deflation

The max supply of INT is 1 billion. Only 0.9 billion was initialized (contain the burned), and the left 0.1 billion will be mined in 5 years.

Half of the block fee was burnt to 0x0000000000000000000000000000000000000001.


## Staking Rewards

The validator and its delegators can share the following rewards by proportion:

- **Block Reward**

  In INT Chain, the probability for being a proposer is proportional to the validator's bonded tokens.

- **Fee**

  Each transaction needs a fee for compensating validators' work. These fees can be paid with INT.

However, before the rewards is distributed to its delegators, the validator who proposed block can apply a commission for providing staking services.

### Staking Rewards Calculation Formula

The following formulas are based on the current INT Chain params.

#### Annual Rewards (ignore transaction fees)

- **AnnualInflation =** `Base * InflationRate` (aka 1 billion * 2% = 20 million INT, for total 5 years. Only 0.9 billion was initialized)
- **ValidatorRewards =** `(AnnualInflation / TotalStakedTokens) * (ValidatorSelfDelegation +  DelegatorsDelegation * ValidatorCommissionRate)`
- **DelegatorRewards =** `(AnnualInflation / TotalStakedTokens) * DelegatorSelfDelegation * (1 - ValidatorCommissionRate)`

#### Block Rewards

- **BlockInflation =** `AnnualInflation / (365*24*60*60) * 3` (aka 1.902 INT based on 3s per block for the first epoch)
- **BlockRewards =** `(BlockInflation + BlockCollectedFees / 2)` (aka half of block fees was burnt to 0x0000000000000000000000000000000000000001)
- **Commission =** `BlockRewards * ValidatorCommissionRate`
- **ValidatorRewards =** `(BlockRewards - Commission) * (ValidatorSelfDelegation / TotalStakedTokens) + Commission`
- **DelegatorRewards =** `(BlockRewards - Commission) * (DelegatorSelfDelegation / TotalStakedTokens)`

## Validator Responsibilities

Validators have two main responsibilities:

- **Be able to constantly run a correct version of the software:** Validators need to make sure that their servers are always online and their private keys are not compromised.
- **Actively participate in governance:** Validators are required to vote on every proposal.

Additionally, validators are expected to be active members of the community. They should always be up-to-date with the current state of the ecosystem so that they can easily adapt to any change.

## Validator Risks

- **Unavailability**: Validators are expected to keep signing votes for making new blocks. If a validator's signature has not been included in the latest block for more than one epoch (about 2 hours), this validator will be forbidden and removed from next epoch validator set for one epochs.
- **Double Sign**: If the protocol detects that a validator voted multiple different opinions about the same block (same height/round), or voted for different blocks at the same height/round, this validator will be forbidden and removed from next epoch validator set for one epochs.
