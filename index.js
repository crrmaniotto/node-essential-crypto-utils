const crypto = require('crypto');
const fs = require('fs');

class NodeEssentialCryptoUtils {
  static encryptText(text, secret, algorithm = 'aes-256-cbc') {
    const cipher = crypto.createCipher(algorithm, secret);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  static decryptText(encryptedText, secret, algorithm = 'aes-256-cbc') {
    const decipher = crypto.createDecipher(algorithm, secret);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  static async hashFile(filePath, algorithm = 'sha256') {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash(algorithm);
      const stream = fs.createReadStream(filePath);
      stream.on('error', err => reject(err));
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
    });
  }
}

module.exports = NodeEssentialCryptoUtils;
