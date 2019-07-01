import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
import callAPI from '../../utils/apiCaller';
import ProductItem from './productItem';
import {formatPrice} from '../../utils/formatPrice';
import Show from './show';
import Tablecell from './tablecell';
import {sortUser, filterArray} from '../../utils/filter';
import '../../styles/table.css'
class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: [],
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
        callAPI(`${this.props.endpoint}`, 'GET', null)
            .then(res => {
                this.setState({
                    arr: res.data
                })
            })
    }
    render(){
        const {num, value, filter} = this.props;
        const {arr, asc} = this.state;
        const sorted = sortUser(filterArray(arr, filter), value, asc)
        return(
            <div>
                <Show event={this.props.showProduct}/>
                <table className='table-product font-13'>
                    <thead className='table-head'>
                        <tr className="table-row">
                            <th className="w-40">STT</th>
                            <Tablecell className="w-110"
                                orderProduct={this.orderProduct}
                                type='Name'>
                                tên
                            </Tablecell>
                            <Tablecell className="w-110" 
                                orderProduct={this.orderProduct}
                                type='Email'>
                                email
                            </Tablecell>
                            <Tablecell className="w-110"
                                orderProduct={this.orderProduct}
                                type='Phone'>
                                phone
                            </Tablecell>
                            <Tablecell className="w-110"
                                orderProduct={this.orderProduct}
                                type='Address'>
                                address
                            </Tablecell>
                            <Tablecell
                                orderProduct={this.orderProduct}
                                type='order'>
                                order
                            </Tablecell>
                            <Tablecell className="w-70"
                                orderProduct={this.orderProduct}
                                type='rule'>
                                Rule
                            </Tablecell>
                            <th className="w-70"></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {sorted.slice(0, num).map((item, index) => {
                            return(
                                <tr key={index} className="table-row">
                                    <td>{index + 1}</td>
                                    <td className="align-left">{item.Name}</td>
                                    <td className="align-left word-break">{item.Email}</td>
                                    <td className='align-left'>{item.Phone}</td>
                                    <td>{item.Address}</td>
                                    <td>
                                        {item.order !== [] && item.order.map((item, i) => {
                                                return item.orderItem.map((item, i) => {
                                                    return(
                                                        <ProductItem
                                                            key={i}
                                                            src={item.img}
                                                            name={item.title}
                                                            price={formatPrice(item.price)}
                                                            amount={item.amount}/>
                                                    );
                                                })
                                            })}
                                    </td>
                                    <td>
                                        {item.rule === 'user' ? <p className='table-btn success'>user</p> : <p className='table-btn danger'>admin </p>}
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
        num : state.productReducer.num,
        value: state.productReducer.value,
        filter: state.productReducer.filter
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
export default connect(mapStatetoProps, mapDispatchtoProps)(User)