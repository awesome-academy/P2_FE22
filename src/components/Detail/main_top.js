import React, {Component} from 'react';
class MainContentTop extends Component {
    stringToPriceFormated(num){
		return new Intl.NumberFormat('de-DE', { style: 'decimal', currency: 'VND' })
			.format(num)
	}
    render(){
        const {title, stars, rates, price} = this.props
        let star = [], emptyStar = [];
		for(let i = 0; i<stars; i++){
			star.push(<i className="fa fa-star card__evaluate-star" key={i}></i>)
		}
		for(let i = 0; i< (5 - stars ); i++){
			emptyStar.push(<i className="fa fa-star-o card__evaluate-star" key={i}></i>)
		}
        return(
            <div className="main-content--top">
              <p className="content__title">{title}</p>
              <div className="content__rate content__rate--inline">
                  {star}
                  {emptyStar}
                <p className="content__comment">({rates}) đánh giá</p>
                <a className="content__write" >gửi bình luận của bạn</a>
              </div>
              <p className="content__price">giá: {this.stringToPriceFormated(price)} Đ</p>
            </div>
        );
    }
}
export default MainContentTop