import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
import * as cartAction from '../../actions/cartAction';
import {removeProduct} from '../../utils/product';
import {formatPrice} from '../../utils/formatPrice';
import Tablecell from '../Admin/tablecell';
import {sortArray} from '../../utils/filter';
import '../../styles/table.css'
class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            asc: true
        }
    }
    removeProduct = (product) => {
        this.props.removeProduct(removeProduct(product))
    }
    orderProduct = (value) => {
        this.setState({
            asc: !this.state.asc
        }, () => {
            this.props.orderProduct(value);
        })
    }
    componentWillReceiveProps(){
        this.setState({
            cart: JSON.parse(localStorage.getItem('cart')) || []
        })
    }
    render(){
        const {num, value, filter} = this.props;
        const {cart, asc} = this.state;
        const sorted = sortArray(cart, value, asc)
        return(
            <div>
            <table className='table-product font-14'>
                <thead className='table-head'>
                <tr className="table-row">
                    <th className="w-70">STT</th>
                    <th className="w-110">sản phẩm</th>
                    <Tablecell orderProduct={this.orderProduct}
                        type='title'>
                        tên
                    </Tablecell>
                    <Tablecell className="w-110"
                        orderProduct={this.orderProduct}
                        type='color'>
                        màu sắc
                    </Tablecell>
                    <Tablecell className="w-110"
                        orderProduct={this.orderProduct}
                            type='price'>
                        giá
                    </Tablecell>
                    <Tablecell className="w-110"
                        orderProduct={this.orderProduct}
                            type='amount'>
                        số lượng
                    </Tablecell>
                    
                    <th className="w-70">
                    </th>
                </tr>
                </thead>
                <tbody className="table-body">
                {sorted.slice(0, num).map((item, index) => {
                    return(
                    <tr key={index} className="table-row">
                        <td>{index + 1}</td>
                        <td>
                            <img
                            className='image-product'
                            src={process.env.PUBLIC_URL + item.img}/>
                        </td>
                        <td className="align-left">{item.title}</td>
                        <td className="align-left">{item.color}</td>
                        <td className='table-price align-left'>
                            {formatPrice(item.price)}
                            <span> Đ</span>
                        </td>
                        <td>
                            {item.amount}
                        </td>
                        
                        <td>
                            <p className="table-btn danger"
                                onClick={() => this.removeProduct(item)}>
                                <i className='fa fa-trash-o'></i>
                            </p>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        num : state.productReducer.num,
        value: state.productReducer.value,
        filter: state.productReducer.filter
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        removeProduct: (product) => {
            dispatch(cartAction.removeProduct(product))
        },
        showProduct: (num) => {
            dispatch(action.showProduct(num))
        },
        orderProduct: (value) => {
            dispatch(action.orderProduct(value))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Table)