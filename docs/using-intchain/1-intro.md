---
order: 1
---

# Introduction

The `intchain` executable program is the entry point for running an INT Chain node. All the validator nodes and full nodes need to install the `intchain` and launching the daemon to join the INT Chain network. You can also use `intchain` to start your own test network locally.

## Hardware Requeirment

It's recommended that you run INT Chain nodes on Linux Server.

### Minimum Requirement

- 2 CPU
- Memory: 6GB
- Disk: 256GB SSD
- OS: CentOS 7.5 64-bit
- Bandwidth: 20Mbps
- Allow all incoming connections on TCP port 8550 and 8555

## Home Directory

The home directory is the working directory of the INT Chain node. The home directory contains all the configuration information and all the data that the node runs.

In the `intchain` command, you can specify the home directory of the node by using flag `--datadir`. If you run multiple nodes on the same machine, you need to specify different home directories for them. If the `--datadir` flag is not specified in the INT Chain command, the default value `$HOME/.intchain` is used as the home directory.

The `intchain init_int_genesis` and `intchain init` command is responsible for initializing the specified `--datadir` directory and creating the default configuration files. Except the `intchain init_int_genesis` command, the home directory used by any other `intchain` sub commands must be initialized, otherwise an error will be reported.

The data of the intchain node is stored in the `nodes` directory of the home, blockchain data is stored in the `<datadir>intchain/int`.


### genesis.json

genesis.json defines the consensus data, which specifies the system parameters such as chain_id, consensus parameters, creation of validators. See [genesis-file](../concepts/3-genesis-file.md) for details.


### int_genesis.json

int_genesis.json defines the genesis block data, which specifies the system parameters such as chain_id, the initial account token allocation. See [int-genesis-file](../concepts/3-genesis-file.md) for details.


### nodekey

nodekey is used to store the node's key, which is used to indicate the unique identity of the node. It is used in p2p connection.

### priv_validator.json

pri_validator.json is the file that the validator will use to sign Pre-vote/Pre-commit in each round of consensus voting. As the consensus progresses, the IPBFT consensus engine will continuously update `last_height`/`last_round`/ `last_step` values.


