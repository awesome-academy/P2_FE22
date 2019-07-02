import React, {Component} from 'react';
import BreadCrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import ButtonTab from '../components/Profile/button';
import Cart from '../components/Profile/cart';
import Form from '../components/Profile/form';
import Order from '../components/Profile/order'
import '../styles/profile/profile.css'
class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 'profile',
            id: localStorage.getItem(process.env.REACT_APP_USER_LOCAL)
        }
    }
    setTab = (idTab) => {
        this.setState({
            tab: idTab
        })
    }
    render(){
        const breadCrumb = ['profile'];
        const {tab, id} = this.state
        return(
            <div className="profile">
                <BreadCrumb breadCrumb={breadCrumb}/>
                <div className="profile-content">
                    <ButtonTab  setTab={this.setTab}/>
                    <div className="tab">
                        {tab === 'profile' && <Form id={id}/>}
                        {tab === 'cart' && <Cart />}
                        {tab === 'order' && <Order />}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Profile;