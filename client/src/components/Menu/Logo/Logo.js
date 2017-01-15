import React, { Component } from 'react';
import './logo.css'

class Logo extends Component {
  static propTypes = {
    path: React.PropTypes.string,
  };
  render() {
  	const style = {
  		backgroundColor:this.props.selectedColor
  	}
    return (
      <div className="Logo" style={style}>
        <h1>8BIT
        MAP</h1>
      </div>
    );
  }
}

export default Logo;