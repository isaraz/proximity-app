var express = require('express');
var router = express.Router();
const db = require("../model/database");

/* GET products listing. */
router.get('/', function(req, res, next) {
    res.send('/products')
  db("SELECT * FROM products;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});




module.exports = router;
