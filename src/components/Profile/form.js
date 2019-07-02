import React, {Component} from 'react';
import md5 from 'md5'
import callAPI from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import '../../styles/profile/form.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: {}
        }
    }
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
        let {arr, ...object} = this.state;
        object = JSON.parse(JSON.stringify(object));
        callAPI(`user/${this.props.id}`, 'PATCH', object)
            .then(alert('Đã cập nhật !'))
    }
    componentDidMount(){
        callAPI(`user?id=${this.props.id}`, 'GET', null)
            .then(res => {
                this.setState({
                    arr: res.data[0]
                })
            })
    }
    render(){
        const {arr} = this.state;
        return (
            <div className="form">
                <div className='form-block mt-20'>
                    <label  className='form-block__label'
                            htmlFor='Name'>Họ và tên :</label>
                    <input  className='form-block__input'
                            name='Name'
                            type='text'
                            id='Name'
                            defaultValue={arr.Name}
                            onKeyDown={this.onEnter}
                             onKeyUp={this.onKeyUp}
                            required/>
                </div>
                <div className='form-block mt-20'>
                    <label  className='form-block__label'
                            htmlFor='Email'>Email :</label>
                    <input  className='form-block__input'
                            name='Email'
                            type='email'
                            id='Email'
                            defaultValue={arr.Email}
                            onKeyDown={this.onEnter}
                             onKeyUp={this.onKeyUp}
                            required/>
                </div>
                <div className='form-block'>
                    <label  className='form-block__label'
                            htmlFor='Phone'>Số điện thoại :</label>
                    <input  className='form-block__input'
                            name='Phone'
                            type='tel'
                            id='Phone'
                            defaultValue={arr.Phone}
                            onKeyDown={this.onEnter}
                             onKeyUp={this.onKeyUp}
                            required/>
                </div>
                <div className='form-block'>
                    <label  className='form-block__label'
                            htmlFor='Address'>Địa chỉ :</label>
                    <input  className='form-block__input'
                            name='Address'
                            type='text'
                            id='Address'
                            defaultValue={arr.Address}
                            onKeyDown={this.onEnter}
                             onKeyUp={this.onKeyUp}
                            required/>
                </div>
                <div className='form-block'>
                    <label  className='form-block__label'
                            htmlFor='Password'>Mật khẩu :</label>
                    <input  className='form-block__input'
                            name='Password'
                            type='password'
                            id='Password'
                            onKeyDown={this.onEnter}
                             onKeyUp={this.onKeyUp}
                            required/>
                </div>
                <div className='form__button'>
                    <Link className="form__button--dark"
                            onClick={this.onSubmit}>
                                Cập nhật
                    </Link>
                </div>
            </div>
        )
    }
}
export default Form