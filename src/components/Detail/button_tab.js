import React, {Component} from 'react';
class ButtonTab extends Component{
    render(){
        return(
            <div className="tab__btn">
                <button className="tab__btn--link" onclick="opentag(event, 'info')" id="defaultOpen">THÔNG TIN SẢN
                PHẨM</button>
                <button className="tab__btn--link" onclick="opentag(event, 'rate')" id="">ĐÁNH GIÁ - NHẬN XÉT</button>
                <button className="tab__btn--link" onclick="opentag(event, 'tag')" id="">THẺ TAGS</button>
          </div>
        )
    }
}
export default ButtonTab;