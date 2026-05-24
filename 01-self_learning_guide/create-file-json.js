const fs = require('fs');

const tasksJSON = [
    
    {text: 'Learn Node.js', completed: false},
    {text: 'Build a backend Server', completed: false},
    {text: 'Connect to a database', completed: false},
    {text: 'Deploy the application', completed: false}
];

fs.writeFileSync('tasks.json', JSON.stringify(tasksJSON));

console.log('tasks.json file has been created with the task list in JSON format.');