let getFlags = function (allowedFlags) {
  let options = process.argv.slice(2);
  let flags = options.filter(flag => allowedFlags.includes(flag));
  return {
    'options': options,
    'flags': flags
  }
}

module.exports = getFlags;