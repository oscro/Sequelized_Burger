var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burgers.findAll({}).then(function(dbBurger){
    var hbsObject = {
      burger: dbBurger
    }
    res.render("index", hbsObject);
  }).catch(err, function(){
    throw err; 
  });
});

router.post("/api/burgers", function(req, res) {

  db.Bugers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(dbBurger){
    res.json(dbBurger);
  });

});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burgers.update(req.body.devoured,
    {
      where: {
       id: req.params.id
      }
    }).then(function(dbBurger){
      if(dbBurger){
        return res.status(404).end();
      } 
      res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;