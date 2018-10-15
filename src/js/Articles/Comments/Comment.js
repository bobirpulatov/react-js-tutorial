import React, {Component} from 'react';
export default function Comment(props){
   const {comment} = props;
   return (
      <div className="each-comment-container">
         <h5>{comment.user}</h5>
         <p>{comment.text}</p>
      </div>)
      ;
}