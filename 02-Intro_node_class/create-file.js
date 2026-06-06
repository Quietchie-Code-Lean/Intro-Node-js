const fs = require('fs');

const taskContent = `
        1. Learn Node.js
        2. Build a backend Server
        3. Connect to a database
        4. Deploy the application
    `;

    //Stored shounenMangas.json within the same directory as this script, read the content of the file and parse it to get an array of manga objects
const shounenMangas =  fs.readFileSync(
    './shounenMangas.json',
    'utf-8'
    );

    // Parse the JSON content to get an array of manga objects
const shounenMangasParsed = JSON.parse(shounenMangas);

    // Create a string representation of the manga list to write to the file
const mangasList = shounenMangasParsed.map(manga => {
    return `
    Name:${manga.name}
    Author:${manga.author}
    Created:${manga.creationDate}
    Description:${manga.description}
    On emission:${manga.inPublication}   
    `;
}).join('\n');


fs.writeFileSync(
    'tasks_to_delete.txt',
    taskContent
);

fs.writeFileSync(
    'shounenMangas.txt',
    mangasList
);

console.log('tasks_to_delete.txt file has been created with the task list.', taskContent);
console.log('shounenMangas.txt file has been created with the manga list.', mangasList);