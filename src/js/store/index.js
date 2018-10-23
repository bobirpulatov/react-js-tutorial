import {createStore, applyMiddleware} from 'redux'
import reducer from './../reducer'
import thunks from 'redux-thunk'
import $ from 'jquery'
import {addComment, addArticle } from './../middlewares'
import {routerMiddleware} from 'react-router-redux'
import history from './../history'

const enhancer = applyMiddleware(routerMiddleware(history), thunks.withExtraArgument($), addComment, addArticle);
const store = createStore(reducer, {}, enhancer);
window.store = store;
export default store;