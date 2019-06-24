import React, { Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Product from './../components/product';
import {connect } from 'react-redux';
import * as action from '../actions/indexAction';
import '../styles/grid.css';
import '../styles/list.css';
class ListPage extends Component {
    onBackButtonEvent =  (e) => {
        e.preventDefault();
        this.props.isSelectProduct(false)
        this.props.changeStyle(!this.props.isGrid)
    }
    componentDidMount = () => {
        window.onpopstate = this.onBackButtonEvent;
    }
    render(){
        const breadCrumb = ['danh mục sản phẩm'];
        return(
            <div>
                <BreadCrumb breadCrumb={breadCrumb}/>
                <Product />
                <Footer />
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isGrid: state.productReducer.isGrid
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        isSelectProduct: (isSelectProduct) => {
            dispatch(action.isSelectProduct(isSelectProduct))
        },
        changeStyle: (isGrid) => {
            dispatch(action.changeStyle(isGrid));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ListPage)