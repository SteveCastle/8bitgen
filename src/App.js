import React, { Component } from 'react';
import logo from './logo.svg';
import ArtBoard from './components/ArtBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtBoard/>
      </div>
    );
  }
}

export default App;
