import React, {Component} from 'react';
export default class ProductOption extends Component{
    constructor(props){
        super(props);
    }
    clickOption = (e) => {
        e.preventDefault();
        this.props.event(e.target.value)
    }
    render(){
        const { option, classN} = this.props;
        return(
            <div className={`${classN}__option`}>
                <p className={`${classN}__option__title`}>{option.title}</p>
                <select className={`${classN}__option__select`}
                        onChange={this.clickOption}>
                    {option.item.map((item, index) => {
                        return(
                            <option key={index}
                                    value={item.name}
                                    name={item}
                                    >
                                {item.value}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}