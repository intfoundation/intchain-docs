---
order: 2
---

# FAQ Validateurs

:::tip
Pour les concepts de base, veuillez vous référer à [Concepts  de Base](1-general-concepts.md)
:::

## Questions Générales

### Comment devenir un Validateur INT Chain

cf [Rejoignez le Mainnet](../getting-started/3-mainnet.md)

Il est également recommandé de tester l'installation de votre validateur sur le [Testnet](../getting-started/4-testnet.md) avant le lancement.

:::tip
Pour gagner davantage de délégation pour votre validateur, quelques conseils :

- Éprouvez un audit de sécurité
- Partagez outils dev et workdlow en open-source
- Mettez en place votre propre site internet pour construire votre image
:::

### Quelles sont les exigences matérielles

Les exigences matérielles minimales sont détaillées ici : [Exigences Matérielles](../using-intchain/1-intro.md#hardware-requeirment)

### Quels sont les différents états possibles pour un validateur

Une fois qu'un validateur est enregistré, il peut être dans trois états :

- `actif`: La validateur fait partie de l'ensemble des validateurs actifs et participe au consensus. Le validateur gagne des récompenses et peut être exclu/interdit en cas de mauvais comportement.
- `interdit`: Le validateur s'est mal comporté et est exclu/interdit, c'est à dire qu'il n'est plus dans l'ensemble des validateurs qui participent au consensus. Il peut envoyer une transaction `unforbid` pour être réintégré.
- `inactif`: Le validateur est en-dehors du top 100 des validateurs et est devenu un candidat, il peut déléguer davantage de tokens INT à lui-même pour revenir dans le top 100, il sera alors automatiquement réintégré aux actifs lors du prochain epoch.


### Comment effectuer une sauvegarde du Validateur

Il est vraiment **IMPORTANT** d'effectuer une sauvegarde de la clé privée de votre validateur, c'est le seul moyen de le restaurer en cas de problème.

Si vous utilisez la signature logicielle, la clé de votre validateur est située dans `<datadir>/<chainid>/priv_validator.json`. Le moyen le plus simple est de sauvegarder le fichier intégral.


### Comment migrer le validateur

Il y a plusieurs moyen de migrer votre validateur, voici le plus conseillé :

1. [Créer un Full Node](../getting-started/3-mainnet.md#full-node) sur le nouveau serveur

2. Ensuite, arrêtez le Validateur Node et le Full Node

3. Déposez le fichier `priv_validator.json` du validateur dans le bon dossier

4. Démarrez le Validateur Node

### Qu'est-ce que l'auto-délégation ? Comment augmenter mon auto-délégation ?

L'auto-délégation est la délégation d'un validateur envers lui-même. Ce montant peut être augmenté en envoyant une transaction [delegate](../json-rpc/2-int.md#int_delegate) depuis le compte de l'opérateur de votre validateur, que vous avez utilisé pour créer le validateur.

### Est-ce qu'il faut un montant minimum de INT pour l'enregistrement ?

Le montant minimum est `10000 INT`.

### Est-ce qu'un validateur peut s'enfuir avec les fonds qui lui ont été délégués ?

En déléguant à un validateur, un utilisateur délègue sa puissance de vote. Plus un validateur dispose de puissance de vote, plus il pèse dans le consensus et le processus de gouvernance. Cela ne signifie pas que le validateur possède les fonds du délégateur. **Un validateur ne peut en aucun cas s'enfuir avec les fonds qui lui ont été délégués**.

Cependant, même si les fonds délégués à un validateurs ne peuvent pas être volés par ce dernier, les délégateurs demeurent responsables si leur validateur se conduit mal.

### À quelle fréquence un validateur sera choisi pour proposer le bloc suivant ? Est-ce qu'il y a un lien avec la quantité de INT qui lui sont délégués ?

Le validateur qui est sélectionné pour proposer le bloc suivant est appelé le proposer. Chaque proposer est sélectionné par VRF, et la probabilité d'être choisi est proportionnelle à la puissance de vote (donc à la quantité de INT) du validateur et du hash du bloc précédent.

### Quel est l'incitation à Stake ?

Veuillez vous référer à [Récompense de Staking](1-general-concepts.md#staking-rewards)

### Quelle incitation à créer un validateur ?

Les validateurs gagnent proportionnellement davantage que leurs délégateurs grâce aux commissions.


### À quoi correspond la commission d'un validateur ?

Les revenus perçus par l'équipe d'un validateur est divisée entre le validateur d'un côté, et les délégateurs de l'autre. Le validateur peut appliquer une commission sur la part des revenus qui vont à ses délégateurs. Cette commission est définie comme un pourcentage, chaque validateur est libre de paramétrer leur commission initiale. INT Chain applique le paramètre que chaque validateur aura défini. Seul le taux de commission pourra changer une fois que le validateur aura été enregistré.

### Quelle est la formule permettant de calculer les récompenses

Veuillez vous référer à [Formule de Calcul des Récompenses du Staking](1-general-concepts.md#staking-rewards-calculation-formula)


### Comment téléverser le logo de mon validateur sur les [Explorers](../getting-started/6-explorers.md)

1. Créez un compte [Keybase](https://keybase.io/) avec le nom de votre validateur

2. Téléversez votre logo en guise d'avatar de votre compte Keybase

3. `Add a PGP key`  à votre compte Keybase (Je pense que vous verrez l'option une fois que vous aurez créé votre compte), et vous récupèrerez une chaîne de 16 chiffres

4. [Éditez votre validateur](../json-rpc/2-int.md#int_editvalidator) et renseignez `identity:<the_16_digit_string>`

## Problèmes courants

### Mon uptime est à 0%, même lorsque je suis pleinement synchronisé

Comparez les deux `Consensus Pubkey` :

- Celle de l'[Explorer](http://titansexplorer.intchain.io/#/staking/validators), vous pouvez trouver la `Consensus Pubkey` que vous avez déclarée pour votre validateur sur la page des Détails du Validateur.

- Vérifiez la `Consensus Pubkey` que vous utilisez actuellement via `<datadir>/<ch>/priv_validator.json`

Si elles ne sont pas identiques, cela signie que vous faites tourner un Full Node qui n'est pas un Validateur.

#### Si vous avez sauvegardé votre [validator key](#how-to-backup-the-validator)

Vous pourrez ensuite faire ceci :

- Stoppez le node
- Remplacez le fichier actuel `<datadir>/<chainid>/priv_validator.json` par celui que vous avez sauvegardé
- Assurez-vous que la `Consensus Pubkey` est correcte via `<datadir>/<chainid>/priv_validator.json`
- Démarrez le node

#### En cas de perte de la Validator Key

Vous pouvez créer une nouvelle [priv_validator.json](../getting-started/3-mainnet.md#create-bls-keys) avec l'adresse de votre Validateur.

<!--
## Community Channel

- INT Validator Working Group: (Pending)
-->