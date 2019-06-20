import React, {Component} from 'react';
export default class FooterAd extends Component{
    render(){
        const {pay} = this.props;
        return(
            <div className="footer__bottom__ad">
                <p className="footer__bottom__title">Giải đáp nhanh :</p>
                {pay.map((item, index) => {
                    return(
                        <div className="advisory" key={index}>
                            <div className="advisory__icon--radius">
                                <i className={item.icon}></i></div>
                            <div className="advisory__content">
                            <p className="advisory__content-title">{item.title}</p>
                            <h3 className="advisory__content-phone">{item.phone}</h3>
                        </div>
                </div>
                    );
                })}
            </div>
        );
    }  
}