import React, {Component} from 'react';
export default class ProductPage extends Component{
    render(){
        return(
            <div className={`${this.props.classN}__page`}>
                <a className={`${this.props.classN}__page--link`}>trang trước</a>
                <a className={`${this.props.classN}__page--link`}>1</a>
                <a className={`${this.props.classN}__page--link`}>2</a>
                <a className={`${this.props.classN}__page--link`}>3</a>
                <a className={`${this.props.classN}__page--link`}>trang cuối</a>
            </div>
        );
    }
}