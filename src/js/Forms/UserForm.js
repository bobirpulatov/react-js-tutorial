import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCityByZip} from '../AC';

class UserForm extends Component{
   state = {
      zip: ''
   };

   render(){
      return (
         <div>
            <input type="text" maxLength="6" value={this.state.zip} onChange={this.logZip}/>
            <button onClick={ this.findZip }>Find</button>
            <p>{ this.props.city }</p>
         </div>
      );
   }
   logZip = (ev) =>{
     this.setState({
        zip: ev.target.value
     });
   };

   findZip = () => {
      const {zip} = this.state;
      if (zip.length > 0){
         this.props.getCityByZip(zip);
      }
   }
}
export default connect(
   (state) => ({ city: state.city }),
   { getCityByZip })(UserForm);
