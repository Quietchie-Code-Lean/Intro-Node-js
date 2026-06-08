const fs = require('fs');

const tasksXLS = [
    {text: 'Node.js', completed: false},
    {text: 'Express.js', completed: false},
    {text: 'MongoDB', completed: false},
    {text: 'REST APIs', completed: false}
];

fs.writeFileSync('tasksList.xls', JSON.stringify(tasksXLS));

console.log('tasksList.xls file has been created successfully with node.js');