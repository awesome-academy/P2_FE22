import React, {Component} from 'react';
export default class Aside extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {aside} = this.props;
        return(
            <aside className="aside">
                <ul className="aside__list" id="aside__list">
                    <li className="aside__list-item active">
                        <i className={aside.iconTitle}></i>
                        <a className="aside__text">{aside.title}</a>
                    </li>
                    {aside.itemAside.map((item, index) => {
                        return(
                            <li className="aside__list-item" key={index}>
                                <i className={aside.icon}></i>
                                <a className="aside__text" href="javascript:void(0)">{item}</a>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        );
    }
}