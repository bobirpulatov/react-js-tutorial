import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import {addComment, addArticle} from './../middlewares';

const enhancer = applyMiddleware(addComment, addArticle);
const store = createStore(reducer, {}, enhancer);

export default store;