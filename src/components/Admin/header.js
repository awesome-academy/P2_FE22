import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

    }
    render(){
        const {isHide} = this.state;
        return(
            <header className="header-dashboard">
                <img className="header__logo"
                     src={process.env.PUBLIC_URL + '/imgs/logo.png'}/>
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
export default Header;