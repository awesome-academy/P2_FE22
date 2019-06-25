import * as types from '../constants/indexConstant';
export const buyProduct = (product) => {
    return {
        type: types.BUY_PRODUCT,
        product: product
    }
}