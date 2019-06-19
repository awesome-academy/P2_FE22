import React, {Component} from 'react';
import ProductOption from './product_option';
export default class ProductHead extends Component{
    render(){
        const order = {
            title: 'Sắp xếp theo:',
            item: [
                "Tên sản phẩm",
                "Giá",
                "Đánh giá",
                "Tình trạng",
                "Thời gian"
            ]
        }
        const show = {
            title: 'Show:',
            item: [5,10,20,50]
        }
        return(
            <div className="product-grid__head">
                <ProductOption option={order} />
                <ProductOption option={show} />
                <div className="product-grid__list-type">
                    <i className="fa fa-bars product-grid__list-type--item"></i>
                    <i className="fa fa-th product-grid__list-type--item"></i>
                </div>
            </div>
        );
    }
}