const notes = require('express').Router();
const fs = require('fs');



notes.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});

notes.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = req.body;
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

module.exports = notes;