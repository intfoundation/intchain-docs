---
order: 2
---

# Installation

## Dernière version

La dernière version INT Chain pour le Testnet est [v4.0.2](https://github.com/intfoundation/intchain)

## Installer `go`

::: tip
**Go 1.12.5+** est nécessaire pour compiler et installer le logiciel INT Chain.
:::

Installer `go` en suivant la [documentation officielle](https://golang.org/doc/install).

N'oubliez pas de définir les variables d'environnement `$GOPATH`, `$GOBIN`, et `$PATH`, comme dans l'exemple :

```bash
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export GOBIN=$GOPATH/bin" >> ~/.bashrc
echo "export PATH=$PATH:$GOBIN" >> ~/.bashrc
source ~/.bashrc
```

Assurez-vous que `go` a été installé avec succès

```bash
go version
```

## Installer `intchain`

Après l'installation de `go` vous serez en mesure de compiler et lancer `intchain`.

Clonez la branche testnet du code source de intchain, puis make intchain.

```bash
git clone --branch testnet https://github.com/intfoundation/intchain
cd intchain
make intchain
```

Si vos variables d'environnement ont été correctement définies, vous ne devriez pas obtenir d'erreur en lançant les commandes ci-dessus.
Vérifiez maintenant la version de `intchain`.

```bash
intchain version
```
