import * as types from '../constants/indexConstant';
export const isLogin = () => {
    return {
        type: types.IS_LOGIN
    }
}
export const isLogout = () => {
    return {
        type: types.IS_LOGOUT
    }
}
export const isAdmin = () => {
    return {
        type: types.IS_ADMIN
    }
}