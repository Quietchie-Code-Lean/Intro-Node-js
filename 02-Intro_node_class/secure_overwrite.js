const fs = require('fs');

const myFileTasks = fs.readFileSync('myFileTasks.txt', 'utf8');

if (myFileTasks === "") {

    fs.writeFileSync('myFileTasks.txt', 'MyFileTasks has been overwritten securely. You didn\'t lose anything!');

}