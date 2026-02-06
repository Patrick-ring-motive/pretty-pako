# pretty-pako

A utility for beautifully handling zlib compression and decompression in JavaScript, leveraging the power of `pako`.

## Features

- **Zlib Compression/Decompression**: Seamlessly compress and decompress data using the zlib format.
- **Pako Integration**: Built on top of the highly-optimized `pako` library.
- **Superjson Support**: Optimized for use with `superjson` for advanced serialization.
- **Bundle Ready**: Designed to be easily bundled for web and node environments.

## Installation

```bash
npm install pretty-pako
```

## Usage

```javascript
const prettyPako = require('./pretty-pako.js');

// Example data
const data = { hello: "world" };

// Compress
const compressed = prettyPako.compress(data);

// Decompress
const decompressed = prettyPako.decompress(compressed);
```

## Structure

- `pretty-pako.js`: Main logic for the utility.
- `pako.js`: Local dependency for zlib operations.
- `zfs.mjs`: ES module for file system related compression tasks.

