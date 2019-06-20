import * as types from './../constants/indexConstant';
export const showProduct = (num) => {
    return {
        type: types.SHOW_PRODUCT,
        num: num
    }
}
export const orderProduct = (value) => {
    return {
        type: types.ORDER_PRODUCT,
        value: value
    }
}