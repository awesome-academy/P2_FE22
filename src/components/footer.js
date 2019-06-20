import React, {Component} from 'react';
import FooterAd from './Footer/footer_ad';
import FooterPay from './Footer/footer_pay';
import FooterTop from './Footer/footer_top';
import {listPay, about, policy, service, news, contact, pay} from './variable/footer';
class Footer extends Component {
    render(){
        return(
            <footer className="footer-wrapper">
                <div className="footer">
                    <div className="footer__top">
                        <FooterTop data={about}/>
                        <FooterTop data={policy}/>
                        <FooterTop data={service}/>
                        <FooterTop data={news}/>
                        <FooterTop data={contact}/>
                    </div>
                    <div className="footer__bottom">
                        <FooterPay listPay={listPay}/>
                        <FooterAd pay={pay}/>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer