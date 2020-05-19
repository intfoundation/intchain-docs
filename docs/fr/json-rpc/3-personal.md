---
order: 3
---

# Namespace `personal`

## personal_importRawKey

Importe la clé privée décryptée donnée (chaîne hexa) dans le keystore, et l'encrypte avec le mot de passe.

#### Paramètres
1. `privateKey`: `DATA`, 32 Bytes - Chaîne hexa de la clé privée décryptée.
2. `passphrase`: `String` - Chaîne à partir de laquelle la clé privée est encryptée.

#### Valeur de retour
`String`, 32 Bytes - Renvoie l'adresse du nouveau compte.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_importRawKey","params":["85ce6cc31ab08feb27bb1e4054f07e80a66f07d590b9ac1bc4d0aeb7d6bccd4e", "intchain"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":"INT3NvbWet4xFAW5Xrk2EaUcc3nKBjsf"}
```

## personal_listAccounts

Retourne toutes les adresses de compte intchain associées à toutes les clés du keystore.

#### Paramètres
Aucun

#### Valeur de retour
`Array` - Renvoie un tableau contenant les adresses de comptes.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_listAccounts","params":[],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":["INT3CpFuk2cJ1te9WZV1w8Y3wkQCcA5Z","INT3MMzkukxhiPwDLqkexCxzuYief4Js","INT39iewq2jAyREvwqAZX4Wig5GVmSsc"]}
```

## personal_lockAccount

Removes the private key with given address from memory.
The account can no longer be used to send transactions.

#### Paramètres
1. `from`: `String`, 32 Bytes - The address to lock.

#### Valeur de retour
`Bool` - Returns true or error.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_lockAccount","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":true}
```

## personal_newAccount

Generates a new private key and stores it in the key store directory.
The key file is encrypted with the given passphrase.
Returns the address of the new account.

#### Paramètres
1. `passphrase`: `String | Number` - The passphrase to encrypt the key file.

#### Valeur de retour
`String`, 32 Bytes - Returns the address of the new account.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["foo"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":"INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs"}
```

## personal_unlockAccount

Decrypts the key with the given address from the key store.

Both passphrase and unlock duration are optional when using the JavaScript console.
If the passphrase is not supplied as an argument, the console will prompt for
the passphrase interactively.

The unencrypted key will be held in memory until the unlock duration expires.
If the unlock duration defaults to 300 seconds. An explicit duration
of zero seconds unlocks the key until `intchain` exits.

The account can be used with `int_sign` and `int_sendTransaction` while it is unlocked.

#### Paramètres
1. `address`: `String`, 32 Bytes - The address to decrypt the key with.
2. `passphrase`: `String | Number` - The passphrase to decrypt the key file.
3. `duration`: `Number` - (optional, default: 300 s) The duration of the unencrypted key will be held in memory.

#### Valeur de retour
`Bool` - Returns true or false.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "foo", 3600],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":true}
```


## personal_sendTransaction

Validate the given passphrase and submit transaction.

If the passphrase can be used to decrypt the private key belongging to `tx.from` the transaction is verified, signed and send onto the network. The account is not unlocked globally in the node and cannot be used in other RPC calls.

#### Paramètres
The transaction is the same argument as for `int_sendTransaction` and contains the `from` address.

#### Valeur de retour
`DATA`, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from": "INT3HGH5oAByC1ni3yccBKrrLcNTZry7","to": "INT3LFyQS6kbBpsjdx2cB4Qb9czmD4zs", "value": "0xde0b6b3a7640000"}, "foo"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":"0x64c0380cc09a71f5b0357c588258b990fc55d51d900ec4d175daab0b5922c035"}
```

## personal_sign

The sign method calculates an INT Chain specific signature with:
`sign(keccack256("\x19INT Chain Signed Message:\n" + len(message) + message)))`.

By adding a prefix to the message makes the calculated signature recognisable as an INT Chain specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

See ecRecover to verify the signature.

#### Paramètres
1. `message`: `Data` - The message to sign with.
2. `account`: `String`, 32 Bytes - The address to decrypt the key with.
3. `password`: `String | Number` - The passphrase to decrypt the key file.

#### Valeur de retour
`Signature`, 65 Bytes - Returns the specific signature of given message.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_sign","params":["0x696e74636861696e","INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "foo"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":"0xe002de1607932aead14e85c9a7be83744ccc82197e8d1a73757a370c2096858e0258de3eb02d57ed49bc2a7c2e15e329d4a2db22e365c16a384e8f78c149521c1b"}
```

## personal_ecRecover

`ecRecover` returns the address associated with the private key that was used to calculate the signature in `personal_sign`. 

#### Paramètres
1. `message`: `Data` - The message was signed in `personal_sign`.
2. `signature`: `Data`, 65 Bytes - The signature was calculated in `personal_sing`.

#### Valeur de retour
`Address`, `String`, 32 Bytes - The address associated with the private key that was used to calculate the signature in `personal_sign`.

#### Exemple

```bash
// Requête
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_ecRecover","params":["0x696e74636861696e","0xe002de1607932aead14e85c9a7be83744ccc82197e8d1a73757a370c2096858e0258de3eb02d57ed49bc2a7c2e15e329d4a2db22e365c16a384e8f78c149521c1b"],"id":1}' -H 'content-type: application/json;'

// Résultat
{"jsonrpc":"2.0","id":1,"result":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7"}
```
