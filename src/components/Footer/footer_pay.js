import React, {Component} from 'react';
export default class FooterPay extends Component{
    render(){
        const {listPay} = this.props;
        return(
            <div className="footer__bottom__pay">
                <p className="footer__bottom__title">Thanh toán :</p>
                <div className="pay__grid">
                    {listPay.map((item, index) => {
                        return(
                            <img key={index}
                                 src={process.env.PUBLIC_URL + item}
                                 alt="#"/>
                        );
                    })}
                </div>
            </div>
        );
    }
}