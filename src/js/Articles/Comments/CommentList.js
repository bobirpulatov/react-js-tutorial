import React, {Component} from 'react';
import Comment from "./Comment";
import ToggleOpen from "../../Decorators/ToggleOpen";
import PropTypes from 'prop-types';


class CommentList extends Component{
   componentWillMount(){ console.log('Component will mount'); }
   componentDidMount(){ console.log('Component did mount'); }

   componentWillUnmount(){ console.log('Component will unmount'); }

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