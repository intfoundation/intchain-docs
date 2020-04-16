---
order: 3
---

# Local Testnet

For testing or developing purpose, you may want to setup a local testnet.

## Single Node Testnet

**Requirements:**

- [Install intchain](../getting-started/2-install.md)

:::tip
We use the default [home directory](1-intro.md#home-directory) for all the following examples
:::

### intchain init_int_genesis 

Initialize the int_genesis.json file that will help you to bootstrap the network.

```bash
intchain --testnet init_int_genesis "{1000000000000000000000000000, 100000000000000000000000}"
```


### intchain init
Initialize the genesis.json file that will help you to set the consensus.

```bash
intchain --testnet init ./intchain/testnet/int_genesis.json
```


### intchain start

Now, it‘s ready to start `intchain`.

```bash
intchain --testnet
```
