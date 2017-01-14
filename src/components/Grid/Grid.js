import React, { Component } from 'react';
import Frame from './Frame/Frame'
import './grid.css'

class Grid extends Component {
  static propTypes = {
    GridNumber: React.PropTypes.string,
    sizeX: React.PropTypes.number,
    sizeY: React.PropTypes.number,
    frames: React.PropTypes.array,
    currentFrame: React.PropTypes.number,
    totalFrames: React.PropTypes.number
  };
  render() {
    return (
      <div className="Grid">
        <Frame sprite={[['#000','#000','#f9af14','#f9af14','#f9af14','#000','#000','#bcbcbc'],
                        ['#000','#f9af14','#f9af14','#f9af14','#f9af14','#f9af14','#000','#bcbcbc'],
                        ['#000','#f9af14','#f2be98','#000','#ffc9a1','#000','#000','#bcbcbc'],
                        ['#df9d12','#df9d12','#f2be98','#ffc9a1','#ffc9a1','#ffc9a1','#000','#bcbcbc'],
                        ['#000','#358230','#358230','#359030','#359030','#000','#000','#a9a9a9'],
                        ['#ffc9a1','#358230','#358230','#359030','#358230','#358230','#ffc9a1','#f2be98'],
                        ['#000','#000','#358230','#358230','#358230','#000','#000','brown'],
                        ['#000','red','#000','#000','red','#000','#000','#000']]}/>
      </div>
    );
  }
}

export default Grid;