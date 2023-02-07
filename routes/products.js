var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET products listing */
router.get('/', function(req, res, next) {

let country = req.query.country;
let month = req.query.month;
let productType = req.query.type;

/* to get error if got no complete info */
if (!country && !month && !productType) {
  res.status(400).send("Bad request")
  return null
}



  db("select * from Product_Season ps, Products p where ps.ProductID = p.ID and ps.CountryID = " + country + " and ps.MonthID = " + month + " and p.TypeID = " + productType + ";")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

