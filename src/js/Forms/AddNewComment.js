import React, {Component} from 'react';

class AddNewComponent extends Component{
  state = {
    user: '',
    text: ''
  }
  render(){
    const {user, text} = this.state;
    const userInvalid = ( user.length < 15 && user.length > 5 );
    const textInvalid = ( text.length < 50 && text.length > 20);
    return (
      <div className="add-comment-block">
        <span>Add new comment</span><br />
        <input type="text" className={ (userInvalid)? '' : 'input-error' }
            name="user" onChange={this.logUser} value={user} placeholder="Name"/>
        &nbsp;
        <input type="text" className={ (textInvalid)? '' : 'input-error' }
            name="text" onChange={this.logText} value={text} placeholder="Text"/>
        &nbsp;&nbsp;
        <button>Add comment</button>
      </div>
    );
  }

  logUser = (e) => {
    this.setState({user: e.target.value });
  }

  logText = (e) => {
    this.setState({text: e.target.value });
  }
}

export default AddNewComponent;
