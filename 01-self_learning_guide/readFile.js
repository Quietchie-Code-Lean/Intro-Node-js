const fs = require('fs');

const readTasks = fs.readFile('./Create-files/tasks.json', 'utf-8', (err, data) => {

  if (err) {

    console.error(err);

    return;
    
  }
  
  console.log(data);

});
