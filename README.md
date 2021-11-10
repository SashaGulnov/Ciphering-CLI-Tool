# Ciphering-CLI-Tool
### CLI tool that encodes and decodes a text by 3 substitution ciphers.
To use my_ciphering_cli use command <br>
```node my_ciphering_cli -c (ciphers types) -i inputFile.txt -o outputFile.txt``` 
in your terminal<br>

+ -i, --input:<br>
  you can write a path to input file where a text contains, and if you don't the tool will process a text you will write to the command line;<br>
+ -o, --output:<br>
  you can write a path to output file that will contain a ciphertext, and if you don't the tool will write ciphertext to the command line below the text you have written;<br>
+ -c, --config:<br>
  required option that contains ciphers you are going to use to encode the text. Supported ciphers are: Caesar, Rot-8 and Atbash. Config option should be written one by one with '-' separator. While Caesar 'C' and Rot-8 'R' has additional flags '1' for encoding and '0' for decoding, Atbash cipher doesn't. <br><br>
  
### Example of valid command:<br>
  ```node my_ciphering_cli -c C1-R0-A-C0-R1-A -i input.txt -o output.txt```
  
###  Examples of invalid commands:<br>
  ```node my_ciphering_cli -i input.txt -o output.txt``` <br>
  ```node my_ciphering_cli -c C1-R0- -i input.txt -o output.txt```

