import React, { Component} from 'react';
import md5 from 'md5';
import {connect} from 'react-redux';
import * as loginAction from '../actions/loginAction';
import * as cartAction from '../actions/cartAction';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Form from '../components/Login_SignUp/form';
import Recommend from '../components/Login_SignUp/recommend';
import {loginForm, recommend} from '../components/variable/login_signin';
import callAPI from '../utils/apiCaller';
import {isExist, checkLocalStorage} from '../utils/user';
import '../styles/login.css';
class LoginPage extends Component {
    onEnter = (e) => {
        if(e.key === 'Enter' || e.key === 'Tab'){
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
                    if(res.data[index].rule === 'user'){
                        this.props.isLogin();
                        checkLocalStorage(res.data[index].id,
                                            res.data[index].cart,
                                            res.data[index].order,
                                            this.props.buyProduct)
                        this.props.history.push('/product')
                    }else{
                        this.props.isAdmin()
                        this.props.history.push('/dashboard')
                    }
                    
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
const mapDispatchtoProps = (dispatch, props) => {
    return {
        isLogin: () => {
            dispatch(loginAction.isLogin())
        },
        isAdmin: () => {
            dispatch(loginAction.isAdmin())
        },
        buyProduct: (product) => {
            dispatch(cartAction.buyProduct(product))
        }
    }
}
export default connect(null, mapDispatchtoProps)(LoginPage)