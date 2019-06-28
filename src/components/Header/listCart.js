import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/cartAction';
import {formatPrice} from '../../utils/formatPrice';
import {removeProduct} from '../../utils/product';
import {onPay} from '../../utils/user';
import '../../styles/listCart.css';
class ListCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || []
        }
    }
    removeProduct = (product) => {
        this.props.removeProduct(removeProduct(product))
    }
    onPay = () => {
        onPay(this.props.isPayment);
    }
    componentWillReceiveProps(){
        this.setState({
            cart: JSON.parse(localStorage.getItem('cart')) || []
        })
    }
    render(){
        let total = 0;
        const {cart} = this.state;
        return(
            <ul className="list-cart">
                {cart.map((item, index) => {
                    total += item.price;
                    return(
                        <li className="list-cart__item" key={index}>
                            <img className='list-cart__img'
                                src={process.env.PUBLIC_URL + item.img}/>
                            <h3 className="list-cart__amount">{item.amount}</h3>
                            <div className='list-cart__content'>
                                <p className='list-cart__title'>{item.title}</p>
                                <p className='list-cart__price'>
                                    {formatPrice(item.price)}
                                    <span> Đ</span>
                                </p>
                            </div>
                            <a className="list-cart__remove"
                                onClick={() => this.removeProduct(item)}>x</a>
                        </li>
                    )
                })}
                <li className="list-cart__item">
                    <a className="list-cart__name">tổng : </a>
                    <a className='list-cart__total'>{formatPrice(total)}
                        <span> Đ</span></a>
                </li>
                <li className="list-cart__item">
                    <a className='list-cart__btn'
                        onClick={this.onPay}>thanh toán</a>
                </li>
            </ul>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        removeProduct: (product) => {
            dispatch(action.removeProduct(product))
        },
        isPayment: () => {
            dispatch(action.isPayment())
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ListCart)