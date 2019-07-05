import * as types from '../constants/indexConstant';
const initState = {
    users: [],
    orders: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            state = {...state, users: action.users}
            return state;
        case types.FETCH_ORDER:
            state = {...state, orders: action.orders}
            return state;
        default:
            return state
    }
}