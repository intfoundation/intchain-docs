# Mint

## Introduction

The incentive mechanism of POW is widely known and explicit: once a new block is produced, 
the block miner will acquire a certain amount of token as well as the accumulation of transaction fee in the block. 
As an IPBFT blockchain network, the INT Chain has similar way to produce reward token but more complex mechanism to distribute the reward to each contributor.

The reward is composed by two parts, one is the collected transaction fee from the transactions in each block. 
Another one is regular inflation in each block, which will produce new tokens. 
The mint module is in charge of calculating the inflated token amount and add the inflated token to reward pool.

## Inflation Calculation

### Block Time

The block time is not the machine time, because different machines may not have exactly the same time. 
They must have some deviation more or less which will result in non-deterministic. So here the block time is the BFT time. 
Please refer to this [tendermint bft-time](https://github.com/tendermint/tendermint/blob/master/docs/spec/consensus/bft-time.md) for detailed description.

### Inflation Rate

The inflation rate is assigned to 2.5% per year in genesis file.

### Calculation

This is the calculation equation:

```bash
 blockCostTime  = (current block BFT time) - (last block BFT time)
 AnnualInflationAmount = inflationBasement * inflationRate
 blockInflationAmount = AnnualInflationAmount * blockCostTime / (year)
```

The value of `inflationBasement` is specified in genesis file. 
By default its value `800000000INT`(0.8 billion `int`, `1 int` equals `1*10^18 int-atto`), and its value will never be changed.
Suppose `blockCostTime` is 1 second, and `inflationRate` is `2.5%`, then the inflation amount will be `634195839675291700 int-atto` (`0.6341958396752917 int`)

## Impact to users

The inflation calculation is automatically triggered by each block. So once a new block is produced, new tokens will be created accordingly. 
Users have no directly interface to affect this process.

