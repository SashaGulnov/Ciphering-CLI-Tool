const getFlags = require('./getFlags');

let inputValidation = function () {
  let fs = require('fs');
  let allowedInputFlags = ['-i', '--input'];
  let {options, flags} = getFlags(allowedInputFlags);
  let inputStream;

  switch (flags.length) {
    case 0: 
      inputStream = process.stdin
      break;
    case 1: 
      let inputIndex = options.indexOf(flags[0]) + 1;
      let path = `${__dirname}\\${options[inputIndex]}`;
      fs.access(path, fs.F_OK, (err) =>{
        if (err) {
          process.stdout.write("input file doesn't exist or you don't have access");
          process.exit(1);
        }
      });
      inputStream = fs.createReadStream(path, 'utf-8');
      break;
    default: 
      process.stderr.write('The only one input option is permitted');
      process.exit(1);
  }
  return inputStream;
}

module.exports = inputValidation;