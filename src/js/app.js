import {render} from 'react-dom';
import React, {Component} from 'react';
import ArticleList from "./Articles/ArticleList";

class App extends Component{
   render(){
      return (
         <div className="wrapper">
            <ArticleList />
         </div>
      );
   }
}

render(
   <App />,
   document.getElementById('root')
   );