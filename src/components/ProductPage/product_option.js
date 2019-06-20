import React, {Component} from 'react';
export default class ProductOption extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { option} = this.props;
        return(
            <div className="product-grid__option">
                <p className="product-grid__option__title">{option.title}</p>
                <select className="product-grid__option__select">
                    {option.item.map((item, index) => {
                        return(
                            <option key={index}
                                    value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}