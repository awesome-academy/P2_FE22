import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
import * as adminAction from '../../actions/adminAction';
import callAPI from '../../utils/apiCaller';
import ProductItem from './productItem';
import {formatPrice} from '../../utils/formatPrice';
import Show from './show';
import Tablecell from './tablecell';
import {sortOrder} from '../../utils/filter';
import '../../styles/table.css'
class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            asc: true
        }
    }
    orderProduct = (value) => {
        this.setState({
            asc: !this.state.asc
        }, () => {
            this.props.orderProduct(value);
        })
    }
    updateProduct = (product) => {
        console.log(product)
    }
    deleteProduct = (id) => {
        callAPI(`${this.props.endpoint}/${id}/`, 'DELETE', null)
            .then(
                alert('Sản phẩm đã được xóa !')
            )
    }
    componentDidMount(){
        if(this.props.orders.length === 0){
            this.props.getOrderRequest();
        }
    }
    render(){
        const {num, value, orders} = this.props;
        const {asc} = this.state;
        const sorted = sortOrder(orders, value, asc)
        return(
            <div>
                <Show event={this.props.showProduct}/>
                <table className='table-product'>
                    <thead className='table-head'>
                        <tr className="table-row">
                            <th className="w-70">STT</th>
                            <Tablecell className="w-110"
                                orderProduct={this.orderProduct}
                                type='id'>
                                ID
                            </Tablecell>
                            <Tablecell
                                orderProduct={this.orderProduct}
                                type='order'>
                                order
                            </Tablecell>
                            <Tablecell className="w-70"
                                orderProduct={this.orderProduct}
                                type='day'>
                                day
                            </Tablecell>
                            <Tablecell className="w-70"
                                orderProduct={this.orderProduct}
                                    type='time'>
                                time
                            </Tablecell>
                            <Tablecell className="w-110"
                                orderProduct={this.orderProduct}
                                type='price'>
                                total
                            </Tablecell>
                            <th className="w-70"></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {sorted.slice(0, num).map((item, index) => {
                            return(
                                <tr key={index} className="table-row">
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>
                                        {item.order.map((item, i) => {
                                            return(
                                                <ProductItem
                                                    key={i}
                                                    src={item.img}
                                                    name={item.title}
                                                    price={formatPrice(item.price)}
                                                    amount={item.amount}/>
                                            );
                                        })}
                                    </td>
                                    <td>{item.day}</td>
                                    <td>{item.time}</td>
                                    <td className='table-price align-left'>
                                        {formatPrice(item.price)}
                                        <span> Đ</span>
                                    </td>
                                    <td>
                                        <p className="table-btn success mr-5"
                                            onClick={() => this.updateProduct(item)}>
                                            <i className="fa fa-pencil "></i>
                                        </p>
                                        <p className="table-btn danger"
                                            onClick={() => this.deleteProduct(item.id)}>
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
        orders: state.adminReducer.orders,
        num : state.productReducer.num,
        value: state.productReducer.value,
        filter: state.productReducer.filter
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getOrderRequest: () => {
            dispatch(adminAction.getOrderRequest())
        },
        showProduct: (num) => {
            dispatch(action.showProduct(num))
        },
        orderProduct: (value) => {
            dispatch(action.orderProduct(value))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Order)