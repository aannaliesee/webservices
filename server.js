const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/annaliese', (req, res) => {
    res.send('Annaliese Mits');
});


const port = 3000; 

app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));