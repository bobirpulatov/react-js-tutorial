import React, {Component} from 'react';
import DatePickerComponent from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component{
  state = {
    selectedDate: null
  }
  render(){
      return (
        <div className="date-picker">
          <p>Selected date: { (this.state.selectedDate)? new Date(this.state.selectedDate).toLocaleDateString() : 'You didn\'t select any date' }</p>
          <DatePickerComponent
          selectedDays={this.state.selectedDate}
          onDayClick={ this.handleDatePicker }/>
        </div>
      );
  }
  handleDatePicker = value => {
    this.setState({
      selectedDate: value
    });
  }
}
export default DatePicker;
