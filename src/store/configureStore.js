import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import loaderMiddlewear from './middlewares/loaderMiddlewear';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(loaderMiddlewear, thunk))
    );
}
export default configureStore;
