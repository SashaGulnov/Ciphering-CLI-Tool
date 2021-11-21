global.alphabetUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

global.alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

if (alphabetUppercase.length===alphabetLowercase.length) {
  global.alphabetLength = alphabetUppercase.length
}

global.lowReversed = alphabetLowercase.slice().reverse();
global.upReversed = alphabetUppercase.slice().reverse();

global.caesarShift = 1;
global.rotShift = 8;
