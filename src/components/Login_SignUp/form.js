import React, { Component} from 'react';
import { Link } from 'react-router-dom';
class Form extends Component {
    render(){
        const {id, title, input, isCheck, Check, isPass, btn} = this.props.value;
        return(
            <div className='login-form' id={id}>
                <h2 className="login-form__title">{title} :</h2>
                <div className='form-grid'>
                    {input.map((item, index) => {
                        return(
                            <div className='form-group' key={index}>
                                <label className='form-group__label' for={item.id}>{item.label} :</label>
                                <input className='form-group__input' id={item.id} type={item.type}/>
                            </div>
                        );
                    })}
                </div>
                {isCheck && <input className="form-checkbox--mt40" id="formcheck" type="checkbox"/>}
                {isCheck && <label className="form-checkbox" id="labelCheckbox" for="formcheck">{Check}</label>}
                {isPass && <a className="miss-pass--link" href="javascript:void(0)">bạn quên mật khẩu ?</a>}
                {btn && <div className='form__btn'>
                    {btn[0] && <Link className="form__btn--dark" to={btn[0].url}>{btn[0].name}</Link>}
                    {btn[1] && <Link className="form__btn--bright" to={btn[1].url}>{btn[1].name}</Link>}
                </div>}
            </div>
        );
    }
}
export default Form