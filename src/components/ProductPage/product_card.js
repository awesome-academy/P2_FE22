import React, {Component} from 'react';
class ProductCard extends Component {
    constructor(props){
        super(props);
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
            <div className="product__card">
					<div className="card">
						<img className="card__img" src={process.env.PUBLIC_URL + data.img} />
						<h3 className="card__price"> {data.price} <span> Đ</span></h3>
						<p className="card__title"> {data.title} </p>
						<div className="card__evaluate">
							{stars}
							{emptyStar}
							<p className="card__evaluate-rate">({data.rates}) đánh giá</p>
						</div>
						<div className="card__btn">
							<a className="card__btn--buy" href="#" value="{data.id}" >mua ngay</a>
							<a className="card__btn--info" href="#">xem chi tiết</a>
						</div>
					</div>
				</div>
        );
    }
}
export default ProductCard