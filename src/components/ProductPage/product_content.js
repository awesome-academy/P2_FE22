import React, {Component} from 'react';
import ProductCard from './product_card';
import ProductCardWidth from './product_card_width';
import {connect} from 'react-redux';
import getProductAPI from './../../utils/apiCaller';
import {sortByAlphabet, sortArray, filterArray} from '../../utils/filter';
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
    render(){
        const {num, value, filter, isGrid,classN} = this.props;
        const {arr} = this.state;
        const sorted = sortArray(filterArray(arr, filter), value)
        return(
            <div className={`${classN}__content`}
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