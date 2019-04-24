import React, { Component } from 'react';
import {XYPlot, HeatmapSeries, VerticalGridLines,HorizontalGridLines,
        DiscreteColorLegend, XAxis, YAxis} from 'react-vis';

class Plot extends Component {
  render() {
    function getColor(d) {
      console.log(d.color);
      switch (d.color) {
        case '-1':
            return '#e7cac9'
        case '0':
            return '#f6ecc8'
        case '1':
            return '#de7565'
        default:
            return '#f3bfb2'
      }
    }

    return (
      <div className="Plot">
          <XYPlot width={this.props.width} height={this.props.height}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="X" />
            <YAxis title="Y" />
            <HeatmapSeries
              colorType="literal"
              getColor={getColor}
              data={this.props.data}/>
          </XYPlot>
          <DiscreteColorLegend
              items={['Unexplored', 'Wall', 'Hallway']}
              colors={['#e7cac9', '#de7565', '#f6ecc8']}/>
      </div>
    );
  }
}

export default Plot;
