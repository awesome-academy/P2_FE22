import { combineReducers } from 'redux';
import productReducer from './productReducer';
const myReducer = combineReducers({
    // return productReducer from state productReducer
    productReducer : productReducer
}) 
export default myReducer;