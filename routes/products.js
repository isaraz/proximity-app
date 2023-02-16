var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET all products */
router.get('/', function(req, res, next) {
    db("select * from Product_Season ps, Products p")
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

  db(`select * from Product_Season ps, Products p where ps.ProductID = p.ID and ps.CountryID = "${country}" and ps.MonthID = "${month}" and p.TypeID = "${productType}" and ps.SeasonID = 1;`)
    .then(results => {
      res.send(results.data);
      console.log(results.data);
    })
    .catch(err => res.status(500).send(err));
});

/* GET one product by id that matches the filter conditions */
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  let { country } = req.query;
  let { month } = req.query;
  if (country && month) {
    try {
      const response = await db(`SELECT * FROM Product_Season ps, Products p where p.ID = ${id} and ps.CountryID = "${country}" and ps.MonthID = "${month}" and ps.SeasonID = 1;`);
      const item = response.data[0];
  
      if (!item) {
        res.status(404).send("Not found");
        return;
      }
      res.send(response.data[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  if (country && !month) {
    try {
      const response = await db(`SELECT * FROM Product_Season ps, Products p where p.ID = ${id} and ps.CountryID = "${country}" and ps.SeasonID = 1;`);
      const item = response.data;
  
      if (!item) {
        res.status(404).send("Not found");
        return;
      }
      res.send(response.data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
});

module.exports = router;

