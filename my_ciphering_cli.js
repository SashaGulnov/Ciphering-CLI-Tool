const inputValidation = require("./validation/inputValidation");
const outputValidation = require('./validation/outputValidation');
const {pipeline} = require('stream');
const transformArray = require("./encription/transformArray");
const globals = require('./globals');


let main = function () {
  console.log('my_ciphering_cli started');
  let stream = inputValidation();
  let outstream = outputValidation();
  let transform = transformArray();

  pipeline (
    stream,
    ...transform,
    outstream,
    err => {
      if (err) console.log('Error: ', err)
    }
  )
}
main();

