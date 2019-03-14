import React, { Component } from 'react';
import './App.css';
import Plot from "./plot.js";
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
    const data = [
      {x: 1, y: 10, size: 30},
      {x: 1.7, y: 12, size: 10},
      {x: 2, y: 5, size: 1},
      {x: 3, y: 15, size: 12},
      {x: 2.5, y: 7, size: 4}
    ]

    return (
      <div className="App">
        <h3> Slambot Visualization </h3>
        <div align="center">
          <Plot data={data} height="300" width="300"></Plot>
        </div>
      </div>
    );
  }
}

export default App;
