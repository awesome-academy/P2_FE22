import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as loginAction from '../../actions/loginAction';
import '../../styles/header.css'
class Header extends Component {
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
        this.props.isLogout();
        window.location.href = '/';
    }
    render(){
        const {isHide} = this.state;
        return(
            <header className="header-dashboard">
                <img className="header__logo"
                     src={process.env.PUBLIC_URL + '/imgs/logo.png'}
                     alt="#"/>
                    <div className="relative">
                        <i className="header__user fa fa-user-circle"
                            onClick={this.onClick}></i>
                        {!isHide && <ul className='list-cart'>
                            <li className="list-cart__item">
                                <Link className='list-cart__btn'
                                    onClick={this.signOut}>Đăng xuất</Link>
                            </li>
                        </ul>}
                    </div>
            </header>
        )
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        isLogout: () => {
            dispatch(loginAction.isLogout())
        }
    }
}
export default connect(null, mapDispatchtoProps)(Header);