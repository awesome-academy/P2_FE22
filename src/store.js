import { createStore } from 'redux';
import myReducer from './reducers/indexReducer';
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
 export default store;