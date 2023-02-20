var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET countries listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM countries;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

/* GET country by ID */
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  db(`SELECT * FROM countries WHERE id = ${id};`)
    .then(results => {
      res.send(results.data[0]);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;