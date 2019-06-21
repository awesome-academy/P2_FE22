import React, {Component} from 'react';
import ProductCard from './product_card';
import {connect} from 'react-redux';
import getProductAPI from './../../utils/apiCaller';
class ProductContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
        this.myRef = React.createRef()
    }
    componentDidMount(){
       getProductAPI('product','GET', null).then(res => {
           this.setState({
               arr: res.data
           })
       })
       this.myRef.current.scrollTop = 0;
    }
    sortByAlphabet = (arr = []) => {
        return arr.sort((prev, next) => {
            let prevTitle = prev.title.toLowerCase();
            let nextTitle = next.title.toLowerCase();
            return (prevTitle < nextTitle) ? -1 : 1;
        })
    }
    sortArray = (arr = [], key = undefined) => {
        if(key == 'title'){
            this.sortByAlphabet(arr);
        }
        return arr.sort((prev, next) => {
          return prev[key] - next[key];
        })
    }
    filterArray = (arr = [], object = undefined) => {
        if( object === undefined){
            return arr;
        }
        if( object.type === 'price'){
            return arr.filter((item) => {
                return object.item[0] <= item[object.type] && item[object.type] <= object.item[1];
            })
        }
        if( object.type === 'color'){
            return arr.filter((item) => {
                return(item[object.type].indexOf(object.item) !== -1)
            })
        }
        return arr.filter((item) => {
            return item[object.type] === object.item;
        })
    }
    render(){
        const {num, value, filter} = this.props;
        const {arr} = this.state;
        const sorted = this.sortArray(this.filterArray(arr, filter), value)
        return(
            <div className="product-grid__content"
                 id="product-grid__content"
                 ref={this.myRef}>
                {sorted.slice(0, num).map((item, index) => <ProductCard data={item} key={index}/>)}
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
export default connect(mapStatetoProps,null)(ProductContent)