---
order: 2
---

# Install

## Latest Version

The latest INT Chain version for Testnet is [v4.0.8](https://github.com/intfoundation/intchain)

## Install `go`

::: tip
**Go 1.14+** is required for building and installing the INT Chain software.
:::

Install `go` by following the [official docs](https://golang.org/doc/install).

Remember to set your `$GOPATH`, `$GOBIN`, and `$PATH` environment variables, for example:

```bash
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export GOBIN=$GOPATH/bin" >> ~/.bashrc
echo "export PATH=$PATH:$GOBIN" >> ~/.bashrc
source ~/.bashrc
```

Verify that `go` has been installed successfully

```bash
go version
```

## Install `intchain`

After setting up `go` correctly, you should be able to compile and run `intchain`.

Clone the source code of intchain and checkout the testnet branch, then make intchain.

```bash
git clone --branch testnet https://github.com/intfoundation/intchain
cd intchain
make intchain
```

If your environment variables have set up correctly, you should not get any errors by running the above commands.
Now check your `intchain` version.

```bash
intchain version
```
