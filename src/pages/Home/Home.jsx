import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  _handleClick = () => {
    this.setState((preState) => ({
      count: ++preState.count
    }));
  }

  render() {
    return (
      <div>
        <p>this is home~</p>
        <p>当前计数：{this.state.count}</p>
        <button onClick={this._handleClick}>Click</button>
      </div>
    );
  }
}
