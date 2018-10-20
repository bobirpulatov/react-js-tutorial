import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import {addComment, addArticle, getZipCode} from './../middlewares';

const enhancer = applyMiddleware(addComment, addArticle, getZipCode);
const store = createStore(reducer, {}, enhancer);

export default store;