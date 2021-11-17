const getFlags = require('../get_args/getFlags');
const path = require('path');

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
      let inputPath = path.relative(process.cwd(), options[inputIndex]);
      fs.access(inputPath, fs.F_OK, (err) =>{
        if (err) {
          console.log(err)
          process.stdout.write("input file doesn't exist or you don't have access");
          process.exit(1);
        }
      });
      inputStream = fs.createReadStream(inputPath, 'utf-8');
      break;
    default: 
      process.stderr.write('The only one input option is permitted');
      process.exit(1);
  }
  return inputStream;
}

module.exports = inputValidation;