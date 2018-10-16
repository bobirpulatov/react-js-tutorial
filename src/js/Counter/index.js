import React, {Component} from 'react';
import {increment} from './../AC';
import {connect} from 'react-redux';


class Counter extends Component{
   render(){
      return (
         <div>
            <h2>{this.props.counter}</h2>
            <button onClick={this.handleIncrement}>IncrementMe</button>
         </div>
      );
   }
   handleIncrement = () => {
      const { increment } = this.props;
      increment();
   }
}


export default connect (
   (state) => ({
      counter: state.count
   }),
   {increment})(Counter);