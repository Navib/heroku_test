import React, { Component } from 'react';

class BodyGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`body-grid-wrapper ${this.props.color}_bg`}>
        <h1>BodyGrid!</h1>
      </div>
    )
  }
}

export default BodyGrid;
