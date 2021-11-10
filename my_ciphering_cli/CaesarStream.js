const {Transform} = require('stream');
const caesarRotEncrDecr = require('./caesarRotEncrDecr');

class CaesarStream extends Transform {
  constructor(encrDecrFlag) {
    super();
    this.encrDecrFlag = encrDecrFlag;
  }
  
  _transform(chunk, encoding, callback) {
    let plaintext = chunk.toString().split('');
    let shiftNum = caesarShift; 
    let ciphertext = caesarRotEncrDecr(plaintext, shiftNum, this.encrDecrFlag);
    this.push(ciphertext)
    callback();
  }
}

module.exports = CaesarStream;