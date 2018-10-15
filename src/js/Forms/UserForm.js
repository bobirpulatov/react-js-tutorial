import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';

class UserForm extends Component{
   static propTypes = {

   };

   state = {
      userName: ''
   };

   render(){

      const options = [
         { value: 'chocolate', label: 'Chocolate' },
         { value: 'strawberry', label: 'Strawberry' },
         { value: 'vanilla', label: 'Vanilla' }
      ];

      return (
         <div>
            <Select options={options} />
         </div>
      );
   }

   handleUserChange = (ev) => {
      console.log(findDOMNode(ev.target));
      this.setState({ userName: ev.target.value });
   }
}
export default UserForm;
