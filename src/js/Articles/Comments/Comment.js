import React, {Component} from 'react';
class Comment extends Component{
   state = {
      isOpen: false
   };

   render(){
      return (
         <div>
            { this.getBody() }
         </div>
      );
   }

   getBody(){
      const {comment} = this.props;
      return (this.state.isOpen)
         ?
         <div className="each-comment-container">
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
         </div>
         : '';
   }
   toggleComment(){
      this.setState({ isOpen: ! this.state.isOpen })
   }
}
export default Comment;