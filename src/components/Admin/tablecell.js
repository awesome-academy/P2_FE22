import React, {Component} from 'react';
export default class Tablecell extends Component {
    constructor(props){
        super(props);
    }
    state = {
        asc: undefined
    }
    orderProduct = () => {
        this.setState({
            asc: !this.state.asc
        })
        this.props.orderProduct(this.props.type)
    }
    render(){
        const {children, className} = this.props;
        const {asc} =this.state;
        const arrow = asc == undefined ? '' : asc ? 'down' : 'up'; 
        return(
            <th onClick={this.orderProduct} className={className}>
                <p>{children}</p>
                <i className={`fa fa-long-arrow-${arrow} asc`}></i>
            </th>
        );
    }
}