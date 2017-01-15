import React, { Component } from 'react';
import './character-icon.css'

class CharacterIcon extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    iconUrl: React.PropTypes.string,
  };

  render() {
    return (
      <div className='CharacterIcon'>
      <span className="characterName">{this.props.name}</span>
      <img src={this.props.iconUrl} alt="User Icon" className="userIcon"/> 
      </div>
    );
  }
}

export default CharacterIcon;