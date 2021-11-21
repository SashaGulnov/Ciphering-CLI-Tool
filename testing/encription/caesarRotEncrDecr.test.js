const caesarRotEncrDecr = require('../../encription/caesarRotEncrDecr');
const globals = require('../../globals');

describe('Caesar and Rot', () => {

  let text = 'This is secret. Message about "_" symbol!';
  let caesarEncripted = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';
  let rotEncriptred = 'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!';

  test('should have proper result Caesar Encription', () => {
    expect(caesarRotEncrDecr(text.split(''), caesarShift, '1')).toBe(caesarEncripted)
  })

  test('should have proper result Caesar Decryption', () => {
    expect(caesarRotEncrDecr(caesarEncripted.split(''), caesarShift, '0')).toBe(text)
  })

  test('should have proper result Rot Encryption', () => {
    expect(caesarRotEncrDecr(text.split(''), rotShift, '1')).toBe(rotEncriptred)
  })
  
  test('should have proper result Rot Decryption', () => {
    expect(caesarRotEncrDecr(rotEncriptred.split(''), rotShift, '0')).toBe(text)
  })


});