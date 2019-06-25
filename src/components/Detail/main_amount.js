import React, {Component} from 'react';
import * as action from '../../actions/cartAction';
import {connect} from 'react-redux';
import {buyProduct} from '../../utils/product';
class MainContentAmount extends Component {
	buyProduct = (product) => {
        this.props.buyProduct(buyProduct(product))
    }
    render(){
        const {option} = this.props
        return(
            <div>
                <div className="main-content--select">
                    <div>
                        <p className="select__title">Màu sắc:</p>
                        <select className="select__option"
                                ref='color'>
                            <option value={option[0]}>-- Chọn màu --</option>
                            {option.map((item, index) => {
                                return <option key={index} value={item}>{item}
                                </option>
                                })}
                        </select>
                    </div>
                </div>
                <div className="main-content--amount">
                    <input  className="content__amount"
                            type="number"
                            min="1"
                            max="10"
                            ref='amount'/>
                    <a className="content__btn"
                        onClick={() => this.buyProduct({
                            id: this.props.id,
                            color: this.refs.color.value,
                            amout: Number(this.refs.amount.value) || 1})
                        }>mua ngay</a>
                </div>
            </div> 
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        buyProduct: (product) => {
            dispatch(action.buyProduct(product))
        }
    }
}
export default connect(null, mapDispatchtoProps)(MainContentAmount)