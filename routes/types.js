var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET types listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM types;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
