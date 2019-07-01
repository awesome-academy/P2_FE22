import * as types from '../constants/indexConstant';
const initState = {
    isLogin: false,
    isAdmin: false
}
export default (state = initState, action) => {
    switch (action.type) {
        case types.IS_LOGIN:
            state = {...state, isLogin: true}
            return state;
        case types.IS_LOGOUT:
            state = {...state, isLogin: false, isAdmin: false}
            return state;
        case types.IS_ADMIN:
            state = {...state, isAdmin: true}
            return state;
        default:
            return state;
    }
}