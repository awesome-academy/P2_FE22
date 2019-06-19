import React, {Component} from 'react';
export default class BreadCrumb extends Component{
    render(){
        return(
            <nav arial-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="#">trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="#">giỏ hàng</a></li>
                </ol>
            </nav>
        );
    }
}