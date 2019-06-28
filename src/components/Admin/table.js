import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
import callAPI from '../../utils/apiCaller';
import {formatPrice} from '../../utils/formatPrice';
import Show from './show';
import Tablecell from './tablecell';
import {sortArray, filterArray} from '../../utils/filter';
import '../../styles/table.css'
class Table extends Component {
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
        callAPI(`product/${id}/`, 'DELETE', null)
            .then(
                alert('Sản phẩm đã được xóa !')
            )
    }
    componentDidMount(){
        callAPI('product', 'GET', null)
            .then(res => {
                this.setState({
                    arr: res.data
                })
            })
    }
    render(){
        const {num, value, filter} = this.props;
        const {arr, asc} = this.state;
        const sorted = sortArray(filterArray(arr, filter), value, asc)
        return(
            <div>
                <Show event={this.props.showProduct}/>
            <table className='table-product'>
                <thead className='table-head'>
                <tr className="table-row">
                    <th className="w-70">STT</th>
                    <th className="w-70">sản phẩm</th>
                    <Tablecell orderProduct={this.orderProduct}
                        type='title'>
                        tên
                    </Tablecell>
                    <Tablecell orderProduct={this.orderProduct}
                        type='type'>
                        loại
                    </Tablecell>
                    <Tablecell className="w-110"
                        orderProduct={this.orderProduct}
                            type='price'>
                        giá
                    </Tablecell>
                    <Tablecell className="w-70"
                        orderProduct={this.orderProduct}
                            type='stars'>
                        đánh giá
                    </Tablecell>
                    <Tablecell className="w-70"
                        orderProduct={this.orderProduct}
                            type='rates'>
                        bình luận
                    </Tablecell>
                    <Tablecell className="w-70"
                        orderProduct={this.orderProduct}
                            type='status'>
                        tình trạng
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
                        <td className="align-left">{item.type}</td>
                        <td className='table-price align-left'>
                            {formatPrice(item.price)}
                            <span> Đ</span>
                        </td>
                        <td>
                            {item.stars}
                        </td>
                        <td>
                            {item.rates}
                        </td>
                        <td>
                            {item.status ? <p className='table-btn success'>còn hàng</p> : <p className='table-btn danger'>hết hàng</p>}
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
        filter: state.productReducer.filter,
        isGrid: state.productReducer.isGrid
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
export default connect(mapStatetoProps, mapDispatchtoProps)(Table)