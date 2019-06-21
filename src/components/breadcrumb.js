import React, {Component} from 'react';
export default class BreadCrumb extends Component{
    // constructor(props){
        
    // }
    render(){
        const {breadCrumb} = this.props;
        return(
            <nav arial-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="#">trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="#">{breadCrumb}</a></li>
                </ol>
            </nav>
        );
    }
}