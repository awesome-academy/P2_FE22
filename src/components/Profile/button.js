import React, {Component} from 'react';
import '../../styles/profile/button.css'
class ButtonTab extends Component{
    changeTab = (idTab) => {
        this.props.setTab(idTab)
    }
    render(){
        return(
            <div className="tab__btn">
                <button className="tab__btn--link"
                    onClick={() => this.changeTab('profile')}>THÔNG TIN CÁ NHÂN</button>
                <button className="tab__btn--link"
                    onClick={() =>this.changeTab('cart')}>GIỎ HÀNG</button>
                <button className="tab__btn--link"
                    onClick={() =>this.changeTab('order')}>LỊCH SỬ MUA HÀNG</button>
          </div>
        )
    }
}
export default ButtonTab;