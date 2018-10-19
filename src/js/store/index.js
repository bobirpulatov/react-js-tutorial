import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from './../middlewares';

const enchancer = applyMiddleware(logger);
const store = createStore(reducer, {}, enchancer);

export default store;