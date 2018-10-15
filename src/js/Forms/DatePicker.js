import React, {Component} from 'react';
import DatePickerComponent from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component{
    render(){
        return (
            <DatePickerComponent />
        );
    }
}
export default DatePicker;