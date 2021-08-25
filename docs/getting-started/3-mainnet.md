---
order: 3
---

# Mainnet

:::tip
**Requirements:** [install intchain](2-install.md)

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

You can create a new wallet or import an existing one, then get some INT from the exchanges or anywhere else into the wallet you just created .e.g.

```bash
# create a new wallet
intchain account new
```

Or for test network
```bash
intchain --testnet account new
```

:::warning
**Important**

Backup the keystore in a safe place and remember your password!  
The default storage path of your keystore is "~/.intchain/intchain/keystore", and testnet storage is "~/.intchain/testnet/keystore".
:::


### Create BLS keys

If you want become a validator, you need create a BLS keys which is a json file named `priv_validator.json` under `datadir` first, and then restart `intchain`.

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

If there are no errors, then your node will become a validator  (depending on whether your delegation amount is in the top 25 validators) or candidate in the next epoch.



## Titans Mainnet

You can use the public RPC develop and test your apps.

- RPC: <https://titansrpc.intchain.io>

- Explorer: <https://titansexplorer.intchain.io>
