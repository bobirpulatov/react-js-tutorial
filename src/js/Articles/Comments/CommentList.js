import React from 'react';
import Comment from "./Comment";

export default function CommentList(props) {
   const commentComponents = props.comments.map( (comment) => (<li key={comment.id}><Comment comment={ comment }/></li>) );
   return (
      <ul className="comments-container">
         {commentComponents}
      </ul>
   );
}