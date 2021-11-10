const {Transform} = require('stream');
const caesarRotEncrDecr = require('./caesarRotEncrDecr');

class RotStream extends Transform {
  constructor(encrDecrFlag) {
    super();
    this.encrDecrFlag = encrDecrFlag;
  }
  
  _transform(chunk, encoding, callback) {
    let plaintext = chunk.toString().split('');
    let shiftNum = rotShift; 
    let ciphertext = caesarRotEncrDecr(plaintext, shiftNum, this.encrDecrFlag);
    this.push(ciphertext)
    callback();
  }
}

module.exports = RotStream;