import React, {Component} from 'react';
import {connect} from 'react-redux';
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
         this.props.getCityByZipCode(zip);
      }
   }
}
export default connect(
   (state) => ({ city: state.city }),
   {
      getCityByZipCode: (zipCode) => (
         {
            type: 'GET_ZIP_CODE',
            payload: { zipCode }
         }
      )
   })(UserForm);
