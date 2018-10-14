import {render} from 'react-dom';
import React, {Component} from 'react';

class App extends Component{
   render(){
      return (
         <div className="wrapper">
            <h1>Hello world</h1>
         </div>
      );
   }
}

render(
   <App />,
   document.getElementById('root')
   );