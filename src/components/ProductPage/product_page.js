import React, {Component} from 'react';
export default class ProductPage extends Component{
    render(){
        return(
            <div className="product-grid__page">
                <a className="product-grid__page--link" href="#">trang trước</a>
                <a className="product-grid__page--link" href="#">1</a>
                <a className="product-grid__page--link" href="#">2</a>
                <a className="product-grid__page--link" href="#">3</a>
                <a className="product-grid__page--link" href="#">trang cuối</a>
            </div>
        );
    }
}