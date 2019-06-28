import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CartNumber from './cartNumber';
import UserIcon from './userIcon';
class HeaderNavbar extends Component{
    state = {
        class: 'header__navbar__menu'
    }
    myFunc = () => {
        if(this.refs.collapse.className === 'navbar__menu'){
            this.setState({
                class: 'navbar__menu responsive'
            })
        }else{
            this.setState({
                class: 'navbar__menu'
            })
        }
    }
    render(){
        const {isLogin} = this.props;
        return(
            <div className="header__navbar--wrapper">
                <div className="header__navbar">
                <nav className={this.state.class} id="collapse" ref='collapse'>
                        <a className="header__navbar__menu-item" onClick={() => this.myFunc()}>
                            <i className="fa fa-bars"></i></a>
                        <a className="header__navbar__menu-item" >trang chủ</a>
                        <a className="header__navbar__menu-item" >giới thiệu</a>
                        <Link className="header__navbar__menu-item" to="/product">sản phẩm</Link>
                        <a className="header__navbar__menu-item" >tin khuyến mại</a>
                        <a className="header__navbar__menu-item" >dịch vụ</a>
                        <a className="header__navbar__menu-item" >liên hệ</a></nav>
                        {isLogin && <a className="header__navbar--link flex-auto">
                            <UserIcon/>
                        </a>}
                        <a className="header__navbar--link">
                            <CartNumber/>
                        </a>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isLogin: state.loginReducer.isLogin
    }
}
export default connect(mapStatetoProps, null)(HeaderNavbar)