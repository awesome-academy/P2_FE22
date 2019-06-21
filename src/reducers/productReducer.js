import * as types from './../constants/indexConstant';
const initState = {
    num: 6,
    value: undefined,
    filter: undefined
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
        default:
            return state;
    }
}

