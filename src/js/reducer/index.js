import {combineReducers} from 'redux';
import counterReducer from './counter'
import articleReducer from './articles'
import commentReducer from './comments'

export default combineReducers({
   countFromReducer: counterReducer,
   articles: articleReducer,
   normComments: commentReducer
});