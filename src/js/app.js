import {render} from 'react-dom';
import React, {Component} from 'react';
import ArticleList from "./Articles/ArticleList";
import store from './store';
import Counter from './Counter';
import {Provider} from 'react-redux';


//import UserForm from "./Forms/UserForm";
import DatePicker from './Forms/DatePicker';


class App extends Component{
   render(){
      return (
         <div className="wrapper">
            <DatePicker />
            <Counter />
            <ArticleList />
         </div>
      );
   }

}

render(
   <Provider store={store}>
      <App />
   </Provider>
   ,
   document.getElementById('root')
   );
