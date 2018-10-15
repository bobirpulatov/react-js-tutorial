import React, {Component} from 'react';

export default (OriginalComponent) => class WrapperComponent extends Component{
   state = {
      isOpen: false
   };

   render(){
      return (
         <OriginalComponent isOpen={this.state.isOpen} toggleOpen={this.toggleArticle.bind(this) } {...this.props} />
      );
   }
   toggleArticle(){
      this.setState({ isOpen: ! this.state.isOpen })
   }
}