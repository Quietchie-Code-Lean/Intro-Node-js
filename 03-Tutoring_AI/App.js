/* App.js */
// This file is the main entry point of the application, where we set up the server and handle file operations for the list of AI platforms and tools.

/* Old way of importing modules in Node.js */
// const http = require('http'); // Importing the HTTP module to create a server
// const fs = require('fs'); // Importing the File System module to handle file operations


// Importing necessary modules
import http from 'http';
import fs from 'fs';
import { listIA } from "./IA_list.js";


const PORT = 3004;

const server = http.createServer((req,  res) => {

    res.end('Server is running and ready to handle requests!');

});

const saveFile = () => {
    fs.writeFile("listIA.txt", JSON.stringify(listIA, null, 2), (err) => {
        if (err) {
            console.error("Error writing and storing file:", err);
        } else {
            console.log("File has been saved successfully.");
        }
    });
};


const readFile = () => { 

    fs.readFile("listIA.txt", "utf-8", (err, data)=> {
        if (err){
            console.error("Error reading file:", err);
        }else {
             console.log("List of AI platforms and tools read from file:", JSON.parse(data));
        }
    });
};


readFile();


server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


saveFile();