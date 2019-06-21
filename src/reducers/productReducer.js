import * as types from './../constants/indexConstant';
const initState = {
    num: 6,
    value: undefined,
    filter: undefined,
    isGrid: true
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
        default:
            return state;
    }
}

