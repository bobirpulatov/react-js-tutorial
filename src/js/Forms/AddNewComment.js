import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddNewComponent extends Component{
  state = {
    user: null,
    text: null
  };

  render(){
    const {user, text} = this.state;
    return (
      <div className="add-comment-block">
        <span>Add new comment</span><br />
        <input type="text" className={ this.getClassInput('user') }
            name="user" onChange={this.logComment('user')} value={ user ? user : '' } placeholder="Name"/>
        &nbsp;
        <input type="text" className={ this.getClassInput('text', 20, 50) }
            name="text" onChange={this.logComment('text')} value={text ? text : '' } placeholder="Text"/>
        &nbsp;&nbsp;
        <button onClick={this.addComment }>Add comment</button> <br />
         <span className={ this.getClassLabel('user') }>User name length in range: 5 &lt; name &lt; 15 </span>
         <span className={ this.getClassLabel('text', 20, 50) }>Text  length in range: 20 &lt; name &lt; 50</span>
      </div>
    );
  }

  addComment = () => {
     const {user, text} = this.state;
     if (   ( user && user.length > 5 && user.length < 15 )
        &&  ( text && text.length > 20 && text.length < 50 ) )
     {
        this.setState({ user: null, text: null });
        this.props.addCommentDB(this.state, this.props.artId);
     }
  };

   logComment = type => (e) => {
      this.setState({[type]: e.target.value });
   };
   getClassLabel = (type, a=5, b=15) => {
      let inputValid = true;
      if( this.state[type] )
         inputValid = ( this.state[type].length < b && this.state[type].length > a );
      return (inputValid) ? 'label-error-hide' : 'label-error-show';
   };
   getClassInput = (type, a=5, b=15) => {
      let inputValid = true;
      if( this.state[type] )
         inputValid = (this.state[type]) && ( this.state[type].length < b && this.state[type].length > a );
      return (inputValid) ? '' : 'input-error';
   };
}

export default connect( (state) => ({
   articleId: state.articles
}), {
   addCommentDB: ({user, text}, artId) => {
      return {
         type: 'ADD_COMMENT',
         payload: {user, text, artId }
      }
   }
})(AddNewComponent);
