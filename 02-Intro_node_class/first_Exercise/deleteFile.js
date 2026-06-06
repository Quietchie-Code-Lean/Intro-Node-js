


function deleteFile(fileName) {

    const fs = require('fs');

    fs.rmSync(fileName);

}

module.exports = {
    deleteFile
};