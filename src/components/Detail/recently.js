import React, {Component} from 'react';
import getRecentlyProduct from '../../utils/apiCaller';
import ProductCard from '../ProductPage/product_card';
import {connect} from 'react-redux';
class Rencently extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
    }
    convertArraytoQuery = (array) => {
        if(array.length == 0) return 'id';
        return array.map(item => `id=${item}&`).join("");
    }
    componentDidMount(){
        const query = this.convertArraytoQuery(this.props.recently);
        const endpoint = `product?${query}`;
        getRecentlyProduct(endpoint, 'GET', null)
            .then(res => {
                this.setState({
                    arr: res.data
                })
            })
    }
    render(){
        const {arr} = this.state;
        return(
            <div className="product-grid__content">
                {arr.map((item, index) => {
                    return <ProductCard
                            key={index}
                            data={item}/>
                })}
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        recently: state.cartReducer.recently
    }
}
export default connect(mapStatetoProps, null)(Rencently)