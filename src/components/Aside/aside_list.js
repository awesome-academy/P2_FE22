import React, {Component} from 'react';
import Aside from './aside';
import AsideImage from './aside_img';
import {productPortfolio, priceList, colorList, galery} from './../variable/header';
import getProductAPI from '../../utils/apiCaller';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class AsideList extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        getProductAPI('product?isHot=true','GET', null).then(res => {
            this.setState({
                arr: res.data
            })
        })
    }
    render(){
        return(
            <div className="aside-list">
                <Aside aside={productPortfolio} event={this.props.filterProduct}/>
                {!this.props.isSelectProduct && <Aside aside={priceList}  event={this.props.filterProduct}/>}
                {!this.props.isSelectProduct && <Aside aside={colorList}  event={this.props.filterProduct}/>}
                <AsideImage aside={this.state.arr} style={galery}/>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isSelectProduct: state.productReducer.isSelectProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        filterProduct: (filter) => {
            dispatch(action.filterProduct(filter))
        }  
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AsideList)