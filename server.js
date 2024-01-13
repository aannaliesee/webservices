const express = require('express');
const app = express();
const homeRoute = require('./routes/home');

app.get('/', homeRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});