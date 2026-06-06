

const {readFile, createFile} = require('./functions.js');
const { deleteFile } = require('./deleteFile.js');


/* createFile('example.txt', 'Hello, World from Node.js!');
readFile('example.txt'); */

deleteFile('example.txt');