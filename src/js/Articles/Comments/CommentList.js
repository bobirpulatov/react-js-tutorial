import React, {Component} from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';
import AddNewComment from './../../Forms/AddNewComment';
import {connect} from 'react-redux';

class CommentList extends Component{

   state = {
      isOpen: false
   };

   render(){
      const {isOpen} = this.state;
      return (
         <div className="comments-container"><br/>
          <AddNewComment />
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
      return <ul className="comments">
         {commentComponents}
      </ul>;
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
