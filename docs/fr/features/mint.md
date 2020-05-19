# Mint

## Introduction

Le mécanisme d'incitation du POW est largement connu et explicite: une fois qu'un nouveau bloc est produit,
le mineur du bloc obtient une certaine quantité de tokens ainsi que l'ensemble des frais des transactions présentes dans le bloc.
En tant que réseau blockchain IPBFT, INT Chain a un fonctionnement similaire pour la production de tokens de récompense, mais le mécanisme de distribution aux contributeurs est plus complexe.

La récompense est composée de deux parties, l'une correspond aux frais de transaction collectés à partir des transactions présente dans chaque bloc.
L'autre est une récompense régulière inhérente à chaque bloc.

## Calcul des Récompenses

### Bloc Time

Le block time est différent du temps machine, parce que différentes machines peuvent ne pas être exactement synchronisées.
Il peut y avoir certaines déviations plus ou moins importantes qui pourraient mener à des incertitudes. Par conséquent, le block time correspond à l'heure BFT.

### Calcul

Voici l'équation permettant de calculer les récompenses :

```bash
 blockCostTime  = (block time BFT actuel) - (dernier block time BFT)
 MontantRécompenseAnnuel = MontantDeBase * taux
 RécompenseBlock = MontantRécompenseAnnuel * blockCostTime / (année)
```

La valeur de `MontantDeBase` est spécifié dans le fichier genesis.
Par défaut sa valeur est `800000000INT`(0.8 milliard `int`, `1 int` égale `1*10^18 int-atto`), et sa valeur ne sera jamais modifiée.
Supposons que `blockCostTime` soit égal à 1 second, et que `taux` soit `2.5%`, alors le montant RécompenseBloc sera de `634195839675291700 int-atto` (`0.6341958396752917 int`)

## Impact sur les utilisateurs

Le calcul de récompense est automatiquement déclenché à chaque bloc. Par conséquent, une fois qu'un nouveau bloc est produit, de nouveaux tokens seront créés en conséquence. Les utilisateurs n'ont pas accès à une quelconque interface permettant de modifier ce processus.