import React, {Component} from 'react';

export default (OrgComponent) => class WrapperComponent extends Component{
   state = {
      openedArticleID: null
   } ;
   render(){
      return (
         <OrgComponent {...this.props} openedArtID={ this.state.openedArticleID } toggleAccordion={this.toggleAccordion} />
      );
   }

   toggleAccordion = (openedArticleID) => ev => {
      if( this.state.openedArticleID === openedArticleID)
         openedArticleID = null;

      this.setState({ openedArticleID: openedArticleID })
   }
}