const getConfig = require('../../get_args/getConfig');

describe('Config: ', () => {

  let mockExit;
   
  test('should have Exit_code = 1', () => {
    process.argv = ['', '', '', 'C1-C0'];
    mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        getConfig();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});

  test('should be written process.stderr withiout configs', () => {
    process.argv = ['', '', '', 'C1-C0'];
    mockExit = jest.spyOn(process.stderr, 'write')
        .mockImplementation(() => { throw new Error('process.stderr'); });
    expect(() => {
        getConfig();
    }).toThrow();
    expect(mockExit).toBeTruthy();
    mockExit.mockRestore();
});

  test('should process.stderr with Error: You provided -c argument more than once',  () => {
    process.argv = ['', '', '-c', 'C1-C0', '-c'];
    mockExit = jest.spyOn(process.stderr, 'write')
        .mockImplementation(() => { throw new Error('process.stderr'); });
    expect(() => {
        getConfig();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith('Error: You provided -c argument more than once');
    mockExit.mockRestore();
});

  test('should have Exit_code = 1', () => {
    process.argv = ['', '', '-c', 'C1-C0', '-c'];
    mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        getConfig();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});

  test('should return array config', () => {
    process.argv = ['', '', '-c', 'C1-C0'];
    expect(getConfig()).toBe('C1-C0');

});

});