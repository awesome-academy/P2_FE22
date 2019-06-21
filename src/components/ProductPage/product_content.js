import React, {Component} from 'react';
import ProductCard from './product_card';
import ProductCardWidth from './product_card_width';
import {connect} from 'react-redux';
import getProductAPI from './../../utils/apiCaller';
class ProductContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr: [],
            classN: "product-grid__content"
        }
    }
    componentDidMount(){
       getProductAPI('product','GET', null).then(res => {
           this.setState({
               arr: res.data
           })
       })
    }
    componentWillReceiveProps(){
        if(this.props.isGrid){
            this.setState({
                classN: "newreceive-grid__content"
            })
        }else {
            this.setState({
                classN: "product-grid__content"
            })
        }
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
        const {num, value, filter, isGrid} = this.props;
        const {arr, classN} = this.state;
        const sorted = this.sortArray(this.filterArray(arr, filter), value)
        return(
            <div className={`${this.props.classN}__content`}
                 id="product-grid__content">
                {sorted.slice(0, num).map((item, index) => {
                    return (
                        isGrid ? <ProductCard data={item} key={index}/> 
                        : <ProductCardWidth data={item} key={index}/>
                        )
                })
                }
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
export default connect(mapStatetoProps,null)(ProductContent)