



function createFile(fileName, content) {

    const fs = require('fs');

    fs.writeFileSync(fileName, content);
    console.log(`${fileName} has been created successfully with the provided content.`);
    
}



function readFile(fileName) {

    const fs = require('fs');

    const content = fs.readFileSync(fileName, 'utf-8');
    console.log(`Content of ${fileName}:`, content);

}


module.exports = {
    createFile,
    readFile,
};