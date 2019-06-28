import callAPI from './apiCaller';
import {addLocalStorage} from './countCart';
import shortid from 'shortid';
var date = new Date();
export const onOrder = (idUser) => {
    const order = JSON.parse(localStorage.getItem('cart'));
    const price = order.reduce((first, next) => first + next.price, 0);
    callAPI('order', 'POST', {
        id: shortid.generate(),
        idUser: idUser,
        order: order,
        price: price,
        day: `${date.getMonth()}-${date.getDate()}`,
        time: `${date.getHours()}-${date.getMinutes()}`
    }).then( alert('Thanh toán thành công !'))
}
export const isExist = (arr, email, password) => {
    return arr.findIndex(item => {
        return (
            item.Email == email && item.Password == password
            );
    })
}
export const signOut = () => {
    const id = localStorage.getItem(process.env.REACT_APP_USER_LOCAL);
    const cartItem = JSON.parse(localStorage.getItem('cart')) || [];
    callAPI(`user/${id}`, 'PATCH', {
        cart: cartItem
    })
    localStorage.clear();
}
export const onPay = (func) => {
    const id = localStorage.getItem(process.env.REACT_APP_USER_LOCAL);
    const order = JSON.parse(localStorage.getItem(process.env.REACT_APP_ORDER_LOCAL))
    if(id == null || id == []){
        alert("Bạn phải đăng nhập trước khi thanh toán !")
        window.location.href = '/login'
    }else {
        const cartItem = JSON.parse(localStorage.getItem('cart'));
        callAPI(`user/${id}`, 'PATCH', {
            cart: [],
            order: [...order, {
                day: `${date.getMonth()}-${date.getDate()}`,
                time: `${date.getHours()}-${date.getMinutes()}`,
                orderItem: cartItem
            }]
        }).then( onOrder(id) )
        func();
        localStorage.removeItem('cart')
        localStorage.removeItem(id);
    }
}
export const checkLocalStorage = (id, value, order, func) => {
    let cart = localStorage.getItem('cart');
    localStorage.setItem(process.env.REACT_APP_USER_LOCAL, id)
    localStorage.setItem(process.env.REACT_APP_ORDER_LOCAL,JSON.stringify(order))
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
