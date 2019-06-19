import React, {Component} from 'react';
class ProductCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="product__card">
					<div className="card">
						<img className="card__img" src={this.props.img.toString()} />
						<h3 className="card__price"> {this.props.price} <span> Đ</span></h3>
						<p className="card__title"> {this.props.title} </p>
						<div className="card__evaluate">
							<i className="fas fa-star card__evaluate-star"></i>
							<i className="fas fa-star card__evaluate-star"></i>
							<i className="fas fa-star card__evaluate-star"></i>
							<i className="fas fa-star card__evaluate-star"></i>
							<p className="card__evaluate-rate">({this.props.rates}) đánh giá</p>
						</div>
						<div className="card__btn">
							<a className="card__btn--buy" href="#" value="{this.props.id}" >mua ngay</a>
							<a className="card__btn--info" href="#">xem chi tiết</a>
						</div>
					</div>
				</div>
        );
    }
}
export default ProductCard