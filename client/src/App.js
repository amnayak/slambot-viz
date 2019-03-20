import React, { Component } from 'react';
import './App.css';
import Plot from "./plot.js";
import '../node_modules/react-vis/dist/style.css';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      endpoint: "http://127.0.0.1:3001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    var graphDim = Math.max(Math.min(window.innerHeight, window.innerWidth) - 50, 200);

    return (
      <div className="App">
        <h3> Slambot Visualization </h3>
        <div align="center">
          <Plot data={response} height={graphDim} width={graphDim}></Plot>
        </div>
      </div>
    );
  }
}

export default App;
