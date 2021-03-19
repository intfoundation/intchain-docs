---
order: 3
---

# Genesis File

The Genesis file (`<datadir>/<chainid>/genesis.json and <datadir>/<chainid>/int_genesis.json`) is the basis for the entire network initialization, which contains most info for creating a Genesis block (such as ChainID, consensus params, initial account balances, and validators info).
The genesis file sets the initial parameters of any new INT Chain network. Establishing a robust social consensus over the genesis file is critical to start a network.

Each genesis state starts with a list of account balances. Social consensus on these account balances must be bootstrapped from some external process be it events on another blockchain to a token generation event.

## Genesis Json

* **chain_id**       Blockchain’s ID
* **consensus**      Consensus type
* **genesis_time**   The time created
* **reward_scheme**  Total reward, total year and epoch number per year
* **current_epoch**  Genesis epoch info


## INT Genesis Json

* **config**       Blockchain’s config
* **nonce**        Nonce
* **timestamp**    The time to launch
* **extraData**    The extra data of blockchain, default 0x0
* **gasLimit**     The gas limit of one block, default 120000000
* **difficulty**   The difficulty of one block, default 0x1
* **mixHash**      Mix hash
* **coinbase**     Coinbase address, default `0x0000000000000000000000000000000000000000`
* **alloc**        The genesis allocation of balance and amount
* **number**       The number of genesis block, default 0x0
* **gasUsed**      Blockchain’s config
* **parentHash**   Hash of parent block, default `0x0000000000000000000000000000000000000000000000000000000000000000`
