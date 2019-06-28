import * as types from '../constants/indexConstant';
export const buyProduct = (product) => {
    return {
        type: types.BUY_PRODUCT,
        product: product
    }
}
export const removeProduct = (product) => {
    return {
        type: types.REMOVE_PRODUCT,
        product: product
    }
}
export const isPayment = () => {
    return {
        type: types.IS_PAYMENT
    }
}