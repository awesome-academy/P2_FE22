import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as loginAction from '../../actions/loginAction';
import * as cartAction from '../../actions/cartAction';
import '../../styles/listCart.css';
import {signOut,onPay} from '../../utils/user';
class UserIcon extends Component {
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
    signOut = () => {
        signOut();
        this.props.isLogout();
        this.props.isAdmin();
        this.props.isPayment();
        this.setState({
            isHide: !this.state.isHide
        })
    }
    onPay = () => {
        onPay(this.props.isPayment);
        this.setState({
            isHide: !this.state.isHide
        })
    }
    render(){
        const {isHide} = this.state;
        return(
            <div>
                <i className="header__navbar__cart fa fa-user-circle"
                    onClick={this.onClick}></i>
                {!isHide && <ul className='list-cart'>
                    <li className="list-cart__item">
                        <a className='list-cart__btn'>Edit Profile</a>
                    </li>
                    <li className="list-cart__item">
                        <Link className='list-cart__btn'
                            onClick={this.signOut}>Đăng xuất</Link>
                    </li>
                    <li className="list-cart__item">
                        <a className='list-cart__btn'
                            onClick={this.onPay}>thanh toán</a>
                    </li>
                </ul>}
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        isLogout: () => {
            dispatch(loginAction.isLogout())
        },
        isAdmin: () => {
            dispatch(loginAction.isAdmin())
        },
        isPayment: () => {
            dispatch(cartAction.isPayment())
        }
    }
}
export default connect(null, mapDispatchtoProps)(UserIcon);