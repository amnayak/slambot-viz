import React, { Component } from 'react';
import {XYPlot, MarkSeries, VerticalGridLines,HorizontalGridLines,
        XAxis, YAxis} from 'react-vis';

class Plot extends Component {
  render() {

    return (
      <div className="Plot">
        <XYPlot width={this.props.width} height={this.props.height}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="X" />
          <YAxis title="Y" />
          <MarkSeries
            sizeRange={[5, 15]}
            data={this.props.data}/>
        </XYPlot>
      </div>
    );
  }
}

export default Plot;
