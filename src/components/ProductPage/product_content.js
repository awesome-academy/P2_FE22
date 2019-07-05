import React, {Component} from 'react';
import ProductCard from './product_card';
import ProductCardWidth from './product_card_width';
import {connect} from 'react-redux';
import * as action from './../../actions/indexAction';
import getProductAPI from './../../utils/apiCaller';
import {sortByAlphabet, sortArray, filterArray} from '../../utils/filter';
class ProductContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            classN: "product-grid__content"
        }
    }
    componentDidMount(){
        if(this.props.product.length === 0){
            this.props.getProductRequest();
        }
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
        const {num, value, filter, isGrid,classN, product} = this.props;
        const sorted = sortArray(filterArray(product, filter), value)
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
        product: state.productReducer.product,
        num : state.productReducer.num,
        value: state.productReducer.value,
        filter: state.productReducer.filter,
        isGrid: state.productReducer.isGrid
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getProductRequest: () => {
            dispatch(action.getProductRequest());
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ProductContent)