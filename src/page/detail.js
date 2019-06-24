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
            product: {
                title:"",
                detailsImg: [],
                color: [],
                info: [],
                img: ""
            },
            idProduct: this.props.idProduct || this.props.match.params.id
        }
    }
    componentDidMount(){
        const endpoint = `product/?id=${this.state.idProduct}`;
        getProductAPI(endpoint,'GET', null).then(res => {
            this.setState({
                product: res.data[0]
            })
        })
    }
    render(){
        const {product} = this.state;
        const breadCrumb = ['danh sách sản phẩm', product.title];
        return(
            <div>
            <div className="section-detail">
                <BreadCrumb breadCrumb={breadCrumb}/>
                <div className="section__content">
                    <AsideList />
                    <Details product={product}/>
                </div>
            </div>
            <Footer />
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        idProduct: state.productReducer.idProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        selectProduct: (idProduct) => {
            dispatch(action.selectProduct(idProduct))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Detail);