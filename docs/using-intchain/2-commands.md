---
order: 2
---

# Commands

## Introduction

INT Chain Daemon Commands allow you to init, start, reset a node, or generate a genesis file, etc.

You can get familiar with these commands by creating a [Local Testnet](3-local-testnet.md).

## Usage

```bash
intchain -h
NAME:
   intchain - the intchain command line interface

   Copyright 2018-2020 The INT Chain Authors

USAGE:
   intchain [options] command [command options] [arguments...]
   
VERSION:
   4.0.3
   
COMMANDS:
   account           Manage accounts
   attach            Start an interactive JavaScript environment (connect to node)
   bug               opens a window to report a bug on the intchain repo
   console           Start an interactive JavaScript environment
   copydb            Create a local chain from a target chaindata folder
   create-validator  Create validator address
   dump              Dump a specific block from storage
   dumpconfig        Show configuration values
   export            Export blockchain into file
   import            Import a blockchain file
   init              Bootstrap and initialize a new genesis block
   init-intchain     Initialize INT genesis.json file. init-intchain {"1000000000000000000000000000","100000000000000000000000"}
   js                Execute the specified JavaScript files
   monitor           Monitor and visualize node metrics
   removedb          Remove blockchain and state databases
   version           Print version numbers
   help, h           Shows a list of commands or help for one command
   
INTCHAIN OPTIONS:
  --config value                     TOML configuration file
  --datadir "/Users/like/.intchain"  Data directory for the databases and keystore
  --keystore                         Directory for the keystore (default = inside the datadir)
  --nousb                            Disables monitoring for and managing USB hardware wallets
  --networkid value                  Network identifier (integer, mainnet=8550, testnet=8551) (default: 8550)
  --testnet                          Test network
  --syncmode "full"                  Blockchain sync mode ("full")
  --gcmode value                     Blockchain garbage collection mode ("full", "archive") (default: "archive")
  --intstats value                   Reporting URL of a intstats service (nodename:secret@host:port)
  --identity value                   Custom node name
  
TRANSACTION POOL OPTIONS:
  --txpool.nolocals            Disables price exemptions for locally submitted transactions
  --txpool.journal value       Disk journal for local transaction to survive node restarts (default: "transactions.rlp")
  --txpool.rejournal value     Time interval to regenerate the local transaction journal (default: 1h0m0s)
  --txpool.pricelimit value    Minimum gas price limit to enforce for acceptance into the pool (default: 1)
  --txpool.pricebump value     Price bump percentage to replace an already existing transaction (default: 10)
  --txpool.accountslots value  Minimum number of executable transaction slots guaranteed per account (default: 16000)
  --txpool.globalslots value   Maximum number of executable transaction slots for all accounts (default: 40960)
  --txpool.accountqueue value  Maximum number of non-executable transaction slots permitted per account (default: 6400)
  --txpool.globalqueue value   Maximum number of non-executable transaction slots for all accounts (default: 10240)
  --txpool.lifetime value      Maximum amount of time non-executable transaction are queued (default: 3h0m0s)
  
PERFORMANCE TUNING OPTIONS:
  --cache value           Megabytes of memory allocated to internal caching (default: 1024)
  --cache.database value  Percentage of cache memory allowance to use for database io (default: 50)
  --cache.trie value      Percentage of cache memory allowance to use for trie caching (default = 25% full mode, 50% archive mode) (default: 25)
  --cache.gc value        Percentage of cache memory allowance to use for trie pruning (default = 25% full mode, 0% archive mode) (default: 25)
  
ACCOUNT OPTIONS:
  --unlock value    Comma separated list of accounts to unlock
  --password value  Password file to use for non-interactive password input
  
API AND CONSOLE OPTIONS:
  --rpc                  Enable the HTTP-RPC server
  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")
  --rpcport value        HTTP-RPC server listening port (default: 8555)
  --rpcapi value         API's offered over the HTTP-RPC interface
  --ws                   Enable the WS-RPC server
  --wsaddr value         WS-RPC server listening interface (default: "localhost")
  --wsport value         WS-RPC server listening port (default: 8556)
  --wsapi value          API is offered over the WS-RPC interface
  --wsorigins value      Origins from which to accept websockets requests
  --ipcdisable           Disable the IPC-RPC server
  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)
  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)
  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard. (default: "localhost")
  --jspath loadScript    JavaScript root path for loadScript (default: ".")
  --exec value           Execute JavaScript statement
  --preload value        Comma separated list of JavaScript files to preload into the console
  
NETWORKING OPTIONS:
  --bootnodes value     Comma separated enode URLs for P2P discovery bootstrap (set v4+v5 instead for light servers)
  --bootnodesv4 value   Comma separated enode URLs for P2P v4 discovery bootstrap (light server, full nodes)
  --bootnodesv5 value   Comma separated enode URLs for P2P v5 discovery bootstrap (light server, light nodes)
  --port value          Network listening port (default: 8550)
  --maxpeers value      Maximum number of network peers (network disabled if set to 0) (default: 25)
  --maxpendpeers value  Maximum number of pending connection attempts (defaults used if set to 0) (default: 0)
  --nat value           NAT port mapping mechanism (any|none|upnp|pmp|extip:<IP>) (default: "any")
  --nodiscover          Disables the peer discovery mechanism (manual peer addition)
  --v5disc              Enables the experimental RLPx V5 (Topic Discovery) mechanism
  --netrestrict value   Restricts network communication to the given IP networks (CIDR masks)
  --nodekey value       P2P node key file
  --nodekeyhex value    P2P node key as hex (for testing)
  
MINER OPTIONS:
  --mine                         Enable mining
  --miner.threads value          Number of CPU threads to use for mining (default: 0)
  --miner.gasprice "1000000000"  Minimal gas price for mining a transactions
  --miner.gastarget value        Target gas floor for mined blocks (default: 80000000)
  --miner.gaslimit value         Target gas ceiling for mined blocks (default: 80000000)
  --miner.etherbase value        Public address for block mining rewards (default = first account) (default: "0")
  --extradata value              Block extra data set by the miner (default = client version)
  
GAS PRICE ORACLE OPTIONS:
  --gpoblocks value      Number of recent blocks to check for gas prices (default: 20)
  --gpopercentile value  Suggested gas price is the given percentile of a set of recent transaction gas prices (default: 60)
  
VIRTUAL MACHINE OPTIONS:
  --vmdebug  Record information useful for VM and contract debugging
  
LOGGING AND DEBUGGING OPTIONS:
  --metrics                 Enable metrics collection and reporting
  --nocompaction            Disables db compaction after import
  --verbosity value         Logging verbosity: 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)
  --vmodule value           Per-module verbosity: comma-separated list of <pattern>=<level> (e.g. eth/*=5,p2p=4)
  --backtrace value         Request a stack trace at a specific logging statement (e.g. "block.go:271")
  --debug                   Prepends log messages with call-site location (file and line number)
  --pprof                   Enable the pprof HTTP server
  --pprofaddr value         pprof HTTP server listening interface (default: "127.0.0.1")
  --pprofport value         pprof HTTP server listening port (default: 6060)
  --memprofilerate value    Turn on memory profiling with the given rate (default: 524288)
  --blockprofilerate value  Turn on block profiling with the given rate (default: 0)
  --cpuprofile value        Write CPU profile to the given file
  --trace value             Write execution trace to the given file
  
DEPRECATED OPTIONS:
  --fast              Enable fast syncing through state downloads
  --childChain value  Specify one or more child chain should be start. Ex: child-1,child-2
  --help, -h          show help
  

COPYRIGHT:
   Copyright 2018-2020 The INT Chain Authors

```
