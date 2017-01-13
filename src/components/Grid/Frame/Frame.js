import React, { Component } from 'react';
import Cell from './Cell/Cell'

class Frame extends Component {
  static propTypes = {
    sizeX: React.PropTypes.number,
    sizeY: React.PropTypes.number,
    sprite: React.PropTypes.array
  };
  render() {
    return (
      <div className="Frame">
        {this.props.sprite.map((row) =>
               row.map((color) =>
                 <Cell color={color}/>
               )
        )}
      </div>
    );
  }
}

export default Frame;