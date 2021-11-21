const {Transform} = require('stream');
const atbashEncription = require('../encription/atbashEncription');

class AtbashStream extends Transform {
  
  _transform(chunk, encoding, callback) {
    let plaintext = chunk.toString().split('');
    let ciphertext = atbashEncription(plaintext);
    this.push(ciphertext)
    callback();
  }
}

module.exports = AtbashStream;