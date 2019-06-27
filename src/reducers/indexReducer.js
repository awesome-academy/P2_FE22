import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
const myReducer = combineReducers({
    // return productReducer from state productReducer
    productReducer : productReducer,
    cartReducer : cartReducer,
    loginReducer : loginReducer
}) 
export default myReducer;