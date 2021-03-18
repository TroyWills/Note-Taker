// IMPORT ORM 
const orm = require("../db/orm")
const router = require("express").Router();

router.get("/notes", function (req, res) {
  orm.getNotes()
    .then(results => {
      res.json(results);
    })
    .catch(function (err) {
      console.log(err)
    })
});

router.post("/notes", function (req, res) {
  const {title, text} = req.body;
  orm.createNote(title, text)
    .then(results => {
      console.log(results)
      res.json(results);
    })
    .catch(function (err) {
      console.log(err)
    })
});

module.exports = router;