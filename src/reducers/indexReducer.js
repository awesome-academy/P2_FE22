import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import adminReducer from './adminReducer';
const myReducer = combineReducers({
    // return productReducer from state productReducer
    productReducer : productReducer,
    cartReducer : cartReducer,
    loginReducer : loginReducer,
    adminReducer: adminReducer
}) 
export default myReducer;