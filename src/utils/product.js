export const selectProduct = (id) => {
    let recent = [];
    if(localStorage.getItem('recent') == null){
        recent.push(id)
        localStorage.setItem('recent', JSON.stringify(recent))
        return recent;
    }else {
        recent = JSON.parse(localStorage.getItem('recent'));
        recent.push(id)
        recent = recent.splice(-3, 3);
        localStorage.setItem('recent', JSON.stringify(recent));
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
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart))
        return cart;
    }
}