import React, { Component } from 'react';
import {ArtBoardContainer} from './components/ArtBoard';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtBoardContainer/>
        <Menu/>
      </div>
    );
  }
}

export default App;
