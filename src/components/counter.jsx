import React, { Component } from "react";

class Counter extends Component {
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  handleIncrement = product => {
    //alert(product.id);
    this.setState({ count: this.state.count + 1 });
  };
  state = {
    count: 0
  };
  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
  render() {
    return (
      <div>
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
