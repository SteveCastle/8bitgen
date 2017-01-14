import React, { Component } from 'react';
import {connect} from 'react-redux';
import Grid from './Grid/Grid';
import Palette from './Palette/Palette';
import * as actionCreators from '../actions/actions';
import './art-board.css'

class ArtBoard extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
  };
  render() {
    return (
      <div className="ArtBoard">
        <Palette colors={this.props.colors} 
                 selectedColor={this.props.selectedColor} 
                 switchColor={this.props.switchColor}/>
        <Grid currentFrame={this.props.currentFrame}
              frames={this.props.frames}
              paintCell={this.props.paintCell}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frames: state.frames,
    colors: state.colors,
    selectedColor: state.selectedColor,
    currentFrame: state.currentFrame,
    ...actionCreators
  };
}



export const ArtBoardContainer=connect(mapStateToProps, actionCreators)(ArtBoard);