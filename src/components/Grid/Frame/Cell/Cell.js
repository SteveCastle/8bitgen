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
      <div className="Cell" style={style}>
      </div>
    );
  }
}

export default Cell;