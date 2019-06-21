import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to='/signup' title="Đăng kí">đăng kí</Link></div>
                    <div className="login__btn">
                        <Link to='login' title="Đăng nhập">đăng nhập</Link></div>
                </div>
            </div>
          </div>
        ); 
    }  
}