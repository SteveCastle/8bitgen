import React, { Component } from 'react';


class ArtBoard extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
  };
  render() {
    return (
      <div className="ArtBoard">

      </div>
    );
  }
}

export default ArtBoard;