import React, {Component} from 'react';
class MainContentCenter extends Component {
    render(){
        const {description} = this.props;
        return(
            <div className="main-content--center">
              <p className="content__info">Thông tin sản phẩm</p>
              <p className="content__text">{description}</p>
            </div>
        )
    }
}
export default MainContentCenter