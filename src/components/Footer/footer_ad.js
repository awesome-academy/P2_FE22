import React, {Component} from 'react';
export default class FooterAd extends Component{
    render(){
        return(
            <div className="footer__bottom__ad">
                <p className="footer__bottom__title">Giải đáp nhanh :</p>
                <div className="advisory">
                    <div className="advisory__icon--radius">
                        <i className="fa fa-phone rotate90"></i></div>
                    <div className="advisory__content">
                    <p className="advisory__content-title">Tư vấn miễn phí (24/7)</p>
                    <h3 className="advisory__content-phone">1900 650 650</h3>
                    </div>
                </div>
                <div className="advisory">
                    <div className="advisory__icon--radius">
                        <i className="fa fa-comments"></i></div>
                    <div className="advisory__content">
                    <p className="advisory__content-title">Góp ý - phản hồi - thắc mắc</p>
                    <h3 className="advisory__content-phone">1900 650 650</h3>
                    </div>
                </div>
            </div>
        );
    }  
}