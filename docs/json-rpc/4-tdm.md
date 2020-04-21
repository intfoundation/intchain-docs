---
order: 4
---

# Namespace `tdm`

## tdm_getCurrentEpochNumber
Returns the current epoch number.

#### Parameters
None

#### Returns
`EpochNumber`, `QUANTITY` - Integer of current epoch number.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getCurrentEpochNumber","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xd8"}
```

## tdm_getEpoch
Returns the epoch detail. 

#### Parameters
1. `epochNumber`, `QUANTITY` - The epoch number.

#### Returns
`Object` - An epoch object
* `number`: `QUANTITY` - Integer of the epoch number.
* `rewardPerBlock`: `QUANTITY` - Integer of the block reward.
* `startBlock`: `QUANTITY` - The start block number of the epoch.
* `endBlock`: `QUANTITY` - The end block number of the epoch.
* `startTime`: `QUANTITY` - The start time of the epoch.
* `endTime`: `QUANTITY` - The end time of the epoch.
* `validators`: `ARRAY` - List of current epoch validators.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getEpoch","params":["0xd8"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "number":"0xd8",
        "rewardPerBlock":"0xa628b52a2dfef63",
        "startBlock":"0x1426a9",
        "endBlock":"0x143e7e",
        "startTime":"2020-04-17T17:26:09.416+08:00",
        "endTime":"2020-04-17T19:26:21.475+08:00",
        "validators":[
            {
                "address":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
                "publicKey":"0x2F08524FC0D366716CE915C084B51F4D08018671CC8CA4C70A4F95C84E1920AC8BBB0CACF9E7EEBE6BDFBD836650D6EF257FBC6F713003BB116F0800BD04B1FA3140746CE6551F9F9F482766FA1ED327AE05A43577D1DE4558E3502F0F0DA18B2BDE90FA204DEE1ECA1F7CBD88E7F9FC6AE7A6C68F9F2921C6E27377340E30B5",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            },
            {
                "address":"INT3FLSfrYVyxeeJZBvoNcJiMzAbbc2i",
                "publicKey":"0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            },
            ...
            {
                "address":"INT385MNAM44dwVJ4GUaqUbUTZqrMdHZ",
                "publicKey":"0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10",
                "votingPower":"0x315dbb485ed05b7400000",
                "remainEpoch":"0x0"
            }
        ]
    }
}
```

## tdm_getNextEpochVote
Returns the next epoch votes, empty if the next epoch vote is nil.

#### Parameters
None

#### Returns // TODO add no empty votes
`Object` - Next epoch votes object
* `voteForEpoch`: 'QUANTITY' - Integer of next epoch number.
* `startBlock`: `QUANTITY` - The start block number of next epoch.
* `endBlock`: `QUANTITY` - The end block number of next epoch.
* `votes`: `ARRAY` - The votes list of next epoch.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getNextEpochVote","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"voteForEpoch":"0x107","startBlock":"0x188d62","endBlock":"0x18a540","votes":[]}}
```

## tdm_getNextEpochValidators
Returns the next epoch votes, empty if the next epoch vote is nil.

#### Parameters
None

#### Returns // TODO add no empty votes
`Validators` - The validator list of next epoch.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getNextEpochValidators","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        {
            "address":"INT3DAT2JhRUJpSVC64uyCXqRM9UcsYU",
            "publicKey":"0x2F08524FC0D366716CE915C084B51F4D08018671CC8CA4C70A4F95C84E1920AC8BBB0CACF9E7EEBE6BDFBD836650D6EF257FBC6F713003BB116F0800BD04B1FA3140746CE6551F9F9F482766FA1ED327AE05A43577D1DE4558E3502F0F0DA18B2BDE90FA204DEE1ECA1F7CBD88E7F9FC6AE7A6C68F9F2921C6E27377340E30B5",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        },
        {
            "address":"INT3FLSfrYVyxeeJZBvoNcJiMzAbbc2i",
            "publicKey":"0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        },
        ...
        {
            "address":"INT385MNAM44dwVJ4GUaqUbUTZqrMdHZ",
            "publicKey":"0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10",
            "votingPower":"0x315dbb485ed05b7400000",
            "remainEpoch":"0x0"
        }
    ]
}
```

## tdm_generatePrivateValidator
Returns the validator object which contains the address, conseusus public key.

#### Parameters
None

#### Returns
`Object` - The validator object
* `address`: `STRING`, 32 Bytes - The private validator address.
* `consensus_pub_key`: `DATA`, 128 Bytes - The BLS public key.
* `consensus_priv_key`: `DATA`, 32 Bytes - The BLS private key.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_generatePrivateValidator","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "address":"INT3HGH5oAByC1ni3yccBKrrLcNTZry7",
        "consensus_pub_key":"4DA0B409FD27FFA96ABC02A10374BDD2E5B1A110CE407D4392027FE12FD5A3F9037E71BF53F540EE67BE08F9CF0F90C27A9926E0F572FF50ACBD0B6DFCC17CC43195F5DF62874AF5FC9E40A43258627458D9BF68309CB65B53249A15E23C0342541B0C31CC8161DD1FB45C9715D35A6FE8B7A785E97F7292333C76FE7DBC25D1",
        "consensus_priv_key":"E3C3841A85FAF083B5FB91DED748E477D5B790737257201EC6080AE418FD4485"
    }
}
```

## tdm_getValidatorStatus


## tdm_unForbid


## tdm_editValidator


## tdm_getConsensusPublicKey


## tdm_decodeExtraData


## tdm_getCandidateList


## tdm_getForbiddenList
