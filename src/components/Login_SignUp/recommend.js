import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Recommend extends Component{
    render(){
        const {value} = this.props;
        return(
            <div className="login-recommend">
                <h2 className="login-recommend__title">{value.title}</h2>
                <p className="login-recommend__text">{value.text}.</p>
            <div className="login-recommend__btn">
                <Link className="login-recommend__btn--bright"
                      to={value.btn[0].url}>{value.btn[0].name}
                </Link>
            </div>
        </div>
        );
    }
}
export default Recommend