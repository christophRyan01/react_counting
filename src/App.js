import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      counters: 0
    }
    this.increaseCounters = this.increaseCounters.bind(this)
    this.decreaseCounters = this.decreaseCounters.bind(this)
    
  }

  render() {
    return (
      <div className="App">
        <Header increaseCounters={this.increaseCounters} decreaseCounters={this.decreaseCounters} />
        <CounterList counter={this.state.counters} />
      </div>
    );
  }  

    increaseCounters = () => {
      let counters = this.state.counters + 1
  
      this.setState({
        counters
      })
    }
  
    decreaseCounters = () => {
      let counters = this.state.counters - 1
  
      this.setState({
        counters
      })
    }
}

export default App;