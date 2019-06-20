import React, {Component} from 'react';
import ProductCard from './product_card';
import {connect} from 'react-redux';
import getProductAPI from './../../utils/apiCaller';
class ProductContent extends Component{
    state = {
        arr: []
    }
    componentDidMount(){
       getProductAPI('product','GET', null).then(res => {
           this.setState({
               arr: res.data
           })
       })
    }
    render(){
        const {arr} = this.state;
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