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
      <CharacterIcon name={'PCH'} iconUrl={'/img/creator.png'}/>
      <span className="heartCount"><img src="/img/heart.png"/> X 24</span>
      </div>
    );
  }
}

export default Info;