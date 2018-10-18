import React, {Component} from 'react';
import {increment, decrement, reset} from './../AC';
import {connect} from 'react-redux';


class Counter extends Component{
   render(){
      console.log('upd-counter');
      return (
         <div>
            <h2>{this.props.counter2}</h2>
            <button onClick={this.handleIncrement}>IncrementMe</button>
            <button onClick={this.handleDecrement}>DecrementMe</button>
            <button onClick={this.handleReset}>ResetMe</button>
         </div>
      );
   }
   handleIncrement = () => {
      this.props.increment();
   };

   handleDecrement = () => {
      this.props.decrement();
   };

   handleReset = () => {
      this.props.reseting();
   };
}


export default connect (
   (reducer) => ({
      counter2: reducer.countFromReducer
   }),
   {
      increment: increment,
      decrement: decrement,
      reseting: reset
   })(Counter);