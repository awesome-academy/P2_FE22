import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
const myReducer = combineReducers({
    // return productReducer from state productReducer
    productReducer : productReducer,
    cartReducer : cartReducer
}) 
export default myReducer;