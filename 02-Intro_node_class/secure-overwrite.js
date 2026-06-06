const fs = require('fs');

const shounenMangas = fs.readFileSync('shounenMangas.txt', 'utf8');

if (shounenMangas === "") {

    fs.writeFileSync('shounenMangas.txt', 'Shounen Mangas has been overwritten securely. You didn\'t lose anything!');

}