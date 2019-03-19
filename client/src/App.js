import React, { Component } from 'react';
import './App.css';
import Plot from "./plot.js";
import '../node_modules/react-vis/dist/style.css';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
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

    return (
      <div className="App">
        <h3> Slambot Visualization </h3>
        <div align="center">
          <Plot data={response} height="300" width="300"></Plot>
        </div>
      </div>
    );
  }
}

export default App;
