import React, {Component} from 'react';
import ProductHead from './product_head';
import ProductContent from './product_content';
import ProductPage from './product_page';
export default class ProductGrid extends Component{
    render(){
        return(
            <div className="newreceive-grid">
                <ProductHead />
                <ProductContent />
                <ProductPage />
            </div>
        );
    }
}