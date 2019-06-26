import React, {Component} from 'react';
import {countCart} from '../../utils/countCart';
import {connect} from 'react-redux';
import ListCart from './listCart';
class CartNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHide: true
        }
    }
    onClick = () => {
        this.setState({
            isHide: !this.state.isHide
        })
    }
    render(){
        const {isHide} = this.state;
        const count = countCart(JSON.parse(localStorage.getItem('cart')))
        return(
            <div>
                <i className="header__navbar__cart fa fa-shopping-basket"
                onClick={this.onClick}>
                <p className="cart-count">{count}</p>
                
                </i>
                {!isHide && <ListCart/>}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
}
export default connect(mapStatetoProps, null)(CartNumber);