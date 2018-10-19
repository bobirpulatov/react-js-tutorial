import React, {Component} from 'react';
import Comment from "./Comment";
import ToggleOpen from "../../Decorators/ToggleOpen";
import PropTypes from 'prop-types';
import AddNewComment from './../../Forms/AddNewComment';

class CommentList extends Component{
   render(){
      const {isOpen, toggleOpen} = this.props;

      return (
         <div className="comments-container"><br/>
          <AddNewComment />
            <button onClick={toggleOpen}>{ (isOpen) ? 'Hide comments' : 'Show comments' }</button>
            { (isOpen) ? this.getBody() : '' }
         </div>
      );
   }

   getBody(){
      const {comments} = this.props;

      const commentComponents = (comments.length > 0)
         ? comments.map( (comment) => (<li key={comment.id}><Comment comment={ comment }/></li>) )
         : 'No comments added yet';
      return <ul className="comments">
         {commentComponents}
      </ul>;
   }
}

CommentList.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   toggleOpen: PropTypes.func.isRequired,
   comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
   }))
};

CommentList.defaultProps = {
   comments: []
};



export default ToggleOpen(CommentList);
