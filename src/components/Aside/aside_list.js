import React, {Component} from 'react';
import Aside from './aside';
import AsideImage from './aside_img';
import AsideType from './asideType';
import {productPortfolio, priceList, colorList, galery} from './../variable/header';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class AsideList extends Component{
    componentDidMount(){
        this.props.getHotProductRequest();
    }
    render(){
        const {hotProduct} =  this.props;
        return(
            <div className="aside-list">
                <AsideType aside={productPortfolio} event={this.props.filterProduct}/>
                {!this.props.isSelectProduct && <Aside aside={priceList}  event={this.props.filterProduct}/>}
                {!this.props.isSelectProduct && <Aside aside={colorList}  event={this.props.filterProduct}/>}
                {!this.props.isSelectProduct && <AsideImage aside={hotProduct} style={galery}/>}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        hotProduct: state.productReducer.hotProduct,
        isSelectProduct: state.productReducer.isSelectProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getHotProductRequest: () => {
            dispatch(action.getHotProductRequest())
        },
        filterProduct: (filter) => {
            dispatch(action.filterProduct(filter))
        }  
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AsideList)