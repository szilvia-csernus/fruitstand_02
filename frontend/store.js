import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer.js';

const Store = (
    createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
);

export default Store;
