# Mint

## Introduction

The incentive mechanism of POW is widely known and explicit: once a new block is produced, 
the block miner will acquire a certain amount of token as well as the accumulation of transaction fee in the block. 
As an IPBFT blockchain network, the INT Chain has similar way to produce reward token but more complex mechanism to distribute the reward to each contributor.

The reward is composed by two parts, one is the collected transaction fee from the transactions in each block. 
Another one is regular reward in each block.

## Reward Calculation

### Block Time

The block time is not the machine time, because different machines may not have exactly the same time. 
They must have some deviation more or less which will result in non-deterministic. So here the block time is the BFT time.

### Calculation

This is the reward calculation equation:

```bash
 blockCostTime  = (current block BFT time) - (last block BFT time)
 AnnualRewardAmount = baseAmount * rate
 blockReward = AnnualRewardAmount * blockCostTime / (year)
```

## Impact to users

The reward calculation is automatically triggered by each block. So once a new block is produced, new tokens will be created accordingly.
Users have no directly interface to affect this process.

