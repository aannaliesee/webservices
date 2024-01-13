const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const name = "Annaliese Mits"; // Replace with the name you want to display
    res.send(`Hello, ${name}!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});