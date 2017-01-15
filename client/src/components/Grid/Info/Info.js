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
      <h2>Link</h2>
      <span>8X8</span>
      <CharacterIcon name={'PCH'} iconUrl={'/img/creator.png'}/>
      <span className="heartCount"><img src="/img/heart.png"/> X {this.props.votes}</span>
      </div>
    );
  }
}

export default Info;