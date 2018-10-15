import React, {Component} from 'react';

export default (OrgComponent) => class WrapperComponent extends Component{
   state = {
      openedArticleID: null
   } ;
   render(){
      return (
         <OrgComponent {...this.props} openedArtID={ this.state.openedArticleID } toggleAccordion={this.toggleAccordion.bind(this)} />
      );
   }

   toggleAccordion(openedArticleID){
      console.log(openedArticleID);
      if( this.state.openedArticleID === openedArticleID)
         openedArticleID = null;

      this.setState({ openedArticleID })
   }
}