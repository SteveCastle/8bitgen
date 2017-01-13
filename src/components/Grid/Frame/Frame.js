import React, { Component } from 'react';
import Cell from './Cell/Cell'

class Frame extends Component {
  static propTypes = {
    frameNumber: React.PropTypes.string,
    sprite: React.PropTypes.array
  };
  render() {
    return (
      <div className="Frame">

      </div>
    );
  }
}

export default Frame;