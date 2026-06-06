
console.log("Beginning of the code with the list of AI platforms and tools with Node JS");


/* Create Server with Node.js Native with HTTP types module */
/* This method is used to create an HTTP server, nowadays there are more advanced frameworks available */

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js World!');
});


import { listIA } from "./IA_list.js";

const saveFile = () => {
  fs.writeFile("listIA.txt", JSON.stringify(listIA, null, 2),
  (err) => {
    if (err) {
      console.error("Error writing and storing file:", err);
    } else {
      console.log("File has been saved successfully.");
    }
  })
};

const readFile = () => {
  
  fs.readFile("listIA.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        const listIAFromFile = JSON.parse(data);
        console.log("List of AI platforms and tools read from file:", listIAFromFile);
      }
  })

};

server.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`)
});


saveFile();