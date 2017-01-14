import React, { Component } from 'react';
import logo from './logo.svg';
import {ArtBoardContainer} from './components/ArtBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtBoardContainer/>
      </div>
    );
  }
}

export default App;
