const express = require('express');
// const database = require("database")

module.exports = function(app) {

// GET `/api/notes` - Should read the `db.json` file 
// and return all saved notes as JSON.
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

// POST `/api/notes`Should receive a new note to save on the request body, add it to the `db.json` file, 
// and then return the new note to the client.
app.post('/api/notes', function (req, res) {
    res.send('POST request to the homepage')
  })

//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a uniqu\e `id` when it's saved. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, 
// remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete('/api/notes/:id', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
};
