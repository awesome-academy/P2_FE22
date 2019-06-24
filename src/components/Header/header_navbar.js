import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class HeaderNavbar extends Component{
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
                        <a className="header__navbar--link">
                            <i className="header__navbar__cart fa fa-shopping-basket"></i>
                        </a>
                </div>
            </div>
        );
    }
}