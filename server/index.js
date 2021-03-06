const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
var getData = require('./data').getData;
var setData = require('./data').setData;
var setRobotPosition = require('./data').setRobotPosition;

router.use(bodyParser.urlencoded({limit: '50mb', extended: false, parameterLimit: 1000000}));

//TODO: for now, we're assuming the data comes in with a size field
router.get("/hello", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get('/', function(req, res){
   res.json(getData());
});

router.post('/robot', function(req, res){
  setRobotPosition({x: req.body.x,
                    y: req.body.y});

  res.json({message: "Robot position updated."});
});

router.post('/data', function(req, res){
  //input is a flattened array in row-major order
  input_json = req.body.data

  //ouput is an array of {x,y,size}
  datapoints = []
  var x, y;
  for (x = 0; x < 288; x++) {
    for (y = 0; y < 288; y++) {

        x_data = x;
        y_data = y;
        datapoints.push({
          x: x_data,
          y: y_data,
          color: input_json[(144*x) + y]
        });
    }
  }

    setData(datapoints);
    res.json({message: "Map updated."});

});

module.exports = router;
