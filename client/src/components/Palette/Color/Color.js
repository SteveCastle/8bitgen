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
      <div className="Color" style={style} onClick={() => this.props.switchColor(this.props.color)}>

      </div>
    );
  }
}

export default Color;