import React, { Component } from 'react';
import {connect} from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import Grid from './Grid/Grid';
import Palette from './Palette/Palette';
import Menu from './Menu/Menu';
import * as actionCreators from '../actions/actions';
import './art-board.css'

class ArtBoard extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      getGridById: React.PropTypes.object,
    }).isRequired,
    name: React.PropTypes.string,
    id: React.PropTypes.number,
  };
  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    return (
      <div className="ArtBoard">
      <Menu/>
        <Palette colors={this.props.colors} 
                 selectedColor={this.props.selectedColor} 
                 switchColor={this.props.switchColor}/>
        <Grid currentFrame={this.props.currentFrame}
              Grid={this.props.data.getGridById}
              paintCell={this.props.paintCell}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frames: state.grids.frames,
    colors: state.grids.colors,
    selectedColor: state.grids.selectedColor,
    currentFrame: state.grids.currentFrame,
    ...actionCreators
  };
}

const GridQuery = gql`
query{
  getGridById(id:8){
    id
    user {
      id
      name
      iconUrl
    }
    title
    likes
    width
    height
    frames
    createdAt
  }
}
`


const ArtBoardWithData = graphql(GridQuery, {
  options:{

  }
})(ArtBoard);

export const ArtBoardContainer=connect(mapStateToProps, actionCreators)(ArtBoardWithData);