let caesarRotEncrDecr = function (text, shiftNum, encrDecrFlag) {
  let modifiedText = [];
  if(encrDecrFlag === '1'){
      text.forEach(element => {
      if (alphabetUppercase.includes(element)){
        element = alphabetUppercase.slice((alphabetUppercase.indexOf(element) + shiftNum)%alphabetLength).shift();
      }
      else if (alphabetLowercase.includes(element)) {
        element = alphabetLowercase.slice((alphabetLowercase.indexOf(element) + shiftNum)%alphabetLength).shift();
      }
    modifiedText.push(element);
  });
  }
  else if (encrDecrFlag === '0') {
  text.forEach(element => {
    if (alphabetUppercase.includes(element)){
      element = alphabetUppercase.slice((alphabetUppercase.indexOf(element) - shiftNum)%alphabetLength).shift();
    }
    else if (alphabetLowercase.includes(element)) {
      element = alphabetLowercase.slice((alphabetLowercase.indexOf(element) - shiftNum)%alphabetLength).shift();
    }
    modifiedText.push(element);
  });
}
  return modifiedText.join('');
}

module.exports = caesarRotEncrDecr;