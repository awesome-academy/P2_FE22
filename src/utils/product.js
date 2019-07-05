const isExist = (arr, product) => {
    return arr.findIndex(item => {
        return (
            item.id == product.id && item.color == product.color
            );
    })
}
export const addProduct = (arr,product) => {
    return arr.map(item => {
      return (
        item.id == product.id && item.color == product.color ? {...item, amount: item.amount + product.amount,price: item.price + product.price} : item
        );
    })
  }
export const selectProduct = (id) => {
    let recent = [];
    if(localStorage.getItem('recent') == null || localStorage.getItem('recent') == []){
        recent.push(id)
        localStorage.setItem('recent', recent)
        return recent;
    }else {
        recent = localStorage.getItem('recent').split(",").map(Number);
        recent.push(id)
        recent = recent.splice(-3, 3);
        localStorage.setItem('recent', recent);
        return recent;
    }
}
export const buyProduct = (product) => {
    let cart = [];
    if(localStorage.getItem('cart') == null){
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart))
        return cart;
    }else {
        cart = JSON.parse(localStorage.getItem('cart'))
        if(isExist(cart, product) > -1){
            cart = addProduct(cart, product);
        }else{
            cart = cart.concat(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        return cart;
    }
}
export const removeProduct = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart =  cart.filter(item => {
        return JSON.stringify(item) !== JSON.stringify(product)}
    );
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart;
}
export const convertArraytoQuery = (array) => {
    if(array.length == 0) return 'id';
    return array.map(item => `id=${item}&`).join("");
}
export const typeProduct = (data) => {
    let type = [];
    for(let item of data){
        type.push(item.type)
    }
    type = [...new Set([...type])]
    return type;
}
export const chart = (data) => {
    let newA = [], item;
    for(item of data){
        newA.push({day: item.day, order: item.order.length, price: item.price})
    }
    let rs = Object.values(newA.reduce((x, {day, order, price}) =>{
        x[day] = x[day] || {day, order, price : 0}
        x[day].order += order;
        x[day].price += price;
        return x;
    },{}))
    return rs;
}