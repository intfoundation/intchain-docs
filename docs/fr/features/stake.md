# Staking

## Introduction

Ce document explique brièvement la fonctionnalité du staking, et ce que les utilisateurs doivent savoir à propos des commandes associées.

## Concepts

### Puissance de vote

La puissance de vote est un concept associé au consensus. INT Chain est un réseau blockchain IPBFT.
Durant le processus de consensus, un ensemble de validateurs vont voter au sujet d'un bloc proposé.
Si le validateur pense que le bloc proposé est valide, il votera `oui`, sinon il votera zéro.
Les votes des différents validateurs ne sont pas pondérés de façon identique.

### Validateur

Un validateur est un full node INT Chain. Si sa puissance de vote est nulle, il est simplement un full node normal, ou validateur candidat.
Lorsque sa puissance de vote est positive, il devient alors un véritable validateur.

### Délégateur & Délégation

Les personnes qui ne peuvent, ou ne veulent pas faire fonctionner un node validateur peuvent toutefois participer au processus de staking en tant que délégateurs.
Après avoir délégué des tokens aux validateurs, les délégateurs percevront une partie des gains des validateurs.
Déléguer des tokens est également appelé lier des tokens aux validateurs. Nous verrons plus tard une description détaillée à ce propos.
En outre, l'opérateur d'un validateur est également un délégateur.
Habituellement, l'opérateur d'un validateur ne se contente pas de déléguer à son propre validateur, il délègue également à d'autres validateurs.


### Validateurs Candidats

Le nombre de validateurs ne peut pas augmenter à l'infini. Trop de validateurs pourrait avoir comme conséquence un processus peu efficace qui ralentirait les TPS de la blockchain. Par conséquent, la blockchain IPBFT sera limitée quant à son nombre de validateurs.
Ils seront au nombre de 100. Si plus de 100 full nodes postulent à la validation des blocs, les 100 validateurs bénéficiant du plus grand nombre de tokens délégués seront considérés comme de vrais validateurs, et les autres seront des validateurs candidats, également classés selon le nombre de tokens qui leur sont délégués. Si un validateur est exclu de l'ensemble des validateurs, alors le mieux classé des candidats sera ajouté aux 100 validateurs au prochain epoch.

### Déléguer, Annuler une Délégation, et Période d'Annulation

Les opérateurs des validateurs doivent lier leurs tokens à leurs validateurs.
La puissance de vote du validateur est proportionnel à la quantité de tokens qui lui a été déléguée, incluant les tokens auto-délégués ainsi que ceux venant d'autres délégateurs.
Les opérateurs des validateurs peuvent diminuer la quantité de tokens qu'ils délèguent à leur validateur en envoyant des transactions d'annulation de délégation.
Les délégateurs peuvent également diminuer la quantité de tokens qu'ils ont déléguée à un validateur en envoyant des transactions [d'annulation de délégation](../json-rpc/2-int.md#int_undelegate)

Cependant, ces tokens ne seront pas immédiatement disponibles.
Une fois la transaction d'annulation de délégation validée, il faudra observer une période d'attente de 2 heures.
Une fois cette période achevée, les tokens seront disponibles à nouveau, automatiquement.
Ce mécanisme de période d'annulation de délégation contribue grandement à la sécurité de la blockchain IPBFT.
En outre, si le nombre de tokens auto-délégués est égal à zéro, alors le validateur associé sera retiré de l'ensemble des validateurs.


### Récompenses
  
En tant que délégateur, les récompenses perçues seront d'autant plus importantes que les tokens délégués à un validateur sont nombreux.
Pour l'opérateur d'un validateur, une récompense supplémentaire sera perçue : la commission de validateur.
Les récompenses proviennent de l'inflation ainsi que des frais de transaction. Pour calculer les récompenses, et comment les percevoir, veuillez vous référer à [mint](mint.md)

## Que peuvent faire les utilisateurs

- Créer un full node

  cf [Créer un Full Node](../getting-started/3-mainnet.md#full-node).

- S'enregistrer pour être validateur candidat

  cf [Devenir un Noeud Validateur](../getting-started/3-mainnet.md#become-a-candidate).

- Modifier son validateur 

  cf [Modifier un Validateur](../json-rpc/2-int.md#int_editvalidator).

- Augmenter son auto-délégation
  
  cf [Déléguer](../json-rpc/2-int.md#int_delegate), vous devez être le candidat.

- Déléguer des tokens à d'autres validateurs

  Si vous voulez simplement être un délégateur, vous pouvez ignorer les étapes ci-dessus.

  cf [Déléguer](../json-rpc/2-int.md#int_delegate).

- Annuler la délégation de tokens à un validateur

  cf [Annuler une Délégation](../json-rpc/2-int.md#int_undelegate).
