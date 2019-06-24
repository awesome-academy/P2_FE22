import React, {Component} from 'react';
import SectionHeading from './ProductPage/section_heading';
import AsideList from './Aside/aside_list';
import ProductGrid from './ProductPage/product_grid';
import {connect} from 'react-redux';
class Product extends Component {
    state = {
        classN: 'section-gridproduct'
    }
    componentWillReceiveProps(){
        if(this.props.isGrid){
            this.setState({
                classN: "section-listproduct"
            })
        }else {
            this.setState({
                classN: "section-gridproduct"
            })
        }
    }
    render(){
        return(
            <section className ={this.state.classN}>
                <SectionHeading />
                <div className="section__content">
                    <AsideList />
                    <ProductGrid />
                </div>
            </section>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isGrid: state.productReducer.isGrid
    }
}
export default connect(mapStatetoProps, null)(Product);