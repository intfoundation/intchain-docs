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

Once you generate a private validator, it will create a json file priv_validator.json under datadir and restart intchain.

```bash
intchain gen_priv_validator <address>
```

### Confirm your node has caught-up

```bash
intchain attach <datadir>/intchain/intchain.ipc
>intchian.blockNumber
```


### Become a Candidate

INT Chain is a blockchain system based on IPBFT consensus mechanism, which requires regular replacement of validators to ensure system security.

Epoch is the update cycle of the validator, which is about 2 hours.

You can apply candidate to become a candidate.

1、Apply Candidate

Parameters

   * `from`: address, 32 Bytes - the address which generates the private validator before
   * `securityDeposit`: hex string - amount of security deposit INT(minimum `0x3635c9adc5dea00000`), if you want to be a validator, but there is nobody can vote for you, you should deposit at least `0x152d02c7e14af6800000` INT
   * `commission`: integer - the commission fee percentage (between 0 ~ 100) of each block reward be charged from delegator, when candiate become a validator

Returns

   * `data`: hex string, 32 Bytes - the transaction hash

```bash
# applyCandidate
curl -X POST --data '{"jsonrpc":"2.0","method":"del_applyCandidate","params":["INT3LJK4UctyCwv5mdvnpBYvMbRTZBia", "0x152d02c7e14af6800000", 10],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
```


### Become a Validator

To become a validator, you can participate by voting. 

#### Vote

1、Get Vote Hash

Parameters

   * `from`: address, 32 Bytes - the address which apply candidate before
   * `publicKey`: hex string, 128 Bytes - bls public key in priv_validator.json
   * `amount`: hex string, the amount of your total vote
   * `salt`: string, random string

Returns

   * `voteHash`: hex string, 32 Bytes - hash of the vote

```bash
# getVoteHash
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getVoteHash","params":["INT3LJK4UctyCwv5mdvnpBYvMbRTZBia", "80DE91BD50F2C3E9F58780C7B739A53A9646DE04BD253D63ED584939B9DB0B381570CAA540D9A84EB5E709FE1D6F80D7AA616990F2177FE3A1F62468A0A26A8809D91C40016C22FA28BE3313F8118C6F4910C95F589980605B23295C9F3CD1FE53BD62F4774B6D29EC16DB98AF830A6E18DA8D1B68331B1C0DA5646FFF359A15", "0x54b40b1f852bda000000", "int"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
```

2、Vote Next Epoch

Parameters

   * `from`: address, 32 Bytes - the address which apply candidate before
   * `voteHash`: hex string, 32 Bytes - the return value of `getVoteHash` above

Returns

   * `data`: hex string, 32 Bytes - the transaction hash 

```bash
# voteNextEpoch
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_voteNextEpoch","params":["INT3LJK4UctyCwv5mdvnpBYvMbRTZBia", {vote hash}],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
```


#### Reveal Vote

1、Sign Address

Parameters

   * `form`: address, 32 Bytes - the address which apply candidate before
   * `privateKey`: hex string, 32 Bytes - the bls private key in priv_validator.json, you should add `0x` prefix
   
Returns

   * `signature`, 64 Bytes - the bls signature for the address

```bash
# signAddress
curl -X POST --data '{"jsonrpc":"2.0","method":"chain_signAddress","params":["INT3LJK4UctyCwv5mdvnpBYvMbRTZBia", "0xF1FBF3781FFDB1A80FA69DB034F4D25CFE27916983B172DC5F5E76384EE7BB2A"],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
```

2、Reveal Vote

Parameters

   * `from`: address, 32 Bytes - the address which apply candidate before
   * `pubkey`: hex string, 128 Bytes - the bls public key in priv_validator.json
   * `amount`: hex string, the amount of your total vote
   * `salt`: string, the random string which you have used for `getVoteHash`
   * `signature`: hex string, 64 Bytes - the bls signature of `from` address, signed by bls private key
   
Returns

   * `data`: hex string, 32 Bytes - the transaction hash

```bash
# revealVote
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_revealVote","params":["INT3LJK4UctyCwv5mdvnpBYvMbRTZBia", "80DE91BD50F2C3E9F58780C7B739A53A9646DE04BD253D63ED584939B9DB0B381570CAA540D9A84EB5E709FE1D6F80D7AA616990F2177FE3A1F62468A0A26A8809D91C40016C22FA28BE3313F8118C6F4910C95F589980605B23295C9F3CD1FE53BD62F4774B6D29EC16DB98AF830A6E18DA8D1B68331B1C0DA5646FFF359A15", "0x152D02C7E14AF6800000", "int", { signature }],"id":1}' -H 'content-type: application/json;' http://127.0.0.1:8556/testnet
```


:::warning
**Important**

Backup the `priv_validator.json` directory located in your datadir carefully! It is the only way to recover your validator.
:::

If there are no errors, then your node is now a validator in the next epoch (depending on whether your delegation amount is in the top 100 validators)(the max validator size will increase to 100) or candidate.
