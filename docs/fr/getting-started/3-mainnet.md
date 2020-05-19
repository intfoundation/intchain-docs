---
order: 3
---

# Mainnet

:::tip
**Nécessite :** [installer intchain](2-install.md)

Mais le mainnet n'est pas encore actif pour l'instant.
:::

## Full Node

```bash
# démarrez le node (vous pouvez également utiliser "nohup" ou "systemd" pour démarrer en arrière-plan)
intchain 
```

:::tip
Il faudra attendre (longtemps) pour que la synchronisation des données des blocs soit terminée.
:::

## Validator Node

### Créer un Wallet

Vous pouvez créer un nouveau wallet ou importer un existant, puis obtenir des INT depuis les exchange ou autre, que vous enverrez sur votre wallet :

```bash
# créer un nouveau wallet
intchain account new
```

:::warning
**Important**

sauvegardez le keystore dans un endroit sûr, et n'oubliez pas votre mot de passe !
:::


### Création des clés BLS

Une fois que vous avez créé un validateur privé, un fichier json priv_validator.json sera créé dans le dossier datadir, puis redémarrage de intchain.

```bash
intchain createValidator <address>
```

### Confirmez que votre noeud a rejoint la blockchain

```bash
intchain attach <datadir>/<chainid>/intchain.ipc
>int.blockNumber
```

### Devenir un Candidat

INT Chain est un système de blockchain basé sur le mécanisme de consensus IPBFT, qui nécessite le remplacement régulier des validateurs pour assurer la sécurité du système.

Un epoch est le cycle de mise à jour des validateurs, qui est d'environ 2 heures.

Vous pouvez [vous inscrire](../json-rpc/2-int.md#int_register) pour devenir candidat.


:::warning
**Important**

Sauvegardez le dossier `priv_validator.json` localisé dans votre datadir avec précaution ! C'est le seul moyen de récupérer votre validateur.
:::

S'il n'y a pas d'erreurs, votre node est maintenant un validateur à l'epoch suivant (si le montant de votre délégation est dans les 100 premiers validateurs) (le nombre maximal de validateurs passera à 100) ou un candidat.
