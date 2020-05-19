---
order: 1
---

# Serveur RPC

INT Chain prend en charge toutes les API JSON-RPC Web3 standard.

JSON-RPC est fourni sur plusieurs protocoles. INT Chain prend en charge JSON-RPC sur HTTP, WebSockets et Unix. Les protocoles doivent être activés grâce aux flags en ligne de commande.

Les API INT Chain JSON-RPC utilisent un système de namespace. Les méthodes RPC sont regroupées en plusieurs catégories en fonction de leur utilité. Tous les noms de méthodes sont composés du namespace, d'un underscore et du nom de la méthode dans le namespace.
Par exemple, la méthode `int_call` réside dans le namespace `int`.

L'accès aux méthodes RPC peut être activé sur la base des namespaces. Chercher dans la 
documentation pour les namespaces individuels dans la barre latérale.

**JSON-RPC Endpoint**

| Chain Name | Chain ID |               URL              |
|:-----------|----------|--------------------------------|
| Main Chain | intchain | http://localhost:8555/intchain |
| Test Chain | testnet  | http://localhost:8555/testnet  |

## HTTP Server

Pour activer le serveur HTTP, utilisez le flag `--rpc`.

    intchain --rpc

Par défaut, intchain accepte les connexions depuis l'interface loopback (127.0.0.1). Le port d'écoute par défaut est 8555. Vous pouvez personnaliser l'adresse et le port en utilisant les flags `--rpcport` et `--rpcaddr`.

    intchain --rpc --rpcport 8555

Les namespaces des méthodes de JSON-RPC doivent être whitelistées pour pouvoir être disponibles via le serveur HTTP. Une erreur RPC avec le code d'erreur `-32602` est généré si vous appelez un namespace qui n'est pas whitelisté. La whitelist par défaut permet l'accès aux namespaces "int" et "shh". Pour permettre l'accès à d'autres APIs comme la gestion de compte ("personal") et le débug ("debug"), elles doivent être configurées via le flag `--rpcapi`. Toutefois, nous ne recommandons pas d'activer ces API via HTTP, car l'accès à ces méthodes augmente la surface d'attaque.

    intchain --rpc --rpcapi personal,int,net,web3

Étant donné que le serveur HTTP est accessible à partir de n'importe quelle application locale, une protection est intégrée au serveur pour éviter toute utilisation abusive de l'API à partir des pages Web.
Si vous souhaitez activer l'accès à l'API à partir d'une page Web, vous devez configurer le serveur pour accepter les requêtes Cross-Origin avec le flag `--rpccorsdomain`.

Utilisez `--rpccorsdomain '*'` pour autoriser l'accès depuis n'importe quelle origine.

## Serveur WebSocket

La configuration du point d'accès WebSocket est similaire au protocole HTTP. Pour activer l'accès WebSocket, utilisez le flag `--ws`. Le port WebSocket par défaut est 8546. Les flags `--wsaddr`, `--wsport` et `--wsapi` peuvent être utilisés pour personnaliser les paramètres du serveur WebSocket.

    intchain --ws --wsport 8556 --wsapi int,net,web3

La protection face aux requêtes Cross-Origin s'applique également au serveur WebSocket. Utilisez le flag `--wsorigins` pour permettre l'accès au serveur depuis les pages web :

    intchain --ws --wsorigins http://myapp.example.com

Comme pour `--rpccorsdomain`, utiliser `--wsorigins '*'` permet l'accès depuis n'importe quelle origine.

## Serveur IPC

Les API JSON-RPC sont également fournies sur un socket de domaine UNIX. Ce serveur est activé par défaut et a accès à tous les namespaces JSON-RPC.

Le socket d'écoute est placé par défaut dans le répertoire de données. Sous Linux et macOS, l'emplacement par défaut du socket intchain est

    ~/.intchain/intchain/intchain.ipc

Sur Windows, IPC est fourni via des named pipes. L'emplacement par défaut du pipe intchain est :

    \\.\pipe\intchain.ipc
    
Vous pouvez configurer la localisation du socket en utilisant le flag `--ipcpath`. IPC peut être désactivé en utilisant le flag `--ipcdisable`.
