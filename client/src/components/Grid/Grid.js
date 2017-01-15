import React, { Component } from 'react';
import Frame from './Frame/Frame'
import Info from './Info/Info'
import './grid.css'

class Grid extends Component {
  getSquare() {
    return (window.innerHeight < window.innerWidth) ? window.innerHeight : window.innerWidth;
  }
  static propTypes = {
    GridNumber: React.PropTypes.string,
    sizeX: React.PropTypes.number,
    sizeY: React.PropTypes.number,
    frames: React.PropTypes.array,
    currentFrame: React.PropTypes.number,
    totalFrames: React.PropTypes.number
  };
  render() {
    const style = {
      width: this.getSquare(),
      height: this.getSquare()
    }
    return (
      <div className="Grid" style={style}>
        <Info name={'Link'}
              user={'STC'}
              votes={5}
        />
        <Frame sprite={this.props.frames[this.props.currentFrame]}
               paintCell={this.props.paintCell} 
               frameNumber={this.props.currentFrame}/>
      </div>
    );
  }
}

export default Grid;