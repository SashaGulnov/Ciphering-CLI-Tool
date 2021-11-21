const configValidation = require('../../validation/configValidation');

let mockExit;
  test('should be process.exit = 1', async () => {
    process.argv = ['', '', '', 'C1-C0', '', './input.txt'];
    mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
      configValidation();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});
  
  test('should be Array', () => {
    process.argv = ['', '', '-c', 'C1-C1', '', './input.txt'];
    
    expect(configValidation()).toBeInstanceOf(Array);
});