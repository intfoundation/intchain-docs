---
order: 3
---

# Testnet Local

Pour tester, ou pour développer, vous pourriez chercher à installer un testnet local.

## Testnet à Node Unique

**Exigences :**

- [Installer intchain](../getting-started/2-install.md)

:::tip
Nous utilisons le [dossier home](1-intro.md#home-directory) par défaut pour les exemples suivants.
:::

### intchain init-intchain

Initialise le fichier int_genesis.json qui permettra de vous aider à bootstraper le réseau.

```bash
intchain --testnet init-intchain "{1000000000000000000000000000, 100000000000000000000000}"
```


### intchain init
Initialise le fichier genesis.json qui va vous aider à paramétrer le consensus.

```bash
intchain --testnet init ./intchain/testnet/int_genesis.json
```


### intchain start

Tout est désormais prêt pour lancer `intchain`.

```bash
intchain --testnet
```
