const getFlags = require('./getFlags');

let getConfig = function() {
  let allowedConfigFlags = ['-c', '--config'];
  let {options, flags} = getFlags(allowedConfigFlags);
  switch (flags.length) {
    case 0:
      process.stderr.write('Config should be written');
      process.exit(1);
    case 1:
      let configIndex = options.indexOf(flags[0]) + 1;
      return options[configIndex];
    default :
      process.stderr.write('The only one config is permitted');
      process.exit(1);
  }
}

module.exports = getConfig;