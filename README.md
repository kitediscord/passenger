# Kite Passenger

### Kite plugin libraries for officially supported languages

The libraries are intentionally kept very small and simple to reduce maintenance burden and allow us to support as many
languages as possible.   
They mainly consist of the code generated from the protocol definitions and very basic abstractions on top of the unsafe
WASM APIs.

Currently, libraries are available for the following languages:

- Rust
- AssemblyScript (WIP)

## Usage

The libraries are currently not published on any package manager. You must use the git capabilities of your package
manager to install them.

### Rust (cargo)

In your `Cargo.toml`:

```toml
[dependencies]
kite-cable = { git = "https://github.com/kitediscord/passenger" }
```

### TypeScript (npm)

Install using [gitpkg](https://gitpkg.vercel.app/):

```
npm install 'https://gitpkg.now.sh/kitediscord/passenger/typescript?<commit>'
```

## How To Generate Code

### Install protoc

```
brew install protobuf
```

### Install protoc plugins

```
npm install -g as-proto-gen

cargo install protoc-gen-prost

cargo install protoc-gen-tonic

cargo install protoc-gen-prost-crate
```

### Install buf

```
brew install bufbuild/buf/buf
```

### Generate Code

```
buf generate
```
