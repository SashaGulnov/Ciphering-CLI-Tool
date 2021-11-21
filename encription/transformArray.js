const CaesarStream = require('../streams/CaesarStream');
const RotStream = require('../streams/RotStream');
const AtbashStream = require('../streams/AtbashStream');
const configValidation = require('../validation/configValidation');


let transformArray = function () {
  let config = configValidation();
  let transformStreamArray = [];
  config.forEach(typeOfEncription => {

    if (typeOfEncription.length === 2) {
      let partsOfTypes = typeOfEncription.split('');
      if (partsOfTypes[0]==='C') {
        transformStreamArray.push(new CaesarStream(partsOfTypes[1]));
      }
      else if(partsOfTypes[0]==='R'){
        transformStreamArray.push(new RotStream(partsOfTypes[1]));
      }
    }
    else if(typeOfEncription === 'A') {
      transformStreamArray.push(new AtbashStream());
    }
  })
  return transformStreamArray;
}

module.exports = transformArray;