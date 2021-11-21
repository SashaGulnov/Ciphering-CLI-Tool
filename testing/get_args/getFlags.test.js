const getFlags = require('../../get_args/getFlags');

describe("Flags: ", () => {
  process.argv = ['', '', '-c', 'C1-C0'];
  let {options, flags} =  getFlags(['-c', '--config']);
  let configArray =  getFlags(['-c', '--config']);

  beforeEach( () => {
  })  
  
  test('should be array', () => {
    expect(options).toBeInstanceOf(Array);
    expect(flags).toBeInstanceOf(Array);
  })

  test('should be object',  () => {
    expect(configArray).toBeInstanceOf(Object);
  })

  test('should have length 1', () => {
    expect(flags.length).toBe(1);
  })
})