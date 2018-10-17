import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {setDateRange} from './../AC';


class DatePicker extends Component{
   constructor(props){
      super(props);
      this.state = this.getInitialState();
   }
  render(){
     const { from, to, enteredTo } = this.state;
     const modifiers = { start: from, end: enteredTo };
     const disabledDays = { before: this.state.from };
     const selectedDays = [from, { from, to: enteredTo }];

     const textFromTo  = (from)
        ? (new Date(from).toLocaleDateString() + ' - '
           + ( (new Date(to).getTime() < new Date(from).getTime()) ? '' : new Date(to).toLocaleDateString() )
        )
        : 'You didn\'t select any date' ;

      return (
        <div className="date-picker">
          <p>Selected date: { textFromTo }</p>
           <DayPicker
              className="Range"
              month={ new Date(2016, 5) }
              selectedDays={selectedDays}
              disabledDays={disabledDays}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
              onDayMouseEnter={this.handleDayMouseEnter}
           />
           <button onClick={this.resetDateRange}>Reset date</button>
        </div>

      );
  }

   getInitialState = () => {
      return {
         from: null,
         to: null,
         enteredTo: null, // Keep track of the last day for mouseEnter.
      };
   };
   isSelectingFirstDay = (from, to, day) => {
      const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
      const isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
   };
   handleDayClick = (day) => {
      const { from, to } = this.state;
      if (from && to && day >= from && day <= to) {
         this.handleResetClick();
         return;
      }
      if (this.isSelectingFirstDay(from, to, day)) {
         this.setState({
            from: day,
            to: null,
            enteredTo: null,
         });
      } else {
         this.setState({
            to: day,
            enteredTo: day,
         });
         this.props.setDateRange(from, day);
      }
   };


   resetDateRange = () => {
      this.props.setDateRange();
      this.handleResetClick();
   };
   handleDayMouseEnter = (day) => {
      const { from, to } = this.state;
      if (!this.isSelectingFirstDay(from, to, day)) {
         this.setState({
            enteredTo: day,
         });
      }
   };
   handleResetClick = () => {
      this.setState(this.getInitialState());
   };
}


export default connect( null, {setDateRange} )(DatePicker);
