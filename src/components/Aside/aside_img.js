import React, {Component} from 'react';
export default class AsideImage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {aside} = this.props;
        return(
            <aside className="aside">
                <ul className="aside__list">
                    <li className="aside__list-item active">
                        <i className={aside.iconTitle}></i>
                        <a className="aside__text">{aside.title}</a>
                    </li>
                    {aside.itemAside.map((item, index) => {
                        return(
                            <li className="aside__list-item height-120" 
                                key={index}>
                                <img className="aside__list-item--img"
                                         src={process.env.PUBLIC_URL + item.src}
                                    />
                                <div className="aside__list-item__content">
                                    <p className="aside__list-item__content--name">
                                    {item.name}</p>
                                    <p className="aside__list-item__content--price">
                                    {item.price}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        );
    }
}