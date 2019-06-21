import React, {Component} from 'react';
import Aside from './aside';
import AsideImage from './aside_img';
import {productPortfolio, priceList, colorList, galery} from './../variable/header';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class AsideList extends Component{
    render(){
        return(
            <div className="aside-list">
                <Aside aside={productPortfolio} event={this.props.filterProduct}/>
                <Aside aside={priceList}  event={this.props.filterProduct}/>
                <Aside aside={colorList}  event={this.props.filterProduct}/>
                <AsideImage aside={galery} />
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        filterProduct: (filter) => {
            dispatch(action.filterProduct(filter))
        }  
    }
}
export default connect(null, mapDispatchtoProps)(AsideList)