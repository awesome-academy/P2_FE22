import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as adminAction from '../../actions/adminAction';
import {chart} from '../../utils/product';
class Example extends PureComponent {
  componentDidMount(){
    if(this.props.orders.length === 0){
        this.props.getOrderRequest();
    }
  }
    render() {
        const rs = chart(this.props.orders)
        return (
            <div>
                <LineChart
                    width={1010}
                    height={315}
                    data={rs}
                    margin={{
                    top: 30, right: 30, left: 20, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#ffa600" activeDot={{ r: 1 }} />
                </LineChart>
                <LineChart
                    width={1010}
                    height={315}
                    data={rs}
                    margin={{
                    top: 30, right: 30, left: 20, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="order" stroke="#003f5c" activeDot={{ r: 1 }} />
                </LineChart>
            </div>
        );
}
}
const mapStatetoProps = (state) => {
    return {
        orders: state.adminReducer.orders
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getOrderRequest: () => {
            dispatch(adminAction.getOrderRequest());
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Example);
