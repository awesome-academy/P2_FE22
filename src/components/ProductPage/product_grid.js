import React, {Component} from 'react';
import ProductHead from './product_head';
import ProductContent from './product_content';
import ProductPage from './product_page';
import {connect} from 'react-redux';
class ProductGrid extends Component{
    state = {
        classN: "product-grid"
    }
    componentWillReceiveProps(){
        if(this.props.isGrid){
            this.setState({
                classN: "newreceive-grid"
            })
        }else {
            this.setState({
                classN: "product-grid"
            })
        }
    }
    render(){
        const {classN} = this.state;
        return(
            <div className={classN}>
                <ProductHead classN={classN}/>
                <ProductContent classN={classN}/>
                <ProductPage classN={classN}/>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isGrid: state.productReducer.isGrid
    }
}
export default connect(mapStatetoProps, null)(ProductGrid)