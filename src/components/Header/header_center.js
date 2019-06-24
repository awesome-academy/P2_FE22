import React, {Component} from 'react';
export default class HeaderCenter extends Component{
  render(){
    return(
      <div className="header__center--wrapper">
        <div className="header__center">
            <img className="header__center-logo"
                  src={process.env.PUBLIC_URL + '/imgs/logo.png'}
                  alt="#"/>
          <div className="header__center-middle">
            <div className="header__center-contact">
              <h2 className="header__center-heading">hotline :</h2>
              <p className="header__center-phone">(04) 9500 9650 - (04) 9500 8850 </p>
            </div>
            <div className="header__center-contact">
              <h2 className="header__center-heading">đặt hàng nhanh :</h2>
              <p className="header__center-phone">(04) 9500 9650 - (04) 9500 8850 </p>
            </div>
          </div>
          <div className="header__center-form header__search-form">
            <input className="header__search-form__input" placeholder="Tìm kiếm..."/>
            <i className="fa fa-search header__search-form__btn"></i>
          </div>
        </div>
      </div>
  );
  }
}