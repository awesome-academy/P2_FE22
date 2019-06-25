import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as action from '../../actions/indexAction';
import {formatPrice} from '../../utils/formatPrice';
class AsideImage extends Component{
    selectProduct = (id) => {
		let recent = [];
        if(localStorage.getItem('recent') == null){
            recent.push(id)
            localStorage.setItem('recent', recent)
		}else {
			recent = localStorage.getItem('recent').split(",").map(Number);
            recent.push(id)
            recent = recent.splice(-3, 3);
            localStorage.setItem('recent', recent);
        }
		this.props.selectProduct(recent);
	}
    render(){
        const {aside, style} = this.props;
        return(
            <aside className="aside">
                <ul className="aside__list">
                    <li className="aside__list-item active">
                        <i className={style.iconTitle}></i>
                        <a className="aside__text">{style.title}</a>
                    </li>
                    {aside.map((item, index) => {
                        return(
                            <Link to={`/product/${item.id}`}
                                  onClick={() => this.selectProduct(item.id)}
                                  key={index}>
                                <li className="aside__list-item height-120" >
                                    <img className="aside__list-item--img" alt="#"
                                            src={process.env.PUBLIC_URL + item.img}
                                        />
                                    <div className="aside__list-item__content">
                                        <p className="aside__list-item__content--name">
                                        {item.title}</p>
                                        <p className="aside__list-item__content--price">
                                        {formatPrice(item.price)}<span> Đ</span></p>
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </aside>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
	return {
		selectProduct: (idProduct) => {
			dispatch(action.selectProduct(idProduct));
		}
	}
}
export default connect(null, mapDispatchtoProps)(AsideImage)