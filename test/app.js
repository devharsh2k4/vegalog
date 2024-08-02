const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT

const vegalog = require('./../lib/vegalog');

const app = express();

app.use(vegalog.vegalog);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});


