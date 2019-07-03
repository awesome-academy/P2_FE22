import React, {Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Details from '../components/details';
import AsideList from '../components/Aside/aside_list';
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
        this.props.showDetailProductAPI(this.state.idProduct)
    }
    render(){
        const {productDetail} = this.props;
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
        idProduct: state.productReducer.idProduct,
        productDetail: state.productReducer.productDetail
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        showDetailProductAPI: (id) => {
            dispatch(action.showDetailProductAPI(id));
        },
        selectProduct: (idProduct) => {
            dispatch(action.selectProduct(idProduct))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Detail);