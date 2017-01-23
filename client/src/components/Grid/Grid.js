import React, { Component } from 'react';
import Frame from './Frame/Frame'
import Info from './Info/Info'
import './grid.css'

class Grid extends Component {
  getSquare() {
    return (window.innerHeight < window.innerWidth) ? window.innerHeight : window.innerWidth;
  }
  static propTypes = {
    Grid: React.PropTypes.object,
  };
  render() {
    const style = {
      width: this.getSquare(),
      height: this.getSquare()
    }
    return (
      <div className="Grid" style={style}>
        <Info name={this.props.Grid.title}
              user= {this.props.Grid.user}
              likes= {this.props.Grid.likes}
        />
        <Frame sprite={this.props.Grid.frames[this.props.currentFrame]}
               paintCell={this.props.paintCell} 
               frameNumber={this.props.currentFrame}/>
      </div>
    );
  }
}

export default Grid;