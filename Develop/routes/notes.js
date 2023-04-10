const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



notes.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});

notes.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const id = uuidv4();
    const newNote = req.body;
    newNote.id = id;
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

// potential delete function
notes.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    notes = notes.filter(note => note.id !== id);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = notes;