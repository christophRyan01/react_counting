import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0
    };
    increaseCount = () => {
        let count = this.state.count + 1;
        this.setState({
            count
        });
    }

    decreaseCount = () => {
        let count = this.state.count - 1;
        this.setState({
            count
        });
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        return(
            <div className="Counter">
                <h4>Current Count: {this.state.count}</h4>
                <button onClick={(e) => this.increaseCount(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </button>
                <button onClick={(e) => this.decreaseCount(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decrement
                </button>
                <button onClick={(e) => this.reset(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Reset
                    </button>
            </div>
        );
    }
}

export default Counter;