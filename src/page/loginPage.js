import React, { Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Form from '../components/Login_SignUp/form';
import Recommend from '../components/Login_SignUp/recommend';
import {loginForm, recommend} from '../components/variable/login_signin';
import '../styles/login.css';
class LoginPage extends Component {
    render(){
        return(
            <div>
                <BreadCrumb breadCrumb='đăng nhập'/>
                <section className='forms'>
                    <Form value={loginForm}/>
                    <Recommend value={recommend}/>
                </section>
                <Footer />
            </div>
        );
    }
}
export default LoginPage