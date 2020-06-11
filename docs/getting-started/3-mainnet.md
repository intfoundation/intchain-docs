---
order: 3
---

# Mainnet

:::tip
**Requirements:** [install intchain](2-install.md)

But the mainnet has not startted yet.
:::

## Full Node

```bash
# start the node (you can also use "nohup" or "systemd" to run in the background)
intchain 
```

:::tip
It will take a long time to sync block data.
:::

## Validator Node

### Create a Wallet

You can create a new wallet or import an existing one, then get some INT from the exchanges or anywhere else into the wallet you just created, .e.g.

```bash
# create a new wallet
intchain account new
```

:::warning
**Important**

backup the keystore in a safe place and remember your password! 
:::


### Create BLS keys

Once you create a private validator, it will create a json file `priv_validator.json` under `datadir` and restart `intchain`.

```bash
intchain create-validator <address>
```

Or for test network
```bash
intchain --testnet create-validator <address>
```


### Confirm your node has caught-up

```bash
intchain attach <datadir>/<chainid>/intchain.ipc
>int.blockNumber
```

### Become a Candidate

INT Chain is a blockchain system based on IPBFT consensus mechanism, which requires regular replacement of validators to ensure system security.

Epoch is the update cycle of the validator, which is about 2 hours.

You can register (int_register under json rpc) to become a candidate.


:::warning
**Important**

Backup the `priv_validator.json` directory located in your datadir carefully! It is the only way to recover your validator.
:::

If there are no errors, then your node is now a validator in the next epoch (depending on whether your delegation amount is in the top 100 validators)(the max validator size will increase to 100) or candidate.
