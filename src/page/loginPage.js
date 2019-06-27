import React, { Component} from 'react';
import md5 from 'md5';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Form from '../components/Login_SignUp/form';
import Recommend from '../components/Login_SignUp/recommend';
import {loginForm, recommend} from '../components/variable/login_signin';
import callAPI from '../utils/apiCaller';
import {isExist} from '../utils/user';
import '../styles/login.css';
class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    onEnter = (e) => {
        if(e.key === 'Enter' || e.key == 'Tab'){
            if(e.target.name === 'Password'){
                this.setState({[e.target.name] : md5(e.target.value)})
            }else {
                this.setState({[e.target.name] : e.target.value})
            }
        }
    }
    onKeyUp = (e) => {
        if(e.target.name === 'Password'){
            this.setState({[e.target.name] : md5(e.target.value)})
        }else {
            this.setState({[e.target.name] : e.target.value})
        }
    }
    onSubmit = (e) => {
        const {Email, Password} = this.state;
        callAPI(`user/?Email=${Email}`, 'GET', null)
            .then(res => {
                let index = isExist(res.data, Email, Password);
                if(index !== -1){
                    localStorage.setItem(process.env.REACT_APP_USER_LOCAL,res.data[index].id)
                    this.props.history.push('/product')
                }else {
                    alert('Sai tài khoản hoặc mật khẩu !!!')
                }
            })
        e.preventDefault();
    }
    render(){
        const breadCrumb = ['đăng nhập'];
        return(
            <div>
                <BreadCrumb breadCrumb={breadCrumb}/>
                <section className='forms'>
                    <Form value={loginForm}
                        onEnter={this.onEnter}
                        onKeyUp={this.onKeyUp}
                        onSubmit={this.onSubmit}/>
                    <Recommend value={recommend}/>
                </section>
                <Footer />
            </div>
        );
    }
}
export default LoginPage