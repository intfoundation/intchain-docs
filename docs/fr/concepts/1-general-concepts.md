---
order: 1
---

# Concepts de Base

## Les Types de Nodes

### Full Node

Un full node doit vérifier toutes les transactions et blocs. Il est nécessaire à tout système basé sur la blockchain.

### Node Validateur

Le rôle des validateurs est d'éxécuter un full node, mais aussi de participer au consensus en diffusant les votes, qui contiennent les signatures cryptographiques signées par les clés privées. Les validateurs créent les nouveaux blocs de la blockchain et reçoivent des récompenses en retour. Ils doivent également participer à la gouvernance en votant lors des propositions.
Les validateurs sont pondérés en fonction des tokens qui leur sont liés.

### Node Validateur Candidat

Seuls les 100 premiers full nodes (le nombre de validateurs va être augmenté à 100) peuvent devenir des nodes validateurs, les autres seront des candidats. La situation évoluera en fonction du nombre de tokens délégués.

## Types d'Utilisateurs

### Opérateur de Validateur

Un opérateur de validateur est la seule personne qui peut manipuler les informations du Validateur ou participer à la gouvernance en tant que validateur.

### Délégateur

Les délégateurs sont des personnes possédant des INT qui ne peuvent, ou ne veulent pas éxécuter un validateur eux-mêmes. Ils peuvent déléguer leurs INT à un validateur, et obtenir en retour une part des récompenses. Ils peuvent gagner autant que les validateurs et doivent seulement payer une commission.


## Le Token INT

INT Chain possède son propre token natif connu sous le nom *INT*. Il est conçu pour assumer deux rôles sur le réseau.

- **Staking.** Similaire au token INT sur INT Chain 3.0, le token INT sera utilisé comme un token de staking pour sécuriser la blockchain IPBFT.
- **Frais de Transaction.** Le Token INT sera également utilisé pour payer les frais de toutes les transactions qui seront réalisées sur le réseau INT Chain.


## Récompenses du Staking

Le validateur et ses délégateurs peuvent partager les récompenses suivantes au prorata :

- **Récompense de bloc**

  Sur INT Chain, la probabilité d'être un node proposant un bloc est proportionnelle au nombre de tokens qui lui sont délégués.

- **Frais**

  Chaque transaction doit s'accompagner de frais pour compenser le travail du validateur. Ces frais sont payés en INT.

Toutefois, avant que les récompenses ne soient distribuées à ses délégateurs, le validateur qui a proposé le block peut prélever une commission pour avoir proposé ses services de staking.

### Formule de Calcul des Récompenses de Staking

Les formules suivantes sont basées sur les paramètres INT Chain actuels.

#### Récompenses Annuelles (sans tenir compte des frais)

- **InflationAnnuelle =** `Base * TauxInflation` (aka 0.8 billion * 2.5% = 20 million INT)
- **RécompensesValidateurs =** `(InflationAnnuelle / TokensDélégués) * (AutoDélégationValidateur +  DélégationDélégateurs * TauxCommissionValidateur)`
- **RécompenseDélégateur =** `(InflationAnnuelle / TokensDélégués) * AutoDélégationValidateur * (1 - TauxCommissionValidateur)`

#### Récompenses par Bloc

- **InflationBloc =** `InflationAnnuelle / (365*24*60*60)` (aka 0.634 INT basé sur 1s par bloc)
- **RécompenseBloc =** `(InflationBloc + FraisCollectésBloc)`
- **Commission =** `RécompenseBloc * TauxCommissionValidateur`
- **RécompenseValidateur =** `(RécompenseBloc - Commission) * (AutoDélégationValidateur / TokensDéléguésAuValidateur) + Commission`
- **RécompenseDélégateur =** `(RécompenseBloc - Commission) * (AutoDélégationValidateur / TokensDéléguésAuValidateur)`

## Responsabilités du Validateur

Les Validateurs ont deux responsabilités principales :

- **Être tout le temps en mesure de faire fonctionner la bonne version du logiciel:** Les validateurs doivent s'assurer que leurs serveurs sont toujours actifs et que leurs clés privées ne sont pas compromises.
- **Participer activement à la gouvernance:** Les validateurs se doivent d'exprimer leur vote à chaque proposition.

De plus, il est attendu de la part des validateurs d'être des membres actifs de la communauté. Ils doivent toujours être à jour concernant l'état de l'écosystème afin de pouvoir facilement s'adapter au moindre changement.

## Risques associés aux Validateurs

- **Non Disponibilité**: Il est attendu de la part des validateurs de signer leurs votes pour la création de nouveaux blocs. Si la signature d'un validateur n'apparaît pas dans les blocs durant plus de 4 heures (soit 2 epochs), ce validateur sera exclu des validateurs durant 1 jour.
- **Double Signature**: Si le protocole détecte qu'un validateur a exprimé plusieurs opinions différentes à propos du même bloc, ou voté pour différents blocs en même temps, ce validateur sera exclu des validateurs pour 1 jour.
