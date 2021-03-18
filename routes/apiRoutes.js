// IMPORT ORM 
const orm = require("../db/orm")
const router = require("express").Router();

router.get("/notes"), function(req, res) {
  console.log("here!");
  orm.getNotes()
  .then(results => {
    console.log(results);
    res.json(results);
  })      
  .catch(function(err){
    console.log(err)
  })
}

module.exports = router;