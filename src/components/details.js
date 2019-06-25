import React, { Component} from 'react';
import MainImage from './Detail/main_img';
import MainContentTop from './Detail/main_top';
import MainContentCenter from './Detail/main_center';
import MainContentSelect from './Detail/main_select';
import MainContentAmount from './Detail/main_amount';
import MainContentSocial from './Detail/main_social';
import SectionHeading from './ProductPage/section_heading';
import Rencently from './Detail/recently';
import ButtonTab from './Detail/button_tab';
import TextTab from './Detail/text_tab';
import Comment from './Detail/facebook_comment';
import {connect} from 'react-redux';
class Details extends Component {
    render(){
        const {product, idTab} = this.props;
        const classN= "tab__content display_block";
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
                {/* conditional render tab  */}
                <div className={classN} id="info" ref="info">
                    { idTab == 'info' && product.info.map((item, index) => {
                        return <TextTab key={index} text={item}></TextTab>
                    })} 
                    { idTab == 'rate' && <Comment></Comment>}
                    { idTab == 'tag' && product.info.slice(0, 2).map((item, index) => {
                        return <TextTab key={index} text={item}></TextTab>
                    })}
                </div>
            </div>
            <section className="section-gridproduct">
                <SectionHeading/>
                <div className="product-grid">
                    <Rencently/>
                </div>
            </section>
        </div>
    }
}
const mapStatetoProps = (state) => {
    return {
        idProduct: state.productReducer.idProduct,
        idTab: state.productReducer.idTab
    }
}
export default connect(mapStatetoProps, null)(Details)