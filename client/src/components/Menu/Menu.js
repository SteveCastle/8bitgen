import React, { Component } from 'react';
import Logo from './Logo/Logo'
import CharacterIcon from '../CharacterIcon/CharacterIcon'
import './menu.css'

class Menu extends Component {
  static propTypes = {
    colors: React.PropTypes.array,
  };
  render() {
    return (
      <div className="Menu clearfloat">
      <Logo/>
      <h3 className="subGroup">My Player</h3>
      <CharacterIcon name={'STC'} iconUrl={'/img/user.png'}/>
      {['Profile', 'My Art', 'Log Out'].map((title, link)=><div className="button" key={link}>{title}</div>
        )}
      <h3 className="subGroup">Explore</h3>
      {['Gallery', 'Random', 'Shop'].map((title, link)=><div className="button" key={link}>{title}</div>
        )}
      <h3 className="subGroup">Actions</h3>
      {['save','Share', 'Print', 'Buy'].map((title, link)=><div className="button" key={link}>{title}</div>
        )}
      </div>
    );
  }
}

export default Menu;
