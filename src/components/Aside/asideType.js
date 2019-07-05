import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class AsideType extends Component{
    onClick = (e) => {
        this.props.event(e);
    }
    componentDidMount(){
        if(this.props.typeProduct.length == 0){
            this.props.getTypeProductRequest();
        }
    }
    render(){
        const {aside, typeProduct} = this.props;
        return(
            <aside className="aside">
                <ul className="aside__list" id="aside__list">
                    <li className="aside__list-item active" onClick={this.onClick.bind(this, undefined)}>
                        <i className={aside.iconTitle}></i>
                        <a className="aside__text">{aside.title}</a>
                    </li>
                    {typeProduct.map((item, index) => {
                        return(
                            <li className="aside__list-item"
                                key={index}
                                onClick={this.onClick.bind(this, {type: aside.type, item: item})}>
                                <i className={aside.icon}></i>
                                <a className="aside__text"
                                   href="javascript:void(0)"
                                   >{item}</a>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        typeProduct: state.productReducer.typeProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getTypeProductRequest: () => {
            dispatch(action.getTypeProductRequest())
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AsideType);