import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as action from '../../actions/indexAction';
import '../../styles/aside.css'
class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHide: true
        }
    }
    showCate = () => {
        this.props.showProduct(10);
        this.setState({
            isHide: !this.state.isHide
        })
    }
    render(){
        const {isHide} = this.state;
        return(
            <aside className="sidebar">
                <div className="sidebar__item">
                    <i class="fa fa-home sidebar__icon"></i>
                    <Link to="/dashboard">Home</Link>
                </div>
                <div className="sidebar__item">
                    <i class="fa fa-folder sidebar__icon" onClick={this.showCate}></i>
                    <Link to='/dashboard/product' onClick={this.showCate}>Product</Link>
                    <i class="fa fa-angle-down sidebar__arrow"></i>
                        {!isHide && this.props.children}
                </div>
                <div className="sidebar__item">
                    <i class="fa fa-users sidebar__icon"></i>
                    <Link to="/dashboard/user">User</Link>
                    </div>
                <div className="sidebar__item">
                    <i class="fa fa-shopping-cart sidebar__icon"></i>
                    <Link to="/dashboard/order">Order</Link>
                    </div>
            </aside>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        showProduct: (num) => {
            dispatch(action.showProduct(num))
        }
    }
}
export default connect(null, mapDispatchtoProps)(Aside);