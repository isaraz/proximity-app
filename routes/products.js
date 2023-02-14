var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET all products */
router.get('/', function(req, res, next) {
    db("select * from Products p")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });


/* GET all products that match the filter conditions */
router.get('/filter', function(req, res) {

let { country } = req.query;
let { month } = req.query;
let { productType } = req.query;

/* to get error if got no complete info */
if (!country && !month && !productType) {
  res.status(400).send("Bad request")
  return null
}

  db(`select * from Product_Season ps, Products p where ps.ProductID = p.ID and ps.CountryID = "${country}" and ps.MonthID = "${month}" and p.TypeID = "${productType}";`)
    .then(results => {
      res.send(results.data);
      console.log(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

