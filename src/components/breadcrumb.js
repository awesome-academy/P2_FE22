import React, {Component} from 'react';
export default class BreadCrumb extends Component{
    render(){
        const {breadCrumb} = this.props;
        return(
            <nav arial-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="javascript:void(0)">trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0)">{breadCrumb}</a></li>
                </ol>
            </nav>
        );
    }
}