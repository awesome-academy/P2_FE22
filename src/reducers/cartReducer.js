import * as types from '../constants/indexConstant';
const initCart = {
    recently: []
}
function format(state, action){
    const {recently} = state;
    recently.push(action.idProduct)
    return recently.splice(-3, 3);
}
export default (state = initCart, action) => {
    switch (action.type) {
        case types.SELECT_PRODUCT:
            //state.recently.push(action.idProduct).splice(-3, 3)
            //state.recently
            // state = {...state, recently: recently.push(action.idProduct)}
            state = {...state,
                    recently: format(state, action)}
            return state;
        default:
            return state
    }
}