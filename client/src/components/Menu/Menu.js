import React, { Component } from 'react';
import Logo from './Logo/Logo'
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
      <div className='characterProfile'>
      <span className="characterName">STC</span>
      <img src="/img/user.png" alt="User Icon" className="userIcon"/> 
      </div>
      {['Profile', 'My Art', 'Log Out'].map((title, link)=><div className="button">{title}</div>
        )}
      <h3 className="subGroup">Explore</h3>
      {['Gallery', 'Random', 'Shop'].map((title, link)=><div className="button">{title}</div>
        )}
      <h3 className="subGroup">Actions</h3>
      {['save','Share', 'Print', 'Buy'].map((title, link)=><div className="button">{title}</div>
        )}
      </div>
    );
  }
}

export default Menu;
