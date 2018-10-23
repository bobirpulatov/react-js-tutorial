import {combineReducers} from 'redux';
import counterReducer from './counter'
import articleReducer from './articles'
import commentReducer from './comments'
import zipCodeReducer from './zipcodes'
import {routerReducer} from 'react-router-redux'


export default combineReducers({
   countFromReducer: counterReducer,
   articles: articleReducer,
   normComments: commentReducer,
   city: zipCodeReducer,
   router: routerReducer
});