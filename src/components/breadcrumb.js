import React, {Component} from 'react';
export default class BreadCrumb extends Component{
    render(){
        const {breadCrumb} = this.props;
        return(
            <nav arial-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="javascript:void(0)">trang chủ</a></li>
                    {breadCrumb.map((item, index) => {
                        return(
                            <li className="breadcrumb-item" key={index}>
                                <a href="javascript:void(0)">{item}</a>
                            </li>
                        )
                    })}
                    
                </ol>
            </nav>
        );
    }
}