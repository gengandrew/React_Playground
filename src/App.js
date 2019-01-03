import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handleReset = () => {
    let counters2 = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    for (let index = 0; index < 10; index++) {
      console.log(index);
    }
    this.setState({ counters: counters2 });
  };
  handleDelete = counterID => {
    let counters2 = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters2 });
  };
  handleIncrement = counter => {
    let counters2 = [...this.state.counters];
    let index = counters2.indexOf(counter);
    counters2[index] = { ...counter };
    counters2[index].value++;
    this.setState({ counters: counters2 });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
