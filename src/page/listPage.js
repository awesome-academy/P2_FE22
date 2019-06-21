import React, { Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Product from './../components/product';
import '../styles/grid.css';
class ListPage extends Component {
    render(){
        return(
            <div>
                <BreadCrumb breadCrumb='sản phẩm'/>
                <Product />
                <Footer />
            </div>
        );
    }
}
export default ListPage