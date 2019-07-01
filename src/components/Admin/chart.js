import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import callAPI from '../../utils/apiCaller';
const def = [
  {
    name: '05-02', revenue: 3000, ad: 1231
  },
  {
    name: '05-03', revenue: 2100, ad: 6464
  },
  {
    name: '05-04', revenue: 2000, ad: 2422
  },
  {
    name: '05-05', revenue: 8456, ad: 4234
  },
  {
    name: '05-06', revenue: 6423, ad: 7657
  },
  {
    name: '05-07', revenue: 1231, ad: 6546
  },
  {
    name: '05-08', revenue: 5452, ad: 1321
  },
];
export default class Example extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
      arr: []
    }
  }
  componentDidMount(){
    callAPI('order', 'GET', null)
      .then(res => {
        let newA = [], item;
        for(item of res.data){
          newA.push({day: item.day, order: item.order.length, price: item.price})
        }
        let rs = Object.values(newA.reduce((x, {day, order, price}) =>{
          x[day] = x[day] || {day, order, price : 0}
          x[day].order += order;
          x[day].price += price;
          return x;
        
        },{}))
        this.setState({
          arr: rs
        })
      })
  }
  render() {
    return (
      <div>
        <LineChart
          width={1010}
          height={315}
          data={this.state.arr}
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
          data={this.state.arr}
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
