const database = require("../db/database");

module.exports = function(app) {

// GET `/api/notes` -
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

// POST `/api/notes`Should receive a new note to save on the request body, 
app.post('/api/notes', function (req, res) {
    res.send('POST request to the homepage')
  })

//DELETE `/api/notes/:id` 
app.delete('/api/notes/:id', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
};
