const atbashEncription = require('../../encription/atbashEncription');
const _ = require('../../globals');

describe('Atbash Encription: ', () => {

  let text = 'This is secret. Message about "_" symbol!'.split('');

  test('should be instanse of Array', () => {
    expect(atbashEncription(text)).toBeInstanseOf(Array);
  })


})