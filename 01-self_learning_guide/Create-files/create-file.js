const fs = require('fs');

const taskContent = `
        1. Learn Node.js
        2. Build a backend Server
        3. Connect to a database
        4. Deploy the application
    `;

fs.writeFileSync('tasks.txt', taskContent);

console.log('tasks.txt file has been created with the task list.');