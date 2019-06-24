import React, {Component} from 'react';
class MainContentSelect extends Component {
    render(){
        const {option} = this.props;
        return(
            <div className="main-content--select">
              <div>
                <p className="select__title">Màu sắc:</p>
                <select className="select__option">
                  <option value="-- Chọn màu --">-- Chọn màu --</option>
                  {option.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
              </div>
            </div>
        )
    }
}
export default MainContentSelect