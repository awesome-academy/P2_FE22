import { createStore, applyMiddleware, compose } from 'redux';
import myReducer from './reducers/indexReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducer,
    composeEnhancer(applyMiddleware(thunk))
    );
 export default store;