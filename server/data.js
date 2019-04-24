var data = [
  {x: 1, y: 10, color: '2'},
  {x: 1.7, y: 12, color: '2'},
  {x: 2, y: 5, color: '2'},
  {x: 3, y: 15, color: '2'},
  {x: 2.5, y: 7, color: '2'}
];

module.exports = {
  getData: function(){ return data;},
  setData: function(datapoints) {data = datapoints;},
  setRobotPosition: function(datapoint) {
      for (var i = 0; i < data.length; i++) {
        var dp = data[i];
        if (dp.x == datapoint.x && dp.y == datapoint.y) {
          data[i].color = '2';
          return;
        }
      }
  }
};
