import {createStore, applyMiddleware} from 'redux'
import reducer from './../reducer'
import thunks from 'redux-thunk'
import $ from 'jquery';
import {addComment, addArticle } from './../middlewares'


const enhancer = applyMiddleware(thunks.withExtraArgument($), addComment, addArticle);
const store = createStore(reducer, {}, enhancer);

export default store;