---
order: 3
---

# Genesis File

Le fichier Genesis (`<datadir>/<chainid>/genesis.json and <datadir>/<chainid>/int_genesis.json`) est la base de l'initialisation réseau, qui contient toutes les informations nécessaires pour créer un bloc Genesis (tel que ChainID, les paramètres de consensus, les balances du compte initial, et les informations concernant les validateurs).
Le fichier Genesis définit les paramètres initiaux nécessaires à n'importe quel nouveau réseau INT Chain. Établir un consensus social robuste grâce au fichier Genesis est primordial pour créer un réseau.

Each genesis state starts with a list of account balances. Social consensus on these account balances must be bootstrapped from some external process be it events on another blockchain to a token generation event.

## Json Genesis

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
* **gasLimit**     The gas limit of one block, default 8000000
* **difficulty**   The difficulty of one block, default 0x1
* **mixHash**      Mix hash
* **coinbase**     Coinbase address, default `INT3AAAAAAAAAAAAAAAAAAAAAAAAAAAA`
* **alloc**        The genesis allocation of balance and amount
* **number**       The number of genesis block, default 0x0
* **gasUsed**      Blockchain’s config
* **parentHash**   Hash of parent block, default `0x0000000000000000000000000000000000000000000000000000000000000000`
