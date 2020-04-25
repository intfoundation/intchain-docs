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

#### Returns
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

#### Returns
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
Returns the validator forbidden status.

#### Parameters
1. `address`: `STRING`, 32 Bytes - The validator address.

#### Returns
`Object` - Validator forbidden status
* `isForbidden`: `BOOL` - True if the validator is forbidden, otherwise false.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getValidatorStatus","params":["INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"isForbidden":false}}
```

## tdm_unForbid
Remove the forbidden validator from the forbidden list, if the validator has benn forbidden for 24 hours.

#### Parameters
1. `address`: `STRING`, 32 Bytes - The validator address.

#### Returns
`DATA`, 32 Bytes - The transaction hash, or error if the validator is not forbidden.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_unForbid","params":["INT3LYjx5V3oqWPvDBvfYLfUR9NpsrwL"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0xf461b38a5e4e4a6634b16626b317911c85db513d36aa91f67d117666eafc9a44"}
```

## tdm_editValidator
Edit validator information.

#### Parameters
1. `from`: `STRING`, 32 Bytes - The validator address.
2. `moniker`: `STRING` - The validator name.
3. `website`: `STRING` - The validator website.
4. `identity`: `STRING` - The identity signature.
5. `details`: `STRING` - The validator introduction (maximum 100 Bytes).

#### Returns
`DATA`, 32 Bytes - The transaction hash, or error if the validator is not forbidden.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_editValidator","params":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7", "INT Super Validator", "https://intchain.io", "E1573E268A818503", "INT to the moon"],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":"0x30a555d3707e03da13680228d076d996d4f32ff533d69f565dc13587333e45bb"}
```

## tdm_getConsensusPublicKey
Returns the list of BLS public keys were participating in the consensus of the block which contains the extra data.

#### Parameters
1. `extraData`: `DATA` - The block extra data.

#### Returns
`ARRAY`- List of BLS public keys.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getConsensusPublicKey","params":["0x0107746573746e65740000000000197d6d160807fe8506c1c0000000000000000001110114c43db8cb1117fee1771d7a3c3e950bad13295b440114fb1d40704356268a4897994d88cbda1d2239d35401011439c51fd961217a63e16e1b6984dad2b67904666700000000000000010114dcb198f9ad7dba9a535884c11fdf3041bbab04930000000000197d6d0001406023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f01000000000000000d0101000000000000167e00"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":[
        "0x1FB2E7FD9565133D0F5775AF99A1294755652EECB480401C9B20BDD6D3C10C9357EBB4096495A2C40FF2375D2E2FB73B6C6B2EA347674E992B99097699AB31B8739A48B5C1EA9527CFE55A7EAF1E4F7AE33D981090D26FF05C0533A444F656656D2D8C80EAEAFED5824CCB515B6A4D4B1D1966FBD561CE860D4CE8F58BB2AD44",
        "0x8EC5B0B7196B8588E42A27071748580CFC72B982053715BFEB9484C59C91E20833AAEC7243D1F521E264D4695769E7D0C8F2557FB4037129E183BEF6491538814D6AB26E4DF07D32EB1EB5E57E6A59DC06DC06E69E432106CD08AF74081EAD6D5A5BF4E34E9BAB12AEB8DADCD284FF3DC64E1760EBAE83B887C06526E6FEEFA6",
        "0x4859FFB4178DFF632BD5390E353DC067EAE3BD66F0285C988225B8E2FC93138E2DDF4FABFB6688A2D265F098224D971862C130261438E7645A0E3C1463C5546301645C3454CEA16A93AF921664CA10D91FD6962D2E8124B9511A0A294BD3658A381466D8A14DF4C0DD77501513974D4065110EA828675EC4F067B4CC0B306B63",
        "0x17FD8B2C90FE77F0A6B298F5F54FF6D707933F33737F0A3CDA2F5546D7E7E02827AAA20B7CD7A290FE7E7BF799854CB956C266601AAF9C42995A36D36143F8ED67785EF0D3E16DBA921397AF1E1054D0C6B1E8BE22BCA1FFA14AED45624741008B971B7E1689A0D2729DB2F41A0A89FB4E2BF8F7DA9EC14457B66AEBFD2BAF51",
        "0x3199D128AB26004165C0F873AB6327A15B824DAF8CB49233F89C11D365E33F156817717FBF7BDBD90C8A238FFF5A19BB3920E97907D87C9273E0B492C16B22C03F165765B5CAE8E218B3404DEBFD2F854B9D6C4C8572A9D27845D2CD40528BAC865DAA985E6EC55408F268AAB34E25AA9EEB8E4621AF4D40EE333BE7409E6B5D",
        "0x23FEB284728C346ED14BE1EF326851CD726ADC74D09C7CA42E376FFDF4136D17127C18E9FB5C9163C9B3CBE5C30AB8E6E308952628E345825DC0A56411C648A202A4E1782769746643A98BA390665BE0F6DF1E0535F72E0BEAADEDB4213F86C65FC46C647E8CCFAF08ABE816154EBB23BF66DDFE3C973F3FA2861788559530D4",
        "0x6B4B348F3257D0CE174D862FEB38D68F10580999C56CC82E2FA6CF51EC68E29A82F27A9F316570150CACA41A23A3B0D38D9EB3E13E725198CDA8214886ADA4D365F1C2ACB713A0D13E561909E3B0C278E50873F22D19AAC33B45928EAAEE240B15048E61A115094A30F6E792990B103DC8CB3B7D0A3A18B20FB0A029A7756EF9",
        "0x7987BDC25172011C739BDB98164798BB404A6DE732E090453F85585F726D115D66350656BD7DDB173960E05EB05DCFA4D57FE609856651B99E842CE0E22B201B8152B443C05C72828A069BFCDA23C7F52AD86FCA2BA8F5B234183C89B86544DD8E17424AFB37EDA2B3FB90F9235EABCF9900E9FC0307D9A98FF3436CC964DA16",
        "0x3AB852DBA5B35FA848D90BDAE5C468FAE256AD47539319CB47DE64526D18B543194D551D4A9FFFE69AC90EA896444D9168AF134B7B695DCF020CF78DA726F3016893A810628DF5FBC03F6F272E2D8BA2F4EC9E61391DCCBA240243B3C989C9787366AB2FCCDB8FF9C74AC1C2A0EF1A6387F4AAACBC4E40AD33361D8CCC8B1A10"
    ]
}
```


## tdm_decodeExtraData
Returns the extra data object.

#### Parameters
1. `extraData`: `DATA` - The block extra data.

#### Returns
`Object`- Extra data object
* `chainId`: `STRING` - The chain id.
* `height`: `QUANTITY` - Integer of block number.
* `time`: `QUANTITY` - The timestamp of consensus.
* `needToSave`: `BOOL` - Need to save.
* `needToBroadcast`: `BOOL` - Need to broadcast.
* `epochNumber`: `QUANYITY` - Integer of epoch number.
* `lastCommitHash`: `DATA` - Hash of last commit.
* `validatorsHash`: `DATA` - Hash of validator set.
* `seenCommit`: `OBJECT` - Seen commit.
* `epochBytes`: `DATA` - Epoch bytes.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_decodeExtraData","params":["0x0107746573746e65740000000000197d6d160807fe8506c1c0000000000000000001110114c43db8cb1117fee1771d7a3c3e950bad13295b440114fb1d40704356268a4897994d88cbda1d2239d35401011439c51fd961217a63e16e1b6984dad2b67904666700000000000000010114dcb198f9ad7dba9a535884c11fdf3041bbab04930000000000197d6d0001406023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f01000000000000000d0101000000000000167e00"],"id":1}' -H 'content-type: application/json;'

// Result
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "chainId":"testnet",
        "height":"0x197d6d",
        "time":"2020-04-22T11:54:18.383+08:00",
        "needToSave":false,
        "needToBroadcast":false,
        "epochNumber":"0x111",
        "lastCommitHash":"0xc43db8cb1117fee1771d7a3c3e950bad13295b44",
        "validatorsHash":"0xfb1d40704356268a4897994d88cbda1d2239d354",
        "seenCommit":{
            "blockID":{
                "hash":"0x39c51fd961217a63e16e1b6984dad2b679046667",
                "parts":{
                    "total":"0x1",
                    "hash":"0xdcb198f9ad7dba9a535884c11fdf3041bbab0493"
                }
            },
            "height":"0x197d6d",
            "round":0,
            "signAggr":"0x6023f9fa35af27fcb255be2acb264ed1b7601ee190b14972bb340c4506d34ef4771f75017dc723e7d3c970da605c4081d8b908e1dfdbd99fe8ab6bf7a4ab703f",
            "bitArray":{
                "bits":13,
                "elems":[
                    5758
                ]
            }
        },
        "epochBytes":""
    }
}
```

## tdm_getCandidateList
Returns the validator candidate list.

#### Parameters
None

#### Returns
`Object`- Validator candidate data object
* `candidateList`: `ARRAY` - The validator candidate list.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getCandidateList","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"candidateList":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"]}}
```


## tdm_getForbiddenList
Returns the forbidden validator list.

#### Parameters
None

#### Returns
`Object`- Forbidden data object
* `forbiddenList`: `ARRAY` - The forbidden validator list.

#### Example

```bash
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"tdm_getForbiddenList","params":[],"id":1}' -H 'content-type: application/json;'

// Result
{"jsonrpc":"2.0","id":1,"result":{"forbiddenList":["INT3HGH5oAByC1ni3yccBKrrLcNTZry7"]}}
```













