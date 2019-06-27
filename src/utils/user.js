import callAPI from './apiCaller';
import {addLocalStorage} from './countCart';
export const isExist = (arr, email, password) => {
    return arr.findIndex(item => {
        return (
            item.Email == email && item.Password == password
            );
    })
}
export const signOut = () => {
    const id = localStorage.getItem(process.env.REACT_APP_USER_LOCAL);
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    callAPI(`user/${id}`, 'PATCH', {
        cart: cartItem
    })
    localStorage.clear();
}
export const onPay = (func) => {
    const id = localStorage.getItem(process.env.REACT_APP_USER_LOCAL);
    if(id == null || id == []){
        alert("Bạn phải đăng nhập trước khi thanh toán !")
        window.location.href = '/login'
    }else {
        const cartItem = JSON.parse(localStorage.getItem('cart'));
        callAPI(`user/${id}`, 'PATCH', {
            cart: [],
            order: cartItem
        })
        func();
        localStorage.removeItem('cart')
        localStorage.removeItem(id);
    }
}
export const checkLocalStorage = (id, value, func) => {
    let cart = localStorage.getItem('cart');
    localStorage.setItem(process.env.REACT_APP_USER_LOCAL, id)
    if(cart == null || cart == []){
        localStorage.setItem('cart', JSON.stringify(value))
        localStorage.setItem(id, JSON.stringify(value))
        func([value]);
    }else {
        if(value === []){
            localStorage.setItem(id, localStorage.getItem('cart'))
            func([])
        }else {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let arr = addLocalStorage(cart, value);
            localStorage.setItem('cart', JSON.stringify(arr));
            func([arr])
        }
    }
}