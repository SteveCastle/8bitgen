import React, { Component } from 'react';
import './options.css'

class Options extends Component {
  static propTypes = {
    options: React.PropTypes.object,
  };
  render() {
  	const style = {
  		backgroundColor:this.props.selectedColor
  	}
    return (
      <div className="Options" style={style}>
        <div className="label">Selected Color</div>
      </div>
    );
  }
}

export default Options;