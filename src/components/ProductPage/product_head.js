import React, {Component} from 'react';
import ProductOption from './product_option';
import { order, show } from '../variable/option';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class ProductHead extends Component{
    onClickGrid = () => {
        this.props.changeStyle(true);
    }
    onClickList = () => {
        this.props.changeStyle(false);
    }
    render(){
        const {classN} = this.props;
        return(
            <div className={`${classN}__head`}>
                <ProductOption option={order} event={this.props.orderProduct} classN={classN}/>
                <ProductOption option={show} event={this.props.showProduct} classN={classN}/>
                <div className={`${classN}__list-type`}>
                    <i className={`fa fa-bars ${classN}__list-type--item`}
                        onClick={this.onClickList}></i>
                    <i className={`fa fa-th ${classN}__list-type--item`}
                        onClick={this.onClickGrid}></i>
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
        },
        changeStyle: (isGrid) => {
            dispatch(action.changeStyle(isGrid));
        }

    }
}
export default connect(null, mapDispatchtoProps)(ProductHead)