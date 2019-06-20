import React, {Component} from 'react';
import ProductCard from './product_card';
import {connect} from 'react-redux';
class ProductContent extends Component{
    componentWillMount(){
        
    }
    render(){
        
        const {arr} = this.props;
        return(
            <div className="product-grid__content" id="product-grid__content">
                {arr.map((item, index) => <ProductCard data={item} key={index}/>)}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        arr : state.productReducer
    }
}
export default connect(mapStatetoProps)(ProductContent)