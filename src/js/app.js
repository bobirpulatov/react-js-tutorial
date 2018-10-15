import {render} from 'react-dom';
import React, {Component} from 'react';
import ArticleList from "./Articles/ArticleList";
import UserForm from "./Forms/UserForm";
import DatePicker from './Forms/DatePicker';


class App extends Component{
   render(){


      return (
         <div className="wrapper">
            <UserForm />
            <DatePicker />
            <ArticleList />
         </div>
      );
   }

}

render(
   <App />,
   document.getElementById('root')
   );