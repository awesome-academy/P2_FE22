import React, {Component} from 'react';
import ProductOption from './product_option';
import { order, show } from '../variable/option';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class ProductHead extends Component{
    render(){
        return(
            <div className="product-grid__head">
                <ProductOption option={order} event={this.props.orderProduct}/>
                <ProductOption option={show} event={this.props.showProduct}/>
                <div className="product-grid__list-type">
                    <i className="fa fa-bars product-grid__list-type--item"></i>
                    <i className="fa fa-th product-grid__list-type--item"></i>
                </div>
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        showProduct: (num) => {
            dispatch(action.showProduct(num))
        },
        orderProduct: (value) => {
            dispatch(action.orderProduct(value))
        }
    }
}
export default connect(null, mapDispatchtoProps)(ProductHead)