const express = require('express');
const path = require('path');
const api = require('./routes/notes.js');
const port = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/pages/404.html'))
);

app.listen(port, () => 
    console.log(`App listening at http://localhost:${port}`)
);

module.exports = app;