let atbashEncription = function (plaintext) {
  let ciphertext = [];
  plaintext.forEach(element => {
    if (alphabetUppercase.includes(element)){
      element = upReversed[alphabetUppercase.indexOf(element)];
    }
    else if (alphabetLowercase.includes(element)) {
      element = lowReversed[alphabetLowercase.indexOf(element)];
    }
    ciphertext.push(element);
  });
  return ciphertext.join('');
}

module.exports = atbashEncription;