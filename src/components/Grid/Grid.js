import React, { Component } from 'react';
import Frame from './Frame/Frame'

class Grid extends Component {
  static propTypes = {
    GridNumber: React.PropTypes.string,
    sizeX: React.PropTypes.number,
    sizeY: React.PropTypes.number,
    frames: React.PropTypes.array,
    currentFrame: React.PropTypes.number,
    totalFrames: React.PropTypes.number
  };
  render() {
    return (
      <div className="Grid">
        <Frame sprite={[[1,2],[1,2]]}/>
      </div>
    );
  }
}

export default Grid;