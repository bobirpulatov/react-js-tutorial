import React, {Component} from 'react';
import Comment from "./Comment";
import ToggleOpen from "../../Decorators/ToggleOpen";

class CommentList extends Component{
   render(){
      const {isOpen, toggleOpen} = this.props;

      return (
         <div className="comments-container">
            <button onClick={toggleOpen}>{ (isOpen) ? 'Hide comments' : 'Show comments' }</button>
            { (isOpen) ? this.getBody() : '' }
         </div>
      );
   }

   getBody(){
      const {comments} = this.props;
      const commentComponents = (comments)
         ? comments.map( (comment) => (<li key={comment.id}><Comment comment={ comment }/></li>) )
         : 'No comments added yet';
      return <ul className="comments">
         {commentComponents}
      </ul>;
   }
}

export default ToggleOpen(CommentList);