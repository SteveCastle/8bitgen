import React, { Component } from 'react';
import Frame from './Frame/Frame'
import './grid.css'

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
        <Frame sprite={[['green','red','red','orange','red','red','red','red'],
                        ['green','red','red','red','red','red','red','red'],
                        ['green','red','red','red','red','red','red','red'],
                        ['green','red','red','red','pink','red','red','red'],
                        ['green','red','red','red','red','red','red','red'],
                        ['green','red','red','red','red','red','red','red'],
                        ['green','red','red','red','red','red','red','red'],
                        ['green','red','red','green','red','red','red','red']]}/>
      </div>
    );
  }
}

export default Grid;