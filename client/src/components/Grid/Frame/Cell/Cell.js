import React, { Component } from 'react';
import './cell.css'

class Cell extends Component {
  static propTypes = {
    color: React.PropTypes.string,
  };
  render() {
    const style = {
      backgroundColor:this.props.color
    }
    return (
      <div className="Cell" style={style} onClick={() => this.props.paintCell([this.props.frameNumber, this.props.xPos, this.props.yPos])}>
      </div>
    );
  }
}

export default Cell;