import React, {Component} from 'react';
export default class SectionHeading extends Component{
    render(){
        return(
            <div className="section__heading">
                <div className="section__heading__left">
                    <i className="fa fas fa-th-large"></i>
                    <p className="heading__title">danh mục sản phẩm</p>
                </div>
                <div className="section__heading__right">
                    <i className="fa fas fa-caret-left border-89"></i>
                    <i className="fa fas fa-caret-right border-89"></i>
                </div>
              </div>
        );
    }
}