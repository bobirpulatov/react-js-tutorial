import {render} from 'react-dom';
import React, {Component} from 'react';
import ArticleList from "./Articles/ArticleList";
import store from './store';
import {Provider} from 'react-redux';
import { HashRouter, Switch, NavLink, BrowserRouter as Router, Route, Link} from 'react-router-dom';

import UserForm from "./Forms/UserForm";
import DatePicker from './Forms/DatePicker';


class App extends Component{
   render(){
      return (
         <Router>
            <div className="wrapper">
               <ol>
                  <li><Link to="">Main menu</Link></li>
                  <li><Link to="/zipCode">ZipCode</Link></li>
                  <li><Link to="/dayPicker">dayPicker</Link></li>
               </ol>
               <Switch>
                  <Route path="/zipCode/:id/:type" component={UserForm}/>
                  <Route path="/zipCode/:id" component={UserForm}/>
                  <Route path="/zipCode" component={UserForm}/>
               </Switch>
               <Route path="/dayPicker" component={DatePicker}/>
               <ArticleList />
            </div>
         </Router>
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
