import React, { Component } from 'react';


class Grid extends Component {
  static propTypes = {
    GridNumber: React.PropTypes.string,
    size: React.PropTypes.number,
    frames: React.PropTypes.array,
    currentFrame: React.PropTypes.number,
    totalFrames: React.PropTypes.number
  };
  render() {
    return (
      <div className="Grid">

      </div>
    );
  }
}

export default Grid;