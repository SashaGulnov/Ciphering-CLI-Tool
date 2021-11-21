const inputValidation = require('../../validation/inputValidation');
let mockExit;
  test('should be written process.stderr withiout configs', async () => {
    process.argv = ['', '', '', 'C1-C0', '', './input.txt'];
    mockExit = jest.spyOn(process, 'exit')
        .mockImplementation();
    expect(() => {
         inputValidation();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith('Error: You provided -c argument more than once');
    mockExit.mockRestore();
});