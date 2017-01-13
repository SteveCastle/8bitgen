import React, { Component } from 'react';
import Grid from './Grid/Grid';
import Palette from './Palette/Palette';
import './art-board.css'

class ArtBoard extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
  };
  render() {
    return (
      <div className="ArtBoard">
        <Grid/>
      </div>
    );
  }
}

export default ArtBoard;