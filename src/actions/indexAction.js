import * as types from './../constants/indexConstant';
import callAPI from './../utils/apiCaller';
export const getProductRequest = () => {
    return (dispatch) => {
        return callAPI('product', 'GET', null)
            .then(res => {
                dispatch(getProduct(res.data))
            })
    }
}
export const getProduct = (product) => {
    return {
        type: types.FETCH_API,
        product
    }
}
export const getProductDetailRequest = (id) => {
    return (dispatch) => {
        return callAPI(`product?id=${id}`, 'GET', null)
            .then(res => {
                dispatch(getProductDetail(res.data[0]))
            })
    }
}
export const getProductDetail = (productDetail) => {
    return {
        type: types.PRODUCT_DETAILS,
        productDetail
    }
}
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
export const filterProduct = (filter) => {
    return {
        type: types.FILTER_PRODUCT,
        filter: filter
    }
}
export const changeStyle = (isGrid) => {
    return {
        type: types.CHANGE_STYLE,
        isGrid: isGrid
    }
}
export const selectProduct = (idProduct) => {
    return {
        type: types.SELECT_PRODUCT,
        idProduct: idProduct
    }
}
export const isSelectProduct = (isSelectProduct) => {
    return {
        type: types.IS_SELECT_PRODUCT,
        isSelectProduct: isSelectProduct
    }
}
export const changeTab = (idTab) => {
    return {
        type: types.CHANGE_TAB,
        idTab: idTab
    }
}