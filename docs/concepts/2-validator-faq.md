---
order: 2
---

# Validator FAQ

:::tip
For general concepts, please refer to [General Concepts](1-general-concepts.md)
:::

## General Questions

### How to Become an INT Chain Validator

Refer to [Join The Mainnet](../getting-started/3-mainnet.md)

It is also recommended to test your validator setup on the [Testnet](../getting-started/4-testnet.md) before launch

:::tip
To earn more delegation for your validator, you are advised to:

- Undergo a security audit
- Open-source some dev tools and workflow
- Setup your own website to build your own image
:::

### What are hardware requirements

The minimum hardware requirements are mentioned here: [Hardware Requeirment](../using-intchain/1-intro.md#hardware-requeirment)

### What are the different states a validator can be in

After a validator is registered, they can be in three states:

- `active`: Validator is in the active set and participates in consensus. Validator is earning rewards and can be removed for misbehaviour.
- `inactive`: Validator is out of the top 25 validators and become a candidate, the validator can delegate more INT to himself to be in top 25, then he will be active automatically in the next epoch.


### How to backup the validator

It is really **IMPORTANT** to backup your validator private key carefully, it's the only way to restore your validator.

If you are using the software sign , your validator key is located in `<datadir>/<chainid>/priv_validator.json`. The easiest way is to backup the whole file.


### How to migrate the validator

There are many ways to migrate your validator, the most recommended way is:

1. [Run a Full Node](../getting-started/3-mainnet.md#full-node) on the new server

2. After you have caught-up, stop the Validator Node and the Full Node

3. Put the Validator's `priv_validator.json` in the right directory

4. Start the new Validator Node

### What is 'self-delegation'? How can I increase my 'self-delegation'

Self-delegation is delegation from a validator to himself. This amount can be increased by sending a [delegate](../json-rpc/2-int.md#int_delegate) transaction from your validator's operator account which you used to create the validator.

### Is there a minimum amount of INT that register needs

The minimum amount is `1000000 INT`.

### Can a validator run away with their delegators' funds

By delegating to a validator, an user delegates voting power. The more voting power a validator has, the more weight they have in the consensus and governance processes. This does not mean that the validator has custody of their delegators' funds. **By no means can a validator run away with its delegator's funds**.

Even though delegated funds cannot be stolen by their validators, delegators are still liable if their validators misbehave.

### How often will a validator be chosen to propose the next block? Does it go up with the quantity of bonded INT

The validator that is selected to propose the next block is called proposer. Each proposer is selected by VRF, and the frequency of being chosen is proportional to the voting power (i.e. amount of bonded INT) of the validator and previous block hash.

### What is the incentive to stake

Please refer to [Staking Rewards](1-general-concepts.md#staking-rewards)

### What is the incentive to run a validator

Validators earn proportionally more revenue than their delegators because of commissions.


### What are validators commission

Revenue received by a validator's pool is split between the validator and their delegators. The validator can apply a commission on the part of the revenue that goes to their delegators. This commission is set as a percentage. Each validator is free to set their initial commission. The INT Chain enforces the parameter that each validator sets. Only the commission rate can change after the validator is registered.

### What is the formula to calculate the rewards

Please refer to [Staking Rewards Calculation Formula](1-general-concepts.md#staking-rewards-calculation-formula)


### How to upload my validator's logo to the [Explorers](../getting-started/6-explorers.md)

1. Sign-up [Keybase](https://keybase.io/) with your validator's name

2. Upload your logo as your Keybase account's avatar

3. `Add a PGP key` to your Keybase account (I believe you will see this option after sign-up), and you will get a 16-digit string

4. [Edit your validator](../json-rpc/2-int.md#int_editvalidator) and specify `identity:<the_16_digit_string>`

## Common Problems

### My uptime is always 0% even I'm fully synced

Compare the two `Consensus Pubkey`:

- From [Explorer](http://titansexplorer.intchain.io/#/staking/validators), you can find the `Consensus Pubkey` which you declared for your validator in the Validator Detail page.

- Check the `Consensus Pubkey` which you are now using via `<datadir>/<ch>/priv_validator.json`

If they are not the same, it means you are running a Full Node other than the Validator.

#### You'd better have backed up your [validator key](#how-to-backup-the-validator)

then you can do these:

- Stop the node
- Replace the current `<datadir>/<chainid>/priv_validator.json` with the one you backed up
- Confirm the `Consensus Pubkey` is correct via `<datadir>/<chainid>/priv_validator.json`
- Start the node

#### What if I lost my validator Key

You can create a new [priv_validator.json](../getting-started/3-mainnet.md#create-bls-keys) with the validator address.

<!--
## Community Channel

- INT Validator Working Group: (Pending)
-->
