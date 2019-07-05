import * as types from '../constants/indexConstant'
import callAPI from '../utils/apiCaller';
export const getUserRequest = () => {
    return (dispatch) => {
        return callAPI('user', 'GET', null)
            .then(res => {
                dispatch(getUser(res.data))
            })
    }
}
export const getUser = (users) => {
    return {
        type: types.FETCH_USER,
        users: users
    }
}
export const getOrderRequest = () => {
    return (dispatch) => {
        return callAPI('order', 'GET', null)
            .then(res => {
                dispatch(getOrder(res.data))
            })
    }
}
export const getOrder = (orders) => {
    return {
        type: types.FETCH_ORDER,
        orders
    }
}