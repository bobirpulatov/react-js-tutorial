import React, {Component} from 'react';
import PropTypes from "prop-types";

function Comment(props){
   const {comment} = props;
   return (
      <div className="each-comment-container">
         <h5>{comment.user}</h5>
         <p>{comment.text}</p>
      </div>)
      ;
}

Comment.propTypes = {
   comment: PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
   }).isRequired
};

export default Comment;