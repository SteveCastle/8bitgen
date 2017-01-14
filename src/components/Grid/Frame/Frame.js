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
        {this.props.sprite.map((row, yIndex) =>
          <div className="row clearfix" key={yIndex}>
               {row.map((color, xIndex) =>
                 <Cell color={color}
                       frameNumber={this.props.frameNumber}
                       xPos = {xIndex}
                       yPos = {yIndex}
                       key={xIndex} 
                       paintCell={this.props.paintCell}/>
               )}
          </div>
        )}
      </div>
    );
  }
}

export default Frame;