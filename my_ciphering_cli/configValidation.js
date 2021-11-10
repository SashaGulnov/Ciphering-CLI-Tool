const getConfig = require('./getConfig');

let configValidation = function() {
  let config = getConfig();
  if (!typeof(config) === 'string') {
      process.stderr.write('invalid config');
      process.exit(1);
  }
  let allowedConfigs = ['C0', 'C1', 'R0', 'R1', 'A'];
  let arrayOfCiphers = config.split('-');
  arrayOfCiphers.forEach(type => {
    if (!allowedConfigs.includes(type)){
      process.stderr.write('invalid config');
      process.exit(1);
    }
  })
  return arrayOfCiphers;
}

module.exports = configValidation;