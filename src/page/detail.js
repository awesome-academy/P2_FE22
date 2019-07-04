import React, {Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Details from '../components/details';
import AsideList from '../components/Aside/aside_list';
import getProductAPI from '../utils/apiCaller';
import {connect} from 'react-redux';
import * as action from '../actions/indexAction';
import '../styles/detail.css';
class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            idProduct: this.props.match.params.id
        }
    }
    componentDidMount(){
        this.props.getProductDetailRequest(this.state.idProduct);
    }
    render(){
        const {productDetail} =this.props;
        const breadCrumb = ['danh sách sản phẩm', productDetail.title];
        return(
            <div>
            <div className="section-detail">
                <BreadCrumb breadCrumb={breadCrumb}/>
                <div className="section__content">
                    <AsideList />
                    <Details product={productDetail}/>
                </div>
            </div>
            <Footer />
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        productDetail: state.productReducer.productDetail,
        idProduct: state.productReducer.idProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getProductDetailRequest: (id) => {
            dispatch(action.getProductDetailRequest(id))
        },
        selectProduct: (idProduct) => {
            dispatch(action.selectProduct(idProduct))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Detail);