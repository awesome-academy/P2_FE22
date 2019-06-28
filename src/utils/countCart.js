import {addProduct} from './product';
const isExistid = (arr, product) => {
    return arr.findIndex(item => {
        return (item.id == product.id);
    })
}
export const countCart = arr => {
    if(arr == null || arr == []) {return 0;}
    else {return arr.map(item => item.amount).reduce((prev, next) => prev + next, 0);}
}
export const addLocalStorage = (array, product) => {
    let arr = [...array];
    for(let item of product){
        let index = isExistid(arr, item);
        if(index == -1){
            arr.push(item)
        }else if(arr[index].color !== item.color){
            arr.push(item)
        }else{
            arr = addProduct(array, item)
        }
    }
    return arr;
}