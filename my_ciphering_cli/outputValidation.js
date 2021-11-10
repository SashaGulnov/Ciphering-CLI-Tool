const getFlags = require('./getFlags');


let outputValidation = function () {
 let fs = require('fs');
  let allowedOutputFlags = ['-o', '--output'];
  let {options, flags} = getFlags(allowedOutputFlags);
  let outputStream;
  switch (flags.length) {
    case 0: 
      outputStream = process.stdout
      break;
    case 1: 
      let inputIndex = options.indexOf(flags[0]) + 1;
      outputStream = fs.createWriteStream(`${__dirname}\\${options[inputIndex]}`, {flags: 'a'});
      break;
    default: 
      process.stderr.write('The only one input option is permitted');
      process.exit(1);
  }
  return outputStream;
}

module.exports = outputValidation;
