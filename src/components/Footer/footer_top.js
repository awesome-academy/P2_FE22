import React, {Component} from 'react';
export default class FooterTop extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className="footer__top__block">
                <div className="footer__top__heading">
                    <i className="fa fa-th-large"></i>
                    <h2 className="title">{data.title}</h2>
                </div>
                <div className="footer__top__content">
                    {data.item.map((item, index) => {
                        return(
                            <div className="footer__top__content--mt23"
                                 key={index}>
                                {item.icon && <i className={item.icon}></i>}
                                <a>{item.title}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}