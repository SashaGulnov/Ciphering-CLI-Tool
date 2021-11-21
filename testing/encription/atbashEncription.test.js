const atbashEncription = require('../../encription/atbashEncription');
const _ = require('../../globals');

describe('Atbash Encription: ', () => {

  let text = 'This is secret. Message about "_" symbol!';
  let result = 'Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!';

  test('should have proper result', () => {
    expect(atbashEncription(text.split(''))).toBe(result);
  })
  
  test('should have proper reversed result', () => {
    expect(atbashEncription(result.split(''))).toBe(text);
  })

  test('should be falsy', () => {
    expect(atbashEncription(''.split(''))).toBeFalsy();
  })




})