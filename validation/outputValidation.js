const getFlags = require('../get_args/getFlags');
const path = require('path');

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
      let outputIndex = options.indexOf(flags[0]) + 1;
      let outputPath = path.relative(process.cwd(), options[outputIndex]);
      fs.access(outputPath, fs.F_OK, (err) =>{
        if (err) {
          console.log(err)
          process.stdout.write("output file doesn't exist or you don't have access");
          process.exit(1);
        }
      });
      outputStream = fs.createWriteStream(outputPath, {flags: 'a'});
      break;
    default: 
      process.stderr.write('The only one output option is permitted');
      process.exit(1);
  }
  return outputStream;
}

module.exports = outputValidation;
