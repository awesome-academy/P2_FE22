export const countCart = arr => {
    if(arr == null || arr == []) {return 0;}
    else {return arr.map(item => item.amount).reduce((prev, next) => prev + next, 0);}
}