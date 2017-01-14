import React, { Component } from 'react';
import './color.css'

class Color extends Component {
  static propTypes = {
    color: React.PropTypes.string,
  };
  render() {
  	const style = {
  		backgroundColor: this.props.color
  	}
    return (
      <div className="Color" style={style}>

      </div>
    );
  }
}

export default Color;