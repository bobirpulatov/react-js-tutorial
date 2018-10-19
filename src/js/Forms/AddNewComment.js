import React, {Component} from 'react';

class AddNewComponent extends Component{
  state = {
    user: '',
    text: ''
  };

  render(){
    const {user, text} = this.state;
    return (
      <div className="add-comment-block">
        <span>Add new comment</span><br />
        <input type="text" className={ this.getClassInput('user') }
            name="user" onChange={this.logComment('user')} value={user} placeholder="Name"/>
        &nbsp;
        <input type="text" className={ this.getClassInput('text', 20, 50) }
            name="text" onChange={this.logComment('text')} value={text} placeholder="Text"/>
        &nbsp;&nbsp;
        <button>Add comment</button> <br />
         <span className={ this.getClassLabel('user') }>User name error</span>
         <span className={ this.getClassLabel('text', 20, 50) }>Text error</span>
      </div>
    );
  }

   logComment = type => (e) => {
      this.setState({[type]: e.target.value });
   };
   getClassLabel = (type, a=5, b=15) => {
      const inputValid = ( this.state[type].length < b && this.state[type].length > a );
      return (inputValid) ? 'label-error-hide' : 'label-error-show';
   };
   getClassInput = (type, a=5, b=15) => {
      const inputValid = ( this.state[type].length < b && this.state[type].length > a );
      return (inputValid) ? '' : 'input-error';
   };
}

export default AddNewComponent;
