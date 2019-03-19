const express = require("express");
const router = express.Router();
var getData = require('./data').getData;
var pushData = require('./data').pushData;

//TODO: for now, we're assuming the data comes in with a size field
router.get("/hello", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get('/', function(req, res){
   res.json(getData());
});

router.post('/data', function(req, res){
   //Check if all fields are provided and are valid:
   //TODO: double check regex
   //TODO add body parser
   
   var xValid = req.body.x.toString().match(/^[0-9]{1,}$/g) ||
                req.body.x.toString().match(/^[0-9]{1,}\.[0-9]{1,}$/g);
   var yValid = req.body.y.toString().match(/^[0-9]{1,}$/g) ||
                req.body.y.toString().match(/^[0-9]{1,}\.[0-9]{1,}$/g);
   var sizeValid = req.body.size.toString().match(/^[0-9]{1,2}$/g);


   if(!xValid || !yValid || !sizeValid){
      res.status(400);
      res.json({message: "Bad Request: missing or invalid parameter"});
   } else {
      pushData({
         x: req.body.x,
         y: req.body.y,
         size: req.body.size
      });
      res.json({message: "New datapoint added."});
   }
});

module.exports = router;
