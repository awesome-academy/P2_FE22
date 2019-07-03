import * as types from './../constants/indexConstant';
import callAPI from './../utils/apiCaller';
export const fetchAPI = () => {
    return (dispatch) => {
        return callAPI('product', 'GET', null)
            .then(res => {
                dispatch(getProduct(res.data))
            })
    }
}
export const getProduct = (product) => {
    return {
        type: types.GET_PRODUCT,
        product: product
    }
}
export const showDetailProductAPI = (id) => {
    return (dispatch) => {
        return callAPI(`product?id=${id}`, 'GET', null)
            .then(res => {
                dispatch(showDetailProduct(res.data[0]))
            })
    }
}
export const showDetailProduct = (productDetail) => {
    return {
        type: types.SHOW_DETAIL,
        productDetail: productDetail
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