import React, {Component} from 'react';
export default class ProductPage extends Component{
    render(){
        return(
            <div className={`${this.props.classN}__page`}>
                <a className={`${this.props.classN}__page--link`} href="#">trang trước</a>
                <a className={`${this.props.classN}__page--link`} href="#">1</a>
                <a className={`${this.props.classN}__page--link`} href="#">2</a>
                <a className={`${this.props.classN}__page--link`} href="#">3</a>
                <a className={`${this.props.classN}__page--link`} href="#">trang cuối</a>
            </div>
        );
    }
}