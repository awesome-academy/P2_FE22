import * as types from './../constants/indexConstant';
const initState = {
    num: 6,
    value: undefined,
    filter: undefined,
    isGrid: true,
    idProduct: undefined,
    isSelectProduct: false
};
export default (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_PRODUCT:
            state = {...state, num: action.num}
            return state;
        case types.ORDER_PRODUCT:
            state = {...state, value: action.value}
            return state;
        case  types.FILTER_PRODUCT:
            state = {...state, filter: action.filter}
            return state;
        case types.CHANGE_STYLE:
            state = {...state, isGrid: action.isGrid}
            return state;
        case types.SELECT_PRODUCT:
            state = {...state, idProduct: action.idProduct, isSelectProduct: true}
            return state;
        case types.IS_SELECT_PRODUCT:
            state = {...state, isSelectProduct: action.isSelectProduct}
            return state;
        default:
            return state;
    }
}

