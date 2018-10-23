import React, {Component} from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';
import AddNewComment from './../../Forms/AddNewComment';
import {connect} from 'react-redux';
import propTypes from 'prop-types'

class CommentList extends Component{
   static contextTypes = {
      store: propTypes.object,
      router: propTypes.object
   };

   state = {
      isOpen: false
   };

   render(){
      console.log(this.context);
      const {isOpen} = this.state;
      return (
         <div className="comments-container"><br/>
            <button onClick={this.toggleArticle}>{ (isOpen) ? 'Hide comments' : 'Show comments' }</button>
            { (isOpen) ? this.getBody() : '' }
         </div>
      );
   }

   getBody(){
      const {realComments} = this.props;
      const commentComponents = (realComments.length > 0)
         ? realComments.map( (comment) => (<li key={comment.id}><Comment comment={ comment }/></li>) )
         : 'No comments added yet';
      return <div>
            <ul className="comments">
               <AddNewComment artId={this.props.artId}/>
               {commentComponents}
            </ul>;
         </div>

   }
   toggleArticle =() => {
      if (! this.state.isOpen)
         this.props.sendingKeys(this.props.comments);

      this.setState({ isOpen: ! this.state.isOpen })
   }
}

CommentList.propTypes = {
   comments: PropTypes.array
};

CommentList.defaultProps = {
   comments: []
};


export default connect( (state)=> ({
   realComments: state.normComments
}), {
   sendingKeys: (keys) => {
      return {
         type: 'GET_KEYS',
         payload: {keys}
      }
   }
} )(CommentList);
