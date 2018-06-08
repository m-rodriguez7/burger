var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req,res) => {
    burger.all(function(data) {
        var hbsObject = { // copy from cat.js but I'm not sure what this does. 
            burgers: data
        };
        console.log(hbsOjbect);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create(req.body.name, req.body.devoured, (req,res) => {
        res.render("index");
    })
}); 
  
router.put("/", function(req, res) {
    // var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });