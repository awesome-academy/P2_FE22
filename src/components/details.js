import React, { Component} from 'react';
import MainImage from './Detail/main_img';
import MainContentTop from './Detail/main_top';
import MainContentCenter from './Detail/main_center';
import MainContentSelect from './Detail/main_select';
import MainContentAmount from './Detail/main_amount';
import MainContentSocial from './Detail/main_social';
import MainContent from './Detail/main_content';
import ButtonTab from './Detail/button_tab';
import TextTab from './Detail/text_tab';
import {connect} from 'react-redux';
class Details extends Component {
    render(){
        const {product} = this.props;
        return <div className="main-detail">
            <div className="flex">
                <MainImage imglarger={product.img} img={product.detailsImg}/>
                <div className="main-content">
                    <MainContentTop title={product.title}
                        stars={product.stars}
                        rates={product.rates}
                        price={product.price}/>
                    <MainContentCenter
                        description={product.shortDescription}/>
                    <MainContentSelect option={product.color}/>
                    <MainContentAmount />
                    <MainContentSocial />
                </div>
            </div>
            <div className="main-tab">
                <ButtonTab />
                <MainContent id="info">
                    {product.info.map((item, index) => {
                        return <TextTab key={index} text={item}></TextTab>
                    })}
                </MainContent>
                <MainContent id="info">
                    {product.info.map((item, index) => {
                        return <TextTab key={index} text={item}></TextTab>
                    })}
                </MainContent>
                <MainContent id="info">
                    {product.info.map((item, index) => {
                        return <TextTab key={index} text={item}></TextTab>
                    })}
                </MainContent>
            </div>
            <section className="section-gridproduct"></section>
        </div>
    }
}
const mapStatetoProps = (state) => {
    return {
        idProduct: state.productReducer.idProduct
    }
}
export default connect(mapStatetoProps, null)(Details)