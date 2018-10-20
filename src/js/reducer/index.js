import {combineReducers} from 'redux';
import counterReducer from './counter'
import articleReducer from './articles'
import commentReducer from './comments'
import zipCodeReducer from './zipcodes'

export default combineReducers({
   countFromReducer: counterReducer,
   articles: articleReducer,
   normComments: commentReducer,
   city: zipCodeReducer
});