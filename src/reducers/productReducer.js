import * as types from './../constants/indexConstant';
const initState = {
    product: [],
    num: 10,
    productDetail: {
        title:"",
        detailsImg: [],
        color: [],
        info: [],
        img: ""
    },
    value: undefined,
    filter: undefined,
    isGrid: true,
    isSelectProduct: false,
    idTab: 'info'
};
export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
            state = {...state, product: action.product}
            return state;
        case types.SHOW_DETAIL:
            state = {...state, productDetail: action.productDetail}
            return state;
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
            state = {...state, isSelectProduct: true}
            return state;
        case types.IS_SELECT_PRODUCT:
            state = {...state, isSelectProduct: action.isSelectProduct}
            return state;
        case types.CHANGE_TAB:
            state = {...state, idTab: action.idTab}
            return state;
        default:
            return state;
    }
}

