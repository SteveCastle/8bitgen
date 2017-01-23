import React, { Component } from 'react';
import CharacterIcon from '../../CharacterIcon/CharacterIcon'
import './info.css'

class Info extends Component {
  static propTypes = {
    frames: React.PropTypes.array,
  };
  render() {
    return (
      <div className="Info">
      <h2>{this.props.name}</h2>
      <span>8X8</span>
      <CharacterIcon name={this.props.user.name} iconUrl={this.props.user.iconUrl}/>
      <span className="heartCount"><img src="/img/heart.png" alt="Heart rating"/> X {this.props.likes}</span>
      </div>
    );
  }
}

export default Info;