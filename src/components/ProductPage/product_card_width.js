import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as action from '../../actions/indexAction';
class ProductCardWidth extends Component {
    constructor(props){
        super(props);
	}
	stringToPriceFormated(num){
		return new Intl.NumberFormat('de-DE', { style: 'decimal', currency: 'VND' }).format(num)
	
    }
    selectProduct = (id) => {
		this.props.selectProduct(id);
	}
    render(){
		const {data} = this.props;
		let stars = [], emptyStar = [];
		for(let i = 0; i<data.stars; i++){
			stars.push(<i className="fa fa-star card__evaluate-star" key={i}></i>)
		}
		for(let i = 0; i< (5 - data.stars ); i++){
			emptyStar.push(<i className="fa fa-star-o card__evaluate-star" key={i}></i>)
		}
        return(
            <div className="card-width">
                <div className="card">
                    <div className="card__img">
                        <img className="card__img-img" src={process.env.PUBLIC_URL + data.img}
                                alt="#"/>
                    </div>
                    <div className="card__content">
                        <p className="card__title"> {data.title} </p>
                        <div className="card__evaluate">
                            {stars}
                            {emptyStar}
                            <p className="card__evaluate-rate">({data.rates}) đánh giá</p>
                        </div>
                        <p className="card__text">{data.shortDescription}</p>
                        <h3 className="card__price"> {this.stringToPriceFormated(data.price)} <span> Đ</span></h3>
                        <div className="card__btn">
                            <a className="card__btn--buy" href="#" value="{data.id}" >mua ngay</a>
                            <Link className="card__btn--info" to={`/product/${data.id}`}
								onClick={() => this.selectProduct(data.id)}>xem chi tiết</Link>
                        </div>
                    </div>
                </div>
            </div>
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
export default connect(null, mapDispatchtoProps)(ProductCardWidth)