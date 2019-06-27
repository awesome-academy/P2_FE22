import * as types from '../constants/indexConstant';
const initState = {
    isLogin: false
}
export default (state = initState, action) => {
    switch (action.type) {
        case types.IS_LOGIN:
            state = {...state, isLogin: true}
            return state;
        case types.IS_LOGOUT:
            state = {...state, isLogin: false}
        default:
            return state;
    }
}