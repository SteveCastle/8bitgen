import React, { Component } from 'react';


class Cell extends Component {
  static propTypes = {
    color: React.PropTypes.string,
  };
  render() {
    return (
      <div className="Cell">
       {this.props.color}
      </div>
    );
  }
}

export default Cell;