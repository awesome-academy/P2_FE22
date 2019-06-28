import React, { Component} from 'react';
import md5 from 'md5';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Form from '../components/Login_SignUp/form';
import {infoForm, signUp} from '../components/variable/login_signin';
import callAPI from '../utils/apiCaller';
import shortid from 'shortid';
import '../styles/signup.css';
class SignUpPage extends Component {
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
        const data = Object.assign(this.state,{
            id: shortid.generate(),
            rule: 'user',
            cart: [],
            order: []
        })
        alert('Đăng kí thành công')
        callAPI('user', 'POST', data)
            .then(
                localStorage.setItem(process.env.REACT_APP_USER_LOCAL,data.id)
            )
            .then(
                localStorage.setItem(process.env.REACT_APP_ORDER_LOCAL,'[]')
            )
    }
    render(){
        const breadCrumb = ['đăng kí'];
        return(
            <div>
                <BreadCrumb breadCrumb={breadCrumb}/>
                <section className='signin'>
                    <Form value={infoForm}
                            onEnter={this.onEnter}
                            onKeyUp={this.onKeyUp}/>
                    <Form value={signUp}
                            onEnter={this.onEnter}
                            onKeyUp={this.onKeyUp}
                            onSubmit={this.onSubmit}/>
                </section>
                <Footer />
            </div>
        );
    }
}
export default SignUpPage