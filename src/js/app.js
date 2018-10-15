import {render} from 'react-dom';
import React, {Component} from 'react';
import ArticleList from "./Articles/ArticleList";
import UserForm from "./Forms/UserForm";
import Select from 'react-select';


class App extends Component{
   render(){
      const options = [
         { value: 'chocolate', label: 'Chocolate' },
         { value: 'strawberry', label: 'Strawberry' },
         { value: 'vanilla', label: 'Vanilla' }
      ];

      return (
         <div className="wrapper">
            <Select options={options} />
            <ArticleList />
         </div>
      );
   }

}

render(
   <App />,
   document.getElementById('root')
   );