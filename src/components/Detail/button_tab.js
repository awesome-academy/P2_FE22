import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction';
class ButtonTab extends Component{
    changeTab = (idTab) => {
        this.props.changeTab(idTab)
    }
    render(){
        return(
            <div className="tab__btn">
                <button className="tab__btn--link"
                    onClick={() => this.changeTab('info')}>THÔNG TIN SẢN PHẨM</button>
                <button className="tab__btn--link"
                    onClick={() =>this.changeTab('rate')}>ĐÁNH GIÁ - NHẬN XÉT</button>
                <button className="tab__btn--link"
                    onClick={() =>this.changeTab('tag')}>THẺ TAGS</button>
          </div>
        )
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        changeTab: (idTab) => {
            dispatch(action.changeTab(idTab))
        }
    }
}
export default connect(null, mapDispatchtoProps)(ButtonTab);