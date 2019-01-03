import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(placeHolder => (
          <Counter
            key={placeHolder.id}
            counter={placeHolder}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <h4>Counter #{placeHolder.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
