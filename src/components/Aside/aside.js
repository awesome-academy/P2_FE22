import React, {Component} from 'react';
export default class Aside extends Component{
    constructor(props){
        super(props);
    }
    onClick = (e) => {
        this.props.event(e);
    }
    render(){
        const {aside} = this.props;
        return(
            <aside className="aside">
                <ul className="aside__list" id="aside__list">
                    <li className="aside__list-item active" onClick={this.onClick.bind(this, undefined)}>
                        <i className={aside.iconTitle}></i>
                        <a className="aside__text">{aside.title}</a>
                    </li>
                    {aside.itemAside.map((item, index) => {
                        return(
                            <li className="aside__list-item"
                                key={index}
                                data-value={item.key}
                                onClick={this.onClick.bind(this, {type: aside.type, item: item.key})}>
                                <i className={aside.icon}></i>
                                <a className="aside__text"
                                   href="javascript:void(0)"
                                   >{item.value}</a>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        );
    }
}