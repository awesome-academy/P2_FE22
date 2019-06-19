import React, {Component} from 'react';
export default class HeaderNavigation extends Component{
    render(){
        return(
            <div className="header__navigation--wrapper">
            <div className="header__navigation">
                <a className="header__navigation--social">
                    <i className="fa fa-facebook-f"></i></a>
                <a className="header__navigation--social">
                    <i className="fa fa-google"></i></a>
                <a className="header__navigation--social">
                    <i className="fa fa-instagram"></i></a>
                <a className="header__navigation--social">
                    <i className="fa fa-twitter"></i></a>
                <div className="header__navigation__form login">
                    <div className="login__btn">
                        <a title="Đăng kí">đăng kí</a></div>
                    <div className="login__btn">
                        <a title="Đăng nhập">đăng nhập</a></div>
                </div>
            </div>
          </div>
        ); 
    }  
}