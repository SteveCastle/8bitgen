import React, { Component } from 'react';
import Cell from './Cell/Cell'
import './frame.css'

class Frame extends Component {
  static propTypes = {
    sizeX: React.PropTypes.number,
    sizeY: React.PropTypes.number,
    sprite: React.PropTypes.array
  };

  getSquare() {
    return window.innerHeight;
  }

  render() {
    const style = {
      width: this.getSquare(),
      height: this.getSquare()
    }
    return (
      <div className="Frame" style={style}>
        {this.props.sprite.map((row) =>
          <div className="row clearfix">
               {row.map((color) =>
                 <Cell color={color}/>
               )}
          </div>
        )}
      </div>
    );
  }
}

export default Frame;