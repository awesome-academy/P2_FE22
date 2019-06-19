import React, {Component} from 'react';
import HeaderNavigation from './Header/header_navigation';
import HeaderCenter from './Header/header_center';
import HeaderNavbar from './Header/header_navbar';
class Header extends Component {
    render(){
        return(
            <header className='header'>
                <HeaderNavigation />
                <HeaderCenter />
                <HeaderNavbar />
            </header>
        );
    }
}
export default Header