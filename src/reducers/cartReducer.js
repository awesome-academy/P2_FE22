import * as types from '../constants/indexConstant';
const initCart = {
    recently: [],
    cart: []
}
export default (state = initCart, action) => {
    switch (action.type) {
        case types.SELECT_PRODUCT:
            state = {...state,
                    recently: [...action.idProduct]}
            return state;
        case types.BUY_PRODUCT:
            state = {...state,
                    cart: [...action.product]}
            //console.log(action.product)
            return state;
        default:
            return state
    }
}