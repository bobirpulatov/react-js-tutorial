import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCityByZip} from '../AC';
import {Route, NavLink} from 'react-router-dom';

class UserForm extends Component{

   state = {
      zip: ''
   };

   componentDidMount = () => {
      const id = this.props.match.params.id;
      if( id ){
         this.props.getCityByZip( id );
         this.setState({ zip: id });
      }else{
         this.setState({ zip: ''});
      }
   };

   componentWillReceiveProps = (next) =>{
      const nextId = next.match.params.id,
            currId = this.props.match.params.id;

      if( nextId && currId !== nextId){
         this.props.getCityByZip( nextId );
         this.setState({ zip: nextId });
      }
   };


   render(){
      return (
         <div>
            <input type="text" value={this.state.zip} onChange={this.logZip}/>
            <NavLink to={"/zipCode/" + this.state.zip}>
               <button>Find</button>
            </NavLink>
            <div>
               {
                  ( this.props.match.params.type && this.props.match.params.type === 'bold')
                     ? <p><b>{ (this.props.match.params.id) ? this.props.city : '' }</b></p>
                     : <p>{ (this.props.match.params.id) ? this.props.city : '' }</p>
               }
            </div>

         </div>
      );
   }

   logZip = (ev) =>{ this.setState({ zip: ev.target.value }); };
}

export default connect(
   (state) => ({ city: state.city }),
   { getCityByZip })(UserForm);
