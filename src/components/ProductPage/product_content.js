import React, {Component} from 'react';
import ProductCard from './product_card';
import {connect} from 'react-redux';
import getProductAPI from './../../utils/apiCaller';
class ProductContent extends Component{
    constructor(props){
        super(props);
    }
    state = {
        arr: []
    }
    componentDidMount(){
       getProductAPI('product','GET', null).then(res => {
           this.setState({
               arr: res.data
           })
       })
    }
    sortAlpha = (arr) => {
        return arr.sort((prev, next) => {
            let prevTitle = prev.title.toLowerCase();
            let nextTitle = next.title.toLowerCase();
            return (prevTitle < nextTitle) ? -1 : 1;
        })
    }
    sortArray = (arr, key = undefined) => {
        if(key == 'title'){
            this.sortAlpha(arr);
        }
        return arr.sort((prev, next) => {
          return prev[key] - next[key];
        })
      } 
    render(){
        const {num, value} = this.props;
        const {arr} = this.state;
        const sorted = this.sortArray(arr, value)
        console.log(value)
        return(
            <div className="product-grid__content" id="product-grid__content">
                {sorted.slice(0, num).map((item, index) => <ProductCard data={item} key={index}/>)}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        num : state.productReducer.num,
        value: state.productReducer.value
    }
}
export default connect(mapStatetoProps,null)(ProductContent)