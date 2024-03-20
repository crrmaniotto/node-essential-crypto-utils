```
# node-essential-crypto-utils

A Node.js library providing essential cryptographic utilities for text encryption, decryption, and file hashing.

## Installation

```bash
npm install node-essential-crypto-utils
```

## Usage

```javascript
const { NodeEssentialCryptoUtils } = require('node-essential-crypto-utils');

// Encrypt text
const encryptedText = NodeEssentialCryptoUtils.encryptText('mySecretText', 'mySecretKey');

// Decrypt text
const decryptedText = NodeEssentialCryptoUtils.decryptText(encryptedText, 'mySecretKey');

// Hash a file
NodeEssentialCryptoUtils.hashFile('path/to/file').then(hash => {
  console.log('File hash:', hash);
}).catch(error => {
  console.error('Error:', error);
});
```

## API

### NodeEssentialCryptoUtils

#### `encryptText(text, secret, algorithm)`

Encrypts the provided text using the specified secret and algorithm. Returns the encrypted text.

- `text`: The text to encrypt.
- `secret`: The secret key used for encryption.
- `algorithm` (optional): The encryption algorithm to use. Defaults to 'aes-256-cbc'.

#### `decryptText(encryptedText, secret, algorithm)`

Decrypts the provided encrypted text using the specified secret and algorithm. Returns the decrypted text.

- `encryptedText`: The text to decrypt.
- `secret`: The secret key used for decryption.
- `algorithm` (optional): The decryption algorithm to use. Defaults to 'aes-256-cbc'.

#### `hashFile(filePath, algorithm)`

Hashes the file located at the specified file path using the specified algorithm. Returns a Promise that resolves with the computed hash value.

- `filePath`: The path to the file to hash.
- `algorithm` (optional): The hashing algorithm to use. Defaults to 'sha256'.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
