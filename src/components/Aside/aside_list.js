import React, {Component} from 'react';
import Aside from './aside';
import AsideImage from './aside_img';
import {productPortfolio, priceList, colorList, galery} from './../variable/header';
export default class AsideList extends Component{
    render(){
        return(
            <div className="aside-list">
                <Aside aside={productPortfolio}/>
                <Aside aside={priceList}/>
                <Aside aside={colorList}/>
                <AsideImage aside={galery} />
            </div>
        );
    }
}