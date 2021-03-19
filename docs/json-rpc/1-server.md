---
order: 1
---

# RPC Server

INT Chain supports all standard web3 JSON-RPC APIs. 

JSON-RPC is provided on multiple transports. INT Chain supports JSON-RPC over HTTP,
WebSocket and Unix Domain Sockets. Transports must be enabled through
command-line flags.

INT Chain JSON-RPC APIs use a name-space system. RPC methods are grouped into
several categories depending on their purpose. All method names are composed of
the namespace, an underscore, and the actual method name within the namespace.
For example, the `int_call` method resides in the `int` namespace.

Access to RPC methods can be enabled on a per-namespace basis. Find
documentation for individual namespaces in the sidebar.

**JSON-RPC Endpoint**

| Chain Name | Chain ID |               URL              |
|:-----------|----------|--------------------------------|
| Main Chain |    1024 | http://localhost:8555 |
| Test Chain |   2048  | http://localhost:8555 |

## HTTP Server

To enable the HTTP server, use the `--rpc` flag.

    intchain --rpc

By default, intchain accepts connections from the loopback interface (127.0.0.1).
The default listening port is 8555. You can customize address and port using the
`--rpcport` and `--rpcaddr` flags.

    intchain --rpc --rpcport 8555

JSON-RPC method namespaces must be whitelisted in order to be available through
the HTTP server. An RPC error with error code `-32602` is generated if you call a
namespace that isn't whitelisted. The default whitelist allows access to the "int"
and "shh" namespaces. To enable access to other APIs like account management ("personal")
and debugging ("debug"), they must be configured via the `--rpcapi` flag. We do
not recommend enabling such APIs over HTTP, however, since access to these
methods increases the attack surface.

    intchain --rpc --rpcapi personal,int,net,web3

Since the HTTP server is reachable from any local application, additional
protection is built into the server to prevent misuse of the API from web pages.
If you want enable access to the API from a web page, you must configure the
server to accept Cross-Origin requests with the `--rpccorsdomain` flag.

Use `--rpccorsdomain '*'` to enable access from any origin.

## WebSocket Server

Configuration of the WebSocket endpoint is similar to the HTTP transport. To
enable WebSocket access, use `--ws` flag. The default WebSocket port is 8546.
The `--wsaddr`, `--wsport` and `--wsapi` flags can be used to customize settings
for the WebSocket server.

    intchain --ws --wsport 8556 --wsapi int,net,web3

Cross-Origin request protection also applies to the WebSocket server. Use the
`--wsorigins` flag to allow access to the server from web pages:

    intchain --ws --wsorigins http://myapp.example.com

As with `--rpccorsdomain`, using `--wsorigins '*'` allows access from any origin.

## IPC Server

JSON-RPC APIs are also provided on a UNIX domain socket. This server is enabled
by default and has access to all JSON-RPC namespaces.

The listening socket is placed into the data directory by default. On Linux and macOS,
the default location of the intchain socket is

    ~/.intchain/intchain/intchain.ipc

On Windows, IPC is provided via named pipes. The default location of the intchain pipe is:

    \\.\pipe\intchain.ipc
    
You can configure the location of the socket using the `--ipcpath` flag. IPC can
be disabled using the `--ipcdisable` flag.
