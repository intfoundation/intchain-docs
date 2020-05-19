---
order: 1
---

# Introduction

Le programme éxécutable `intchain` est le point d'entrée permettant d'éxécuter un node INT Chain. Tous les nodes validateurs ainsi que les full nodes doivent installer `intchain` et lancer le daemon pour rejoindre le réseau INT Chain.
Vous pouvez également utiliser `intchain` pour démarrer votre propre réseau de test en local.

## Exigences Matérielles

Il est recommandé d'éxécuter les nodes INT Chain sur un Serveur Linux.

### Exigences Minimum

- 2 CPU
- Memory: 6GB
- Disk: 256GB SSD
- OS: CentOS 7.5 64-bit
- Bande Passante: 20Mbps
- Autoriser toutes les connexions entrantes sur les ports TCP 8550 et 8555

## Dossier Home

Le dossier home est le dossier de travail du node INT Chain. Le dossier home contient toutes les informations de configuration ainsi que toutes les données permettant au node de fonctionner.

Dans la commande `intchain`, vous pouvez spécifier le dossier home du node en utilisant le flag `--datadir`.
Si vous faites fonctionner plusieurs nodes sur la même machine, vous devez spécifier des dossiers home distincts.
Si le flag `--datadir` n'est pas spécifié dans la commande INT Chain, la valeur par défaut `$HOME/.intchain` sera utilisée pour le dossier home.

Les commandes `intchain init-intchain` et `intchain init` permettent d'initialiser le dossier `--datadir` spécifié et de créer les fichiers de configuration par défaut.
Excepté la commande `intchain init-intchain`, le dossier home utilisé par toutes les autres sous-commandes `intchain` doit être initialisé, dans le cas contraire vous obtiendrez des messages d'erreur.

Les données du node intchain sont stockées dans le dossier `nodes` du home, les données relatives à la blockchain sont stockées dans le dossier `<datadir>/<chainid>/intchain`.


### genesis.json

genesis.json définit les données de consensus, qui déterminent les paramètres du système telles que chain_id, les paramètres du consensus, la création de validateurs.

Voir [genesis-file](../concepts/3-genesis-file.md) pour les détails.


### int_genesis.json

int_genesis.json définit les données du bloc genesis, qui déterminent les paramètres du système tels que chain_id, les comptes initiaux et les allocations de tokens.
Voir [int-genesis-file](../concepts/3-genesis-file.md) pour les détails.


### nodekey

nodekey est utilisé pour stocker la clé du node, qui est utilisée pour proposer une indentification unique du node. Elle est utilisée dans les connexions p2p.

### priv_validator.json

priv_validator.json est le fichier que le validateur va utiliser pour signer les votes Pre-vote/Pre-commit à chaque round du consensus.
Au fur et à mesure que le consensus progresse, le moteur de consensus IPBFT va continuellement mettre à jour les valeurs `last_height`/`last_round`/ `last_step`.


