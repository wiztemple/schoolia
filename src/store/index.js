import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const initialState = {};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, middleware);

export default store;
