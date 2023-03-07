import React, {Component, useReducer, useState} from "react";

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  }
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>Fixed Value: {this.state.fixed}</p>
      </div>
    );
  }
}

// const reducer = (state, action) => {
//
//   switch (action.type) {
//     case 'INCREAMENT':
//       return state + 1;
//     case 'DECREAMENT':
//       return state - 1;
//     default:
//       throw new Error(`Unknown action ${action.type}`);
//   }
// };
//
// const Counter = () => {
//
//   const [number, dispatch] = useReducer(reducer, 0);
//   const onIncrease = () => {
//     dispatch({
//       type: 'INCREAMENT',
//     });
//   };
//
//   const onDecrease = () => {
//     dispatch({
//       type: 'DECREAMENT',
//     })
//   };
//
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;