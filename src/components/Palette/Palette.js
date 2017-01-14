import React, { Component } from 'react';
import Color from './Color/Color'
import Options from './Options/Options'
import './palette.css'

class Palette extends Component {
  static propTypes = {
    colors: React.PropTypes.array,
  };
  render() {
    return (
      <div className="Palette clearfloat">
      <Options selectedColor={this.props.selectedColor}/>
        {this.props.colors.map((color, index)=>
        	<Color color={color} key={index} switchColor={this.props.switchColor}/>
        	)}
      </div>
    );
  }
}

export default Palette;
